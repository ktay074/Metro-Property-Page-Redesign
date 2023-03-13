import { useState } from 'react'; 
import axios from 'axios'; 

const url = 'http://localhost:5000/text'; 

const PostText = () => {
    const [text, setText] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const resp = await axios.post(url, { 
                text: text
            }); 
            console.log(resp.data); 
        } catch (error) {
            console.log(error.response); 
        }
    }

    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>
                        Submit Text
                    </label>
                    <input type='text' 
                    id='text' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    />

                    

                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>

        </section>

    );
};

export default PostText; 