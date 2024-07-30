import React, {useState} from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function BinarySearch() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()
    const binarySearchIndex = (list, value) => {
        let leftIndex = 0;
        let rightIndex = list.length -1;
        while(leftIndex <= rightIndex){
            let middle = Math.floor((leftIndex + rightIndex) /2);
            if(list[middle] === value){
                return middle
            }
            if(value < list[middle]){
                rightIndex = middle -1
            }else{
                leftIndex = middle +1
            }
        }
        return -1;
    }
    const onClickHandler = () => {
        let list = [1,2,3,4,5,6,7,8]
        setResult(binarySearchIndex(list, parseInt(number)))
        setValidated(number)
    }
    const code = `
        const binarySearchIndex = (list, value) => {
            let leftIndex = 0;
            let rightIndex = list.length -1;
            while(leftIndex <= rightIndex){
                let middle = Math.floor((leftIndex + rightIndex) /2);
                if(list[middle] === value){
                    return middle
                }
                if(value < list[middle]){
                    rightIndex = middle -1
                }else{
                    leftIndex = middle +1
                }
            }
            return -1;
        }    
        // Big O = O(log n)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Find Value index using binary search from the [1,2,3,4,5,6,7,8]</label>
            <input type='number' onChange={(e) => {setNumber(e.target.value)}} />
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {validated ? <Container>
        Index of {validated} is {result}
    </Container> : null }
</>
)
}

export default BinarySearch