import React from 'react'
import styled from "styled-components";
function header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=" "></img>
            </a>
            <Menu>


            </Menu>
        </Container>
    )
}

export default header

const Container=styled.div`
min-height:60px;


`
const Menu=styled.div`
`
