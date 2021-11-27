import React from 'react';
import styled from "styled-components";
import Section from './Section';

function home() {
    return (
        <div>
            <Container>
                <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
                />
                
                <Section
                 title="Model Y"
                 description="Order Online for Touchless Delivery"
                 backgroundImg="model-y.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing inventory"
                
                />
                <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
                />
                <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
                />
                <Section
                   title="Lowest cost solar panels in America"
                   description="Money back garuntee"
                   backgroundImg="solar-panel.jpg"
                   leftBtnText="Order Now"
                   rightBtnText="Learn More"
                />
             <Section
                   title="Solar For New Roof"
                   description="Solar roofs Costs Less Than A New Roofs Plus Solar Panels"
                   backgroundImg="solar-roof.jpg"
                   leftBtnText="Order Now"
                   rightBtnText="Learn More"
                />
                <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
                
                
                
                />
            </Container>
        </div>
    )
}

export default home
const Container=styled.div`
height:100vh;

`
