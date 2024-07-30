import React, { useState } from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function FindSeries() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()
    const onClickHandler = () => {
        if(number < 2){
            return false;
        }
        let feb = [0,1]
        for (let i = 2; i < number; i++) {
           feb[i] = feb[i - 1] + feb[i - 2];    
        }
        setResult([...feb])
        setValidated(number)
    }
    const code = `
        if(number < 2){
            return false;
        }
        let feb = [0,1]
        for (let i = 2; i < number; i++) {
            feb[i] = feb[i - 1] + feb[i - 2];    
        }

        // Big O = O(n)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Find sequence of Fibonacci numbers between 0 and given number.</label>
            <input type='number' onChange={(e) => {setNumber(parseInt(e.target.value))}} />
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {validated ? <Container>
        <p>
            Febonacci sequence for {validated} is.<br/>
            {result.map((item)=> item + ', ' )}
        </p>
    </Container> : null }
</>
)
}

export default FindSeries


