import React, { useState } from 'react'
import styled from 'styled-components'

const StyledOption = styled.option `
    background-color:white; 
    border-color:#BCBCBC; 
    border-radius:5px; 
    border-top: 1px solid #627397;
    font-family: 'Montserrat Regular'; 
    font-size: 16pt; 
    color:#627397; 
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    cursor: pointer;
`
const StyledSelect = styled.select `
    background-color:white; 
    border-color:#BCBCBC; 
    color:#627397; 
    border-radius:5px; 
    font-family: 'Montserrat Regular'; 
    font-size: 16pt; 
    padding-top: 6px; 
    padding-bottom: 6px; 
    padding-left: 10px; 
    padding-right: 10px; 
    justify-content: center;
    cursor: pointer;
`


const Bedroom = () => {
  const BedroomOptions = ['Any', '1', '2', '3', '4', '5+']
  const [selectedOption, setSelectedOption] = useState(BedroomOptions['Any'])

  const handleOptionChange = (event) => {
    const selectedValue = (event.target.value); 
    setSelectedOption(selectedValue === 'Any' ? null : selectedValue)
  }

  return (
    <div>
      <StyledSelect id='dropdown' value={selectedOption} onChange={handleOptionChange}>
        
        {BedroomOptions.map(option => (
            <StyledOption key={option} value={option}>{option}</StyledOption>
        ))}
      </StyledSelect>
    </div>
  )
}

export default Bedroom;