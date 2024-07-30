import React, {useState} from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function QuickSort() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()
    const quickSort = (array)=>{
        if(array.length < 2){
            return array;
        }
        let pivot = array[array.length -1];
        let leftLesser = [];
        let rightGreater = [];
        for (let index = 0; index < array.length -1; index++) {
            if(array[index] < pivot){
                rightGreater.push(array[index]);
            }else{
                leftLesser.push(array[index])
            }
        }
        return [...quickSort(leftLesser), pivot, ...quickSort(rightGreater)]
    }
    const onClickHandler = () => {
        setResult(quickSort([5, 1, 12, -1, 0, 4]))
    }
    const code = `
        if(array.length < 2){
            return array;
        }
        let pivot = array[array.length -1];
        let leftLesser = [];
        let rightGreater = [];
        for (let index = 0; index < array.length -1; index++) {
            if(array[index] < pivot){
                rightGreater.push(array[index]);
            }else{
                leftLesser.push(array[index])
            }
        }
        return [...quickSort(leftLesser), pivot, ...quickSort(rightGreater)]

        // Big O = O(nlogn)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Sort an array using recursive method.</label>
            <label>Array : [5, 1, 12, -1, 0, 4]</label>
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {result ? <Container>
        Sorted array: {result.map((item) => (item + ', '))}
    </Container> : null }
</>
)
}

export default QuickSort