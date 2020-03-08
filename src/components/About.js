import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding: 16px;
    position: relative;
    font-family: 'Raleway';
    height: 80vh;
    background-color: salmon;
    color: white;
`;

const StyledHeader = styled.h2`
    font-weight: bold;
    font-size: 80px;
    color: orange;
`


function About(props) {
    return (
        <StyledDiv>
            <p>
                <br/>
                Fruit emporium is founded on a very simple principle:
                <br/>
                <br/>
                <br/>
            </p>
            <StyledHeader>
                Fruit is good.
            </StyledHeader>
            <p>
                <br/>
                <br/>
                We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. <br/>Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
            </p>
        </StyledDiv>
    )
}

export default About