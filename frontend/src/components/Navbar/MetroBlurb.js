import React from 'react'
import styled from 'styled-components'

const Declaration = styled.div `
`
const StyledP = styled.p `
    font-family: "Monsterrat Regular";
    font-size: 16pt;
    color: #627397;
`

const StyledH3 = styled.h3 `
    font-family: "Monsterrat Semi Bold";
    font-size: 28pt;
    color: #394869;
` 

const MetroBlurb = () => {
  return (
    <Declaration>    
        <StyledH3>
        <StyledP>
          These properties are managed by:
        </StyledP>
          Metro NZ Property Management Auckland
        </StyledH3>
    </Declaration>
  )
}

export default MetroBlurb