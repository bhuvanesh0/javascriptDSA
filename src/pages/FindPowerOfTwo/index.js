import React, {useState} from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function FindPowerOfTwo() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()
    const [bitwise, setBitwise] = useState(false)
    const onClickHandler = () => {
        if(bitwise){
            if (number < 1) {
                return false;
            }
            let n = number;
            if((n & (n-1)) == 0){
                setValidated(number)
                setResult(number + ' is power of 2.')
            } else{
                setValidated(number)
                setResult(number + ' is not power of 2.')
            }
        }else{
            if (number < 1) {
                return false;
            }
            let n = number;
            while(n > 1){
                if(n % 2 !== 0){
                    setValidated(number)
                    setResult(number + ' is not power of 2.')
                    return false;
                }
                n = n/2
            }
            setValidated(number)
            setResult(number + ' is power of 2.')
        }
    }
    const code = `
        if (number < 1) {
            return false;
        }
        let n = number;
        // bitwise method
        if((n & (n-1)) == 0){
            setValidated(number)
            setResult(number + ' is power of 2.')
        } else{
            setValidated(number)
            setResult(number + ' is not power of 2.')
        }
        // Big O = O(1)
        // using loop
        while(n > 1){
            if(n % 2 !== 0){
                setValidated(number)
                setResult(number + ' is not power of 2.')
                return false;
            }
            n = n/2
        }
        setValidated(number)
        setResult(number + ' is power of 2.')
        // Big O = O(log n)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Find given number is power of two.</label>
            <input type='number' onChange={(e) => {setNumber(e.target.value)}} />
        </InputContainer>
        <InputContainer inputwidth='20px'>
            <label>Use bitwise.</label>
            <input type="checkbox" onClick={(e) => {setBitwise(!bitwise)}} checked={bitwise} />
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {validated ? <Container>
        {result}
    </Container> : null }
</>
)
}

export default FindPowerOfTwo