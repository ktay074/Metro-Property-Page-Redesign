import styled from "styled-components"; 

export const TileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5%;
    margin-left: 5%;
    margin-right: 5%;
    
`

export const Tile = styled.div`
    display: flex;
    border-radius: 16px;
    background-color: #F3F5F7;
    margin: 30px 30px;
    max-width: 600px;
    max-height: 350px;
    cursor: pointer;
    box-shadow: 1px 2px 5px 3px #BCBCBC;
    
`

export const AddressContainer = styled.div`
    padding: 8%;
    border-radius: 0px 16px 0px 0px;
    border-bottom: 1px dashed #bcbcbc;
    color: #394869;
    min-height: 35%;
`

export const MainAddress = styled.div`
    font-family: 'Montserrat Medium';
    font-size: 24pt;
`
export const Area = styled.div`
    font-family: 'Montserrat Regular';
    font-size: 16pt;
    padding-top: 3px; 
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 0px 0px 16px;
`

export const RoomsAndPetContainer = styled.div`
    background-color: #F3F5F7;
    color: #627397;
    font-family: 'Montserrat Medium';
    font-size: 24pt;
    padding-left: 5%;
`

export const Rent = styled.div`
    /* background-color: peachpuff; */
    font-family: 'Montserrat Medium';
    font-size: 24pt;
    color: #394869;
    padding: 5% 5%;
` 

export const IconContainers = styled.img `
    margin: 5px 5px 0px 0px;
` 

export const Particulars = styled.div `
    width: 100%;
    border-radius: 0px 16px 0px 0px;
`