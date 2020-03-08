import React from 'react'
import styled from 'styled-components';
import { items } from '../data'
import ListingGrid from './ListingGrid'


const StyledDiv = styled.div`
    padding: 16px;
    position: relative;
    font-family: 'Raleway';
    color: white;
    background-color: salmon;
`;

const RegularCopy = styled.p`
    margin-left: 20%
`

const BoldCopy = styled.p`
    font-weight: bolder;
    margin-left: 20%
`
function Homepage(props) {
    const itemValues = Object.values(items)
    return (
        <StyledDiv>
                <br/>
                <div>
                    <RegularCopy>Fruit emporium sells the finest fruits from this world and beyond. </RegularCopy>
                    <br/>
                    <BoldCopy>Browse items: </BoldCopy>
                </div>
                <ListingGrid itemList={itemValues} /> 
        </StyledDiv>
    )
}

export default Homepage