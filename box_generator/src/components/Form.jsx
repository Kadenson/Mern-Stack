import React, {useState} from 'react'

const Form = (props) => {
    const [size, setSize] = useState("")
    const [color, setColor] = useState("")
    const submitHandler = (event) =>{
        event.preventDefault()
        props.addBox({
            color: color,
            size: parseInt(size)
        })
        setColor("")
        setSize("")
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    color:
                    <input onChange={(e) => setColor(e.target.value)} value={color} type="text" />
                </p>
                <p>
                    Size:
                    <input onChange={(e) => setSize(e.target.value)} value={size} type="text" />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form