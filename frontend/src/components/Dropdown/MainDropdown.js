import React from 'react'
import Rent from './Dropdown-Rent'; 
import Bathrooms from './Dropdown-Bathrooms'; 
import Bedrooms from './Dropdown-Bedrooms'; 
import Pets from './Dropdown-Pets'; 
import Clearbutton from './Clear-Button'; 

import styled from 'styled-components';

const MainContainer = styled.div `
      margin-left: 240px;
      margin-right: 240px;
      margin-bottom: 5%;
      display: flex;
      justify-content: space-evenly;
      gap: 52px;
      padding: 0px 16px; 
`

const DropdownContainers = styled.div `
    
`
const LabelContainer = styled.div`
    font-family: 'Montserrat Regular';
    font-size: 16pt;
    color: #394869;
    margin-bottom: 6px;
`
const StyledDiv = styled.div `
    display: flex;
    font-size: 30px;
    font-family: 'Montserrat Regular';
    color: #BCBCBC;
    
`



const MainDropdown = () => {
  return (
      <>
      <MainContainer>

        <DropdownContainers> 
          <LabelContainer>Rent</LabelContainer>
          <StyledDiv><Rent></Rent> - <Rent></Rent></StyledDiv>
        </DropdownContainers>

        <DropdownContainers> 
          <LabelContainer>Bathrooms</LabelContainer>
          <StyledDiv><Bathrooms></Bathrooms> - <Bathrooms></Bathrooms></StyledDiv>
        </DropdownContainers>

        <DropdownContainers> 
          <LabelContainer>Bedrooms</LabelContainer>
          <StyledDiv><Bedrooms></Bedrooms> - <Bedrooms></Bedrooms></StyledDiv>
        </DropdownContainers>
        
        <DropdownContainers> 
          <LabelContainer>Pets</LabelContainer>
          <StyledDiv><Pets></Pets></StyledDiv>
        </DropdownContainers>

        <Clearbutton/>

      </MainContainer>
      </>


  )
}

export default MainDropdown; 