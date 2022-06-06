import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Searching = () => {
    const [id, setId] = useState("")
    const [select, setSelect] = useState("people")
    const navigate = useNavigate()
    const eventHandler = (event) =>{
        event.preventDefault();
        if(select === "people"){
            navigate('/people/' + id)
        }else if (select === "planets"){
            navigate('/planets/' + id)
        }else{
            navigate('/starships/' + id)
        }
        setId("")
    }
    return (
        <fieldset>
            <legend>Searching.jsx</legend>
            <p>
                Search For:
            <select onChange={(e) => setSelect(e.target.value)}>
                <option>People</option>
                <option>Planets</option>
                <option>Star Ships</option>
            </select>
            </p>
            <form onSubmit={eventHandler}>
                <p>
                    Id:
                    <input onChange={(e) => setId(e.target.value)} type="text" value={id}/>
                    <button>Search</button>
                </p>
            </form>
            <Outlet/>
        </fieldset>
    )
}

export default Searching