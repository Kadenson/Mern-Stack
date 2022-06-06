import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const EditForm = () => {
    const [name, setName] = useState("")
    const {author_id} = useParams()
    const navigate = useNavigate()
    const [err, setErr] = useState("")

    useEffect(() =>{
        axios.get("http://localhost:8000/api/authors/" + author_id)
            .then(res => {
            const {name} = res.data
            setName(name)
            console.log(res.data)
        })
            .catch(err => console.log(err))
    },[])

    const updateHandler = (e) =>{
        e.preventDefault()
        const authorObj = {
            name
        }
        axios.put("http://localhost:8000/api/authors/" + author_id, authorObj)
            .then(res => { navigate("/")
                console.log(res)
            })   
            .catch(err => {setErr(err.response.data.errors.name.message)
                console.log(err)
            })
    }

    return (
        <fieldset>
            <legend>EditForm.jsx</legend>
            <Link to={"/"}>Home</Link>
            <p>Edit this author:</p>
            <form onSubmit={updateHandler}>
                <p>
                    Name:
                    <input name="name" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
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

export default EditForm