import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const People = () => {
    const {people_id} = useParams()
    const [resData, setResData] = useState({})

    useEffect(() =>{
        axios.get('https://swapi.dev/api/people/' + people_id)
            .then(response =>{setResData(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [people_id])

    return (
        <fieldset>
            <legend>People.jsx</legend>
            <h1>{resData.name}</h1>
            <h1>Height: {resData.height}</h1>
            <h1>Mass: {resData.mass}</h1>
            <h1>Hair Color: {resData.hair_color}</h1>
            <h1>Skin Color: {resData.skin_color}</h1>
        </fieldset>
    )
}

export default People