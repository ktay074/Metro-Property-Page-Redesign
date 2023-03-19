import React, { useState } from 'react'
import styled from 'styled-components'

const StyledOption = styled.option `
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


const Rent = () => {
  const RentOptions = ['Any', '$100', '$200', '$300', '$400', '$500', '$600', '$700', '$800', '$900', '$1000', '$1100']
  const [selectedOption, setSelectedOption] = useState(RentOptions['Any'])

  const handleOptionChange = (event) => {
    const selectedValue = (event.target.value); 
    setSelectedOption(selectedValue === 'Any' ? null : selectedValue)
  }

  return (
    <div>
      <StyledSelect id='dropdown' value={selectedOption} onChange={handleOptionChange}>
        
        {RentOptions.map(option => (
            <StyledOption key={option} value={option}>{option}</StyledOption>
        ))}
      </StyledSelect>
    </div>
  )
}

export default Rent;