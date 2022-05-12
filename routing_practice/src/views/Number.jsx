import React from 'react'
import {useParams} from "react-router-dom"

const Number = () => {
    const {number} = useParams()

    return (
        <div>
            <legend>Number.jsx</legend>
            <h1>The Number is : {number}</h1>
        </div>
    )
}

export default Number