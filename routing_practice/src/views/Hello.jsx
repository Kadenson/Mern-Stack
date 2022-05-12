import React from 'react'
import {useParams} from "react-router"

const Hello = () => {
    const {word} = useParams()

    return (
        <div>
            <legend>Hello.jsx</legend>
            <h1>
                The word is: {word}
            </h1>
        </div>
    )
}

export default Hello