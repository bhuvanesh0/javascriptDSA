import React, {useState} from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function RecursiveFibonacci() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()
    const recursiveFunction = (n) => {
        if(n < 2){
            return n;
        }
        return recursiveFunction(n -1) + recursiveFunction(n -2);
    }
    const onClickHandler = () => {
        setValidated(number)
        setResult(recursiveFunction(number))
    }
    const code = `
        const recursiveFunction = (n) => {
            if(n < 2){
                return n;
            }
            return recursiveFunction(n -1) + recursiveFunction(n -2);
        }

        // Big 0 = O(2^n)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Find Nth fibonacci using recursive method</label>        
            <input type='number' onChange={(e) => {setNumber(e.target.value)}} />
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {validated ? <Container>
        {validated} fibonacci value is {result}
    </Container> : null }
</>
)
}

export default RecursiveFibonacci