import React from 'react'
import styled from "styled-components";
import Section from './Section';

const Container = styled.div`
    height: 100vh;

`;


function Home({ title, subtitle, backgroundImg, leftButton, rightButton }) {
    return (
       <Container>
           <Section 
            title="Model S"
            subtitle="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftButton="Custom order"
            rightButton="Existing inventory"
           />
           <Section 
            title="Model Y"
            subtitle="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftButton="Custom order"
            rightButton="Existing inventory"
           />
           <Section 
           title="Model 3"
           subtitle="Order Online for Touchless Delivery"
           backgroundImg="model-3.jpg"
           leftButton="Custom order"
            rightButton="Existing inventory"
           />
           <Section 
           title="Model X"
           subtitle="Order Online for Touchless Delivery"
           backgroundImg="model-x.jpg"
           leftButton="Custom order"
            rightButton="Existing inventory"
           />
           <Section 
           title="Lowest Cost Solar Panels in America"
           subtitle="Money-back guarantee"
           backgroundImg="solar-panel.jpg"
           leftButton="Order now"
            rightButton="Learn more"
           />
           <Section 
           title="Solar for New Roofs"
           subtitle="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
           backgroundImg="solar-roof.jpg"
           leftButton="Order now"
            rightButton="Learn more"
           />
           <Section 
           title="Accessories"
           backgroundImg="accessories.jpg"
           leftButton="shop now"
           rightButton=""
           />
       </Container>
    )
}

export default Home
