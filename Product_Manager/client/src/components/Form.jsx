import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    const {refresh} = props
    // DECLARE STATES
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // HANDLER FUNCTIONS
    const submitHandler = (e) =>{
        e.preventDefault()
        // CREATE AN OBJ WITH PRODUCT INFO
        const productObj = {
            title,
            price,
            description
        }
        // MAKE POST REQUEST TO EXPRESS WITH PRODUCT OBJ
        axios.post("http://localhost:8000/api/products/new", productObj)
            .then(res => { refresh()
                setTitle("")
                setPrice("")
                setDescription("")
                console.log(res)
            })
            .catch(err => console.log(err))
        
    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input name="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    Price:
                    <input name="price" type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    Description:
                    <input name="description" type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
                </p>
                <button>Create</button>
            </form>
        </fieldset>
    )
}

export default Form