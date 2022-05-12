import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Searching = () => {
    const [id, setId] = useState("")
    const [select, setSelect] = useState("people")

    const navigate = useNavigate()

    const eventHandler = (event) =>{
        event.preventDefault();
        if(select === "people"){
            navigate('/people/' + id)
        }else{
            navigate('/planets/' + id)
        }
        setId("")
    }
    return (
        <fieldset>
            <legend>Searching.jsx</legend>
            <p>
                Search For:
            <select onChange={(e) => setSelect(e.target.value)}>
                <option>people</option>
                <option>planets</option>
            </select>
            </p>
            <form onSubmit={eventHandler}>
                <p>
                    
                    Id:
                    <input onChange={(e) => setId(e.target.value)} type="text" value={id}/>
                    <button>Search</button>
                </p>
            </form>
            
        </fieldset>
    )
}

export default Searching