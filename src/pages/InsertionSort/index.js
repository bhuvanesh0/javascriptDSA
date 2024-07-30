import React, {useState} from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function InsertionSort() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()
    const onClickHandler = () => {
        let array = [ -2, 1, 4, 3, -1, 5, 6, 2]
        for (let index = 1; index < array.length; index++) {
            let insertTarget = array[index]; // 4
            
            let j = index -1;
            while(j >= 0 && array[j] < insertTarget){
                array[j +1] = array[j];
                j = j-1;
            }
            array[j+1] = insertTarget;
        }
        setResult(array)
    }
    const code = `
        let array = [ -2, 1, 4, 3, -1, 5, 6, 2]
        for (let index = 1; index < array.length; index++) {
            let insertTarget = array[index]; // 4
            
            let j = index -1;
            while(j >= 0 && array[j] < insertTarget){
                array[j +1] = array[j];
                j = j-1;
            }
            array[j+1] = insertTarget;
        }
        setResult(array)

        // Big O = O(n^2)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Sort the given array using insertion method ([ -2, 1, 4, 3, -1, 5, 6, 2]).</label>
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {result ? <Container>
        Sorted array : {result.map((item)=> item+", ")}
    </Container> : null }
</>
)
}

export default InsertionSort