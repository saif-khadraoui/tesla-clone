import React from 'react'
import styled from "styled-components";
import Fade from "react-reveal/Fade" 

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/images/model-s.jpg");
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px; 

    @media all and (max-width: 768px){
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    
`

const Buttons = styled.div`
`;


function Section({ title, subtitle, backgroundImg, leftButton, rightButton }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                <LeftButton>
                    {leftButton}
                </LeftButton>
                { rightButton && 
                      <RightButton>
                      {rightButton}
                  </RightButton>
                }
              
            </ButtonGroup>
                </Fade>
          
            <DownArrow src="/images/down-arrow.svg">

            </DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section
