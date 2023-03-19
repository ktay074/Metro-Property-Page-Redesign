import React from 'react'
import styled from 'styled-components'; 

const FooterContainer = styled.div`
    border-top: 2px solid #BCBCBC;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 2%;
    margin: 5% 0 0 0;
`
const FooterText = styled.div`
    font-family: 'Montserrat Regular';
    font-size: 16pt;
    margin-top: 10px;
    color: #394869;
`


const Footer = () => {
  return (
    <FooterContainer>
        <FooterText>
            Tenancy Application provided by <a href='www.tenant.co.nz'>www.tenant.co.nz</a>. Copyright © 2023
        </FooterText>
        <FooterText>
            To view our privacy policy and see how we protect your data, <a href='https://tenant.co.nz/privacy-policy'>click here</a>
        </FooterText>
    </FooterContainer>
  )
}

export default Footer; 