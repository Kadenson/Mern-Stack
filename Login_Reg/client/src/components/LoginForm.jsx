import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const LoginForm = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        const userObj = {
            userName,
            email,
            password,
            confirmPassword
        }
        axios.post("http://localhost:8000/api/register", userObj)
        .then(res => { navigate("/dashboard")
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>LoginForm.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    User Name:
                    <input type="text" onChange={(e) => setUserName(e.target.value)}/>
                </p>
                <p>
                    Email:
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </p>
                <p>
                    password:
                    <input type="text" onChange={(e) => setPassword(e.target.value)}/>
                </p>
                <p>
                    Confirm Password:
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                </p>
                <button>Register</button>
            </form>
        </fieldset>
    )
}

export default LoginForm