import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    height: 45px;
    width: 200px;
    background-color: blue;
    color: white
    border: none;
    border-radius: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
`

const UnstyledButton = styled.button`
    height: 45px;
    width: 200px;
    background-color: grey;
    color: white;
    border-radius: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: bold;
    border: none;
`

function BuyButton({foundItem}) {
    console.log(foundItem);
    if (foundItem.quantity > 0) {
        return <StyledButton>${foundItem.price} - Buy now</StyledButton>
    } else {
        return <UnstyledButton>ALL SOLD OUT</UnstyledButton>
    }
}

export default BuyButton