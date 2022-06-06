import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const [err, setErr] = useState("")


    
    const createHandler = (e) =>{
        e.preventDefault()
        const authorObj = {
            name
        }
        axios.post("http://localhost:8000/api/author/new", authorObj)
            .then(res => { navigate("/")
                console.log("Succesful creation",res.data)
            })
            .catch(err => { setErr(err.response.data.errors.name.message)
                console.log(err)
            })
    }
    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <Link to={"/"}>Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={createHandler}>
                <p>
                    Name:
                    <input name="name" type="text" onChange={(e) => setName(e.target.value)}/>
                </p>
                {
                    err &&
                    <p>{err}</p> 
                }
                <button>Submit</button>
            </form>
            <Link to={"/"}><button>Cancel</button></Link>
        </fieldset>
    )
}

export default Create