import React from 'react'
import {useParams} from "react-router-dom"

const Color = () => {
    const {word, color1, color2} = useParams()
    console.log(color1)
    return (
        <div style={{background: color2}}>
            <legend>Color.jsx</legend>
            <h1 style={{color: color1}}>The word is: {word}</h1>
        </div>
    )
}

export default Color