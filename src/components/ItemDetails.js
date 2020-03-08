import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { items, sellers } from '../data';
import BuyButton from './BuyButton';

const StyledContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 10% 40% 40% 10%;
    grid-template-areas: '. itemImage desc .';
    margin-top: 22px;
    grid-gap: 40px;
    font-family: 'Raleway', sans-serif;
`

const StyledImage = styled.img`
    grid-area: itemImage;
    width: 100%;
    border-radius: 20px;
`

const ItemDescriptionDiv = styled.div`
    grid-area: desc;
    display: flex;
    flex-direction: column;
`

const SellerDiv = styled.div`
    display: inline-flex;
    margin-top: 20px;
`

const StyledName = styled.p`
    font-weight: bolder;
    font-size: 30px;
`
const StyledLatinName = styled.p`
    font-style: italic;
    font-size: 16px;
    color: grey;
`
const StyledDesc = styled.p`
    font-size: 18px;
`
const StyledCoO = styled.p`
    font-style: italic;
    font-weight: bold;
`
const StyledAvatar = styled.img`
    height: 25px;
    border-radius: 50%
`
const StyledSeller = styled.p`
    font-weight: bold;
    margin-top: 5px
    margin-left: 5px
`

const ItemDetails = () => {
    const { itemId } = useParams();
    const itemArray = Object.values(items);
    const sellersArray = Object.values(sellers);
    let foundItem = itemArray.find(item => item.id === itemId);
    let foundSeller = sellersArray.find(person => person.id === foundItem.sellerId);
    return (
        <StyledContainerDiv>
            <StyledImage src={foundItem.imageSrc} alt={foundItem.description} />
            <ItemDescriptionDiv>
                <StyledName>{foundItem.name}</StyledName>
                <StyledLatinName>{foundItem.latinName}</StyledLatinName>
                <StyledDesc><br/><br/>{foundItem.description}</StyledDesc>
                <StyledCoO><br/>Product of: {foundItem.countryOfOrigin}<br/><br/></StyledCoO>
                <BuyButton foundItem = {foundItem}/>
                <SellerDiv>
                    <StyledAvatar src={foundSeller.avatarSrc} alt={foundSeller.name} />
                    <StyledSeller>{foundSeller.storeName}{foundSeller.name}</StyledSeller>
                </SellerDiv>
            </ItemDescriptionDiv>
        </StyledContainerDiv>
    )
};

export default ItemDetails