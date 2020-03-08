import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
    height: 60px;
    background-color: white;
    position: relative;
`;

const StyledH1 = styled.h1`
    font-family: 'Raleway';
    font-weight: bold;
    font-size: 30px;
    margin: 15px
    position: absolute;
`

const StyledLink = styled.p`
    font-family: 'Raleway';
    font-size 16px;
    margin: 22px;
    text-decoration: none;
    color: black;
`

const StyledHeaderDiv = styled.div`
    display: flex;
    right: 0;
    position: absolute;
    margin-right: 10px

    a {
        text-decoration: none;
    }
`

function Header(props) {
    return (
        <>
            <StyledHeader>
                    <StyledH1>Fruit Emporium</StyledH1>
                    <StyledHeaderDiv>
                        <NavLink exact to='/' activeStyle={{textDecoration: 'underline'}}>
                            <StyledLink>Home</StyledLink>
                        </NavLink>
                        <NavLink to='/about' activeStyle={{textDecoration: 'underline'}}>
                            <StyledLink>About</StyledLink>
                        </NavLink>
                    </StyledHeaderDiv>
            </StyledHeader>
        </>
    );     
}

export default Header;