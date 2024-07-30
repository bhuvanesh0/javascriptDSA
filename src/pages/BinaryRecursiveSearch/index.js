import React, {useState} from 'react'
import { InputContainer, FormContainer, Container, } from '../../sharedElement/Elements'
import CodeSnippet from '../../components/codeSnippet'
function BinaryRecursive() {
    const [number, setNumber] = useState()
    const [validated, setValidated] = useState()
    const [result, setResult] = useState()

    const binaryRecursiveSearch = (list, target, leftIndex, rightIndex) => {
        if(leftIndex > rightIndex){
            return -1
        }
        let middle = Math.floor((leftIndex + rightIndex) /2);
        if(list[middle] === target){
            return middle
        }
        if (target < list[middle]) {
            return binaryRecursiveSearch(list, target, leftIndex, middle -1)
        }else{
            return binaryRecursiveSearch(list, target, middle +1, rightIndex)
        }
    }

    const onClickHandler = () => {
        const list = [1,2,3,4,5,6,7,8]
            setResult(binaryRecursiveSearch(list, parseInt(number), 0, list.length -1))
            setValidated(number)
    }
    const code = `
        const binaryRecursiveSearch = (list, target, leftIndex, rightIndex) => {
            if(leftIndex > rightIndex){
                return -1
            }
            let middle = Math.floor((leftIndex + rightIndex) /2);
            if(list[middle] === target){
                return middle
            }
            if (target < list[middle]) {
                return binaryRecursiveSearch(list, target, leftIndex, middle -1)
            }else{
                return binaryRecursiveSearch(list, target, middle +1, rightIndex)
            }
        }
        
        // Big O = O(log n)
    `
    return (
    <>
    <CodeSnippet code={code} />
    <FormContainer>
        <InputContainer>
            <label>Search element index using binary recursive from array [1,2,3,4,5,6,7,8]</label>
            <input type='number' onChange={(e) => {setNumber(e.target.value)}} />
        </InputContainer>
        <button onClick={() => {onClickHandler()}}>Validate</button>
    </FormContainer>
    {validated ? <Container>
        {validated} index is {result}
    </Container> : null }
</>
)
}

export default BinaryRecursive