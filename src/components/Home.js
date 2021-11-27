import React from 'react';
import styled from "styled-components";
import Section from './Section';

function home() {
    return (
        <div>
            <Container>
                <Section/>
            </Container>
        </div>
    )
}

export default home
const Container=styled.div`
height:100vh;

`
