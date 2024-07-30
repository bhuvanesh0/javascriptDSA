import React, { useState } from "react";
import {
  InputContainer,
  FormContainer,
  Container,
} from "../../sharedElement/Elements"
import CodeSnippet from "../../components/codeSnippet"

function FindAllPrime() {
  const [primeList, setPrimeList] = useState([]);
  const [numberRange, setNumberRange] = useState(0);

  const isPrime = (n) => {
    if (n <= 1) {
      return true;
    }

    let a = 2;
    while (a * a <= n) {
      if (n % a === 0) {
        return false;
      }
      a++;
    }

    return true;
  };

  let code = `
    const isPrime = (n) => {
    if (n <= 1) {
      return true;
    }

    let a = 2;
    while (a * a <= n) {
      if (n % a === 0) {
        return false;
      }
      a++;
    }
    
    return true;
    };

    const checkForPrimeNumbers = () => {
        if (numberRange > 0) {
          const list = [];
          for (let i = 1; i <= numberRange; i++) {
            list.push(isPrime(i) ? {i} is prime : {i} is not prime);
          }
          console.log(list);
        }
      };
    `;

  const checkForPrimeNumbers = () => {
    if (numberRange > 0) {
      const list = [];
      for (let i = 1; i <= numberRange; i++) {
        list.push(isPrime(i) ? `${i} is prime` : `${i} is not prime`);
      }
      setPrimeList(list);
    }
  };
  return (
    <>
      <CodeSnippet code={code} />
      <FormContainer>
        <InputContainer>
          <label>
            Type number to find all the numbers between 0 to given number is
            prime.
          </label>
          <input
            type="number"
            onChange={(e) => {
              setNumberRange(e.target.value);
            }}
          />
        </InputContainer>
        <button onClick={() => checkForPrimeNumbers()}>Validate</button>
      </FormContainer>
      {primeList.length > 0 ? (
        <Container>
          {primeList.map((item) => {
            return <p>{item}</p>;
          })}
        </Container>
      ) : null}
    </>
  );
}

export default FindAllPrime;
