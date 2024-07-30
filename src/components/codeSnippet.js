import React from 'react'
import styled from 'styled-components'
const Snippet = styled.div`
    margin: 15px;
    padding: 15px;
    border: 1px solid #a9c8ff;
    background: #daf0fd;
`

export default function CodeSnippet({code}){
return(
    <Snippet>
        <pre>
            <code>
                {code}
            </code>
        </pre>
    </Snippet>
    
)
}