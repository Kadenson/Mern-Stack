import React, {useState} from 'react'
import axios from 'axios'

const Main = () => {
    const[responseData, setResponseData] = useState([])

    const eventHandler = (event) =>{
        event.preventDefault();
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response =>{setResponseData(response.data.results)
                // console.log(response.data.results)
                console.log(response.data.results)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <button onClick={eventHandler}>Fetch Pokemon</button>
            {
                responseData.map((poke, i) =>{
                    return(
                        <p key={i}>{poke.name}</p>
                    )
                })
            }
        </fieldset>
    )
}

export default Main