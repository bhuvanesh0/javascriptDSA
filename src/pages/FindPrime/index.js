import React, { useState } from 'react'
import styled from 'styled-components'
import CodeSnippet from '../../components/codeSnippet'
import {InputContainer, FormContainer, Container} from '../../sharedElement/Elements'

const ValidatePrime = styled.div`
    label{
        display: block;
        padding: 10px 0px;
    }
    input{
        margin-right: 20px;
    }
   
`

function FindPrime() {
    const [number, setNumber] = useState();
    const [result, setResult] = useState();
    const [validated, setValidated] = useState();
    const isPrime = ()=>{
        console.log("001")
        let value = true;
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                value = false
            }
        }
        console.log(value)
        setResult(value +"")
        setValidated(number);
    }

    let code = `
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            value = false
        }
    }
    `
    return (
        <>
            <CodeSnippet code={code} />
            <FormContainer>
                <InputContainer>
                    <label>Type any number to check number is prime.</label>
                    <input type='number' onChange={(e)=>{setNumber(e.target.value)}} />
                </InputContainer>
                <button onClick={()=>isPrime()}> Validate</button>
            </FormContainer>
            {validated ?<Container>
                 <p><span>{validated} is prime: {result}</span></p> 
            </Container> : null}
        </>
    )
}

export default FindPrime


