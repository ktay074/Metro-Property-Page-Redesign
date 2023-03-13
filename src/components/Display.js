import { useEffect, useState } from 'react'; 
import axios from 'axios'; 


const url = 'http://localhost:5000/text'; 


const GetText = () => {
    
    const [textData, setTextData] = useState('');

    useEffect(() => {
        getAllText(); 
    }, []);


    const getAllText = async () => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            console.log(data);             
            setTextData(data);
        } catch(error) {
            console.log(error.response);
        }  
    };


    return (
        <div>
            <h2>
             GET request 
            </h2>
                {textData && <p> {textData.text} </p>}
        </div>
    );
};

export default GetText; 