import React from 'react'; 
import styled from 'styled-components'; 
import Avatar from './images/Avatarimage.jpg'; 

const StyledLogin = styled.button `
    padding: 12px 32px; 
    border-radius: 24px;     
    color:#627397; 
    background-color:white; 
    border: 1px solid #627397; 
    justify-content:space-evenly;
    font-family: "Montserrat Bold"; 
    font-size: 16pt;
    display: flex;
    cursor: pointer;
    &:hover {
      background-color: #F3F5F7;
    }
`

const StyledAvatar = styled.img `
    margin-right: 12px;
    margin-top: 5px;
`
const LoginText = styled.div `
`


const Login = () => {
  return (
    <>
       <StyledLogin>
          <StyledAvatar src={Avatar}></StyledAvatar>  
          <LoginText>
            Login / Sign Up
          </LoginText>
        </StyledLogin>
    </>
  )
}

export default Login