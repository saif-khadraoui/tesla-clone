import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

const Nav = styled.nav`
    position: fixed;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    z-index: 1;
`;

const Logo = styled.div`
    
    a{
        text-decoration: none;
        

        &:hover{
            cursor: pointer;
        }

       
    }

`;

const Middle = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    a{
        padding: 0 10px;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;

        &:hover{
            cursor: pointer;
        }
    }

    @media all and (max-width: 1200px){
        display: none;
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    a{
        text-decoration: none;
        font-weight: 600;
        padding: 0 10px;
        text-transform: uppercase;

        &:hover{
            cursor: pointer;
        }

        @media all and (max-width: 1200px){
            display: none;
        }
    }
`;

const Hamburger = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 312px;
    height: 100vh;
    background-color: white;
    z-index: 100;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px;

    li{
        padding: 16px 0;
        border-bottom: 1px solid black;

        a{
            font-weight: 600;
        }
    }
    display: none;

    &:clicked{
        display: block;
    }
`;

const ClosedMenu = styled(MenuIcon)`
     &:hover{
        cursor: pointer;
    }
`;

const OpenMenu = styled(CloseIcon)`
    &:hover{
        cursor: pointer;
    }


`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;


function NavBar() {
    const [burgerStaus, setBurgerStatus] = useState(false);

    return (
        <Nav>
            <Logo>
                <a href="#"> 
                    <img src="./images/logo.svg" />
                </a>
            </Logo>
            <Middle>
                    <a href="#">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panels</a>

            </Middle>
            <Right>
                <a href="#">shop</a>
                <a href="#">tesla account</a>
                <ClosedMenu />
                <Hamburger>
                    <CloseWrapper>
                        <OpenMenu />
                    </CloseWrapper>
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Solar Roof</a></li>
                    <li><a href="#">Solar Panels</a></li>
            </Hamburger>
            </Right>
            
        </Nav>
    )
}

export default NavBar
