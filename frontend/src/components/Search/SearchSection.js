import React from 'react';
import styled from 'styled-components';
import SearchLight from './images/SearchLightLogo.png';

const SearchContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 36px 156px;
`

const BoldText = styled.div `
    font-family: 'Montserrat Semi Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 28pt;
    line-height: 34px;
    color: #394869;
`
const SearchBar = styled.input `
    width: 454px;
    height: 36px; 
    color: #BCBCBC;
    background-image: url(${SearchLight});
    background-position: calc(100% - 16px);
    background-repeat: no-repeat;
    padding: 10px 16px;
    border-radius: 24px;
    border: 1px solid #BCBCBC; 
`

const SearchSection = () => {
  return (
    <>
    <SearchContainer>
        <BoldText>
            Browse Properties
        </BoldText>
        <SearchBar type='search' placeholder='Search Properties...'/>
    </SearchContainer>
    </>
    
  )
}

export default SearchSection