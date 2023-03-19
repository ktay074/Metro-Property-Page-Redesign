import React from 'react'
import MetroLogo from './images/MetroLogo2.png';

import styled from 'styled-components';

const StyledImg = styled.img `
    cursor: pointer;
`

const MetroImage = () => {
  return (
    <StyledImg src={MetroLogo} alt="Metro Logo">
        
    </StyledImg>
  )
}

export default MetroImage