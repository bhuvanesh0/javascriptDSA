import React, { useState } from "react";
import {
  InputContainer,
  FormContainer,
  Container,
} from "../../sharedElement/Elements";
import CodeSnippet from "../../components/codeSnippet";

function FindSquareRoot() {
  const [number, setNumber] = useState();
  const [validated, setValidated] = useState();
  const [squareRoot, setSquareRoot] = useState();
  const checkForSquareRoot = () => {
    let p = 3;
    let root = 2;
    let index = 2;
    while (index * index <= number) {
        root = index;
      if (root * root == number) {
        return root;
      }
      index++;
    }
    let incr = 0.1;
    for (let i = 0; i < p; i++) {
      while (root * root <= number) {
        root = (parseFloat(root) + parseFloat(incr));
      }
      root -= incr;
      incr /= 10;
    }
    return root.toFixed(3);
  };
  const findRoot = () => {
    if(number > 2){
        setSquareRoot(checkForSquareRoot())
        setValidated(number)
    }
  };

  const code = `
    const checkForSquareRoot = () => {
      let p = 3;
      let root = 2;
      let index = 2;
      while (index * index <= number) {
          root = index;
        if (root * root == number) {
          return root;
        }
        index++;
      }
      let incr = 0.1;
      for (let i = 0; i < p; i++) {
        while (root * root <= number) {
          root = (parseFloat(root) + parseFloat(incr));
        }
        root -= incr;
        incr /= 10;
      }
      return root.toFixed(3);
    }
  `
  return (
    <>
      <CodeSnippet code={code} />
      <FormContainer>
        <InputContainer>
          <label>Type number to find the square root.</label>
          <input
            type="number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </InputContainer>
        <button onClick={() => findRoot()}>Validate</button>
      </FormContainer>
      { 
        validated ? 
          <Container>
             <p> Square root of {validated} is {squareRoot}. </p>
          </Container> : null
      }
    </>
  );
}

export default FindSquareRoot;
