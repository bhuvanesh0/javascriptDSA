import React from 'react'
import styled from 'styled-components';

export const InputContainer = styled.div`
    padding: 12px 0px;
    label{
        font-family: sans-serif;
        display: block;
    }

    input{
        margin-top: 10px;
        font-family: sans-serif;
        width: ${({inputwidth = '300px'}) => inputwidth};
        display: block;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
    }

`

export const FormContainer = styled.div`
    padding: 15px;
    margin:15px;
    background: white;
    border: 1px solid #dbdbdb;

    button{
        padding: 10px 20px;
        margin: 10px 0px;
        border-radius: 6px;
    }
`

export const Container = styled.div`
padding: 15px;
margin:15px;
background: white;
border: 1px solid #dbdbdb;

h1, h2, h3, h4, h5, h6, p, span, li, input, div, label{
    font-family: sans-serif;
    line-height: 28px
}
`