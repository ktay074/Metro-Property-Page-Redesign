import { useEffect, useState } from "react";
import axios from "axios";
import { TileContainer, Tile, AddressContainer, Image, RoomsAndPetContainer, Rent, IconContainers, Particulars, MainAddress, Area } from './DisplayProperty.styled'
import BedIcon from "./images/Bed.png";
import DogIcon from "./images/DogIcon.png";
import Shower from "./images/Shower.png";

const url = "http://localhost:5000/"

const PropertyList = () => {
    const [properties, setProperties] = useState([]); 

    useEffect(() => {
        axios.get(url)
          .then(response => {
            setProperties(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return (
        <div>
           <TileContainer>
                {properties.map(property => (
                    <Tile>
                        <Image src={property.Image} alt={property.Address} />
                        <Particulars>
                                <AddressContainer>
                                    <MainAddress>
                                    {property.Address}
                                    </MainAddress>
                                    <Area>
                                    {property.Area}
                                    </Area>
                                </AddressContainer>
                                <RoomsAndPetContainer>
                                    {property.Bedrooms} <IconContainers src={BedIcon}/>  
                                    {property.Bathrooms} <IconContainers src={Shower}/>   
                                    {property.Pets} <IconContainers src={DogIcon}/>
                                </RoomsAndPetContainer>
                            <Rent>{property.Rent}</Rent>
                        </Particulars>
                    </Tile>
                ))}
           </TileContainer>          
        </div>
    );
}; 

export default PropertyList; 