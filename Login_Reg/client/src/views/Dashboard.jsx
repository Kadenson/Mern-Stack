import React, {useEffect} from 'react'
import axios from 'axios'

const Dashboard = () => {

    useEffect(()=>{
        axios.get("http://localhost:8000/api/user")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    },[])


    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <h1>Welcome</h1>
        </fieldset>
    )
}

export default Dashboard