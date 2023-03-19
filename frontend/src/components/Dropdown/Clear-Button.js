import React from 'react'
import styled from 'styled-components';

const Clearbutton = styled.button`
    color: #32C0F3;
    border: 1px solid #32C0F3; 
    border-radius: 16px;
    background-color: white;
    padding: 8px 16px;
    font-family: 'Montserrat Bold';
    font-weight: 700;
    font-size: 13pt;
    line-height: 16px;
    margin-top: 26px;
    cursor: pointer;
    &:hover {
        background-color: #32C0F3;
        color: white;
    }
`

const Clear = () => {
  return (
    <>
        <Clearbutton>CLEAR</Clearbutton>
    </>
  )
}

export default Clear;