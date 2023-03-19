import React from 'react'
import Login from './Login'
import MetroBlurb from './MetroBlurb'
import MetroImage from './MetroImage'

import styled from 'styled-components'

const BorderContainer = styled.div `
      border-bottom: 2px solid #BCBCBC ;
`

const MainContainer = styled.div `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      gap: 5%;
      margin-left: 240px;
      margin-right: 240px;
      margin-top: 16px;
      margin-bottom: 16px;
`

const Navbar = () => {
  return (
    <>
      <BorderContainer>
        <MainContainer>
          <MetroBlurb/>
          <Login/>
          <MetroImage/>
        </MainContainer>
      </BorderContainer>
        
    </>
  )
}

export default Navbar; 