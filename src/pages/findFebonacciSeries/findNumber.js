import React, {useState} from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function IsNumberFibonacci() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()
    const isSquareroot = (n) =>{
        let value = parseInt(Math.sqrt(n));
        if(value * value == n){
            return true
        }
        return false
    }
    const onClickHandler = () => {
        if(isSquareroot(5*number*number + 4 ) || isSquareroot(5*number*number - 4 )){
            setValidated(number);
            setResult(" is fibonacci")
        }else{
            setValidated(number);
            setResult(" is not a fibonacci")
        }
    }
    const code = `
        let value = parseInt(Math.sqrt(n));
        if(value * value == n){
            return true
        }
        return false

        // Big O = O(1)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Find given number is Fibonacci.</label>
            <input type='number' onChange={(e) => {setNumber(e.target.value)}} />
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {validated ? <Container>
        <p>{validated + result} </p>
    </Container> : null }
</>
)
}

export default IsNumberFibonacci