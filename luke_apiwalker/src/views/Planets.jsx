import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Planets = () => {
    const {planet_id} = useParams()
    const [resData, setResData] = useState({})


    useEffect(() =>{
        axios.get('https://swapi.dev/api/planets/' + planet_id)
            .then(response =>{setResData(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [planet_id])
    return (
        <fieldset>
            <legend>Planets.jsx</legend>
            <h1>{resData.name}</h1>
            <h3>Climate: {resData.climate}</h3>
            <h3>Terrain: {resData.terrain}</h3>
            <h3>Surface Water: {resData.surface_water}</h3>
            <h3>Population: {resData.population}</h3>
        </fieldset>
    )
}

export default Planets