import React, {useState} from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function RecursiveFactorial() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()
    const recursive = (n) => {
        if(n == 0){
            return 1
        }
        return n * recursive(n -1);
    }
    const onClickHandler = () => {
        setResult(recursive(number));
        setValidated(number)
    }
    const code = `
        const recursive = (n) => {
            if(n == 0){
                return 1
            }
            return n * recursive(n -1);
        }

        // Big O = O(n)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Find factorial using recursive method</label>
            <input type='number' onChange={(e) => {setNumber(e.target.value)}} />
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {validated ? <Container>
        Factorial of {validated} is: {result}
    </Container> : null }
</>
)
}

export default RecursiveFactorial