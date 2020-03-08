import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerStyledDiv = styled.div`
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2em;
    justify-items: center;
    margin-left: 20%;
    margin-right: 20%;
`

// const ItemStyledDiv = styled.div`
//     height: 33vh;
//     width: 100%;
//     position: relative;
//     background-color: white;
//     display:flex;
//     flex-direction: column;
//     align-items: center;
//     border-radius: 15px;
//     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.20);
// `

const StyledImage = styled.img`
    height: 8em
    max-width:100%
    position: absolute;
    border-radius: 5px;
    top: -10px;
`

const StyledLink = styled(Link)`
height: 33vh;
width: 100%;
position: relative;
background-color: white;
display:flex;
flex-direction: column;
align-items: center;
border-radius: 15px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.20);
text-decoration: none;
`

const StyledName = styled.p`
    font-weight: bolder;
    font-size: 20px;
    color: black;
    top: 133px;
    position: relative;
    text-align:center;
`

const StyledLatin = styled.p`
    font-styling: italic;
    font-size: 16px;
    color: grey;
    top: 150px;
    position: relative;
    text-align: center;
`

const ListingGrid = ({ itemList }) => {
    const listItems = itemList.map((fruit, index) => {
    return (
        <StyledLink key={index} to={`/items/${fruit.id}`}>
            <StyledImage src={fruit.imageSrc} alt={fruit.description}/>
            <StyledName>{fruit.name}</StyledName>
            <StyledLatin>{fruit.latinName}</StyledLatin>
        </StyledLink>
    )
    })
    return (
        <ContainerStyledDiv>{listItems}</ContainerStyledDiv>
    )
}

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default ListingGrid