import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom'

const EditForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const {product_id} = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => {
                const {title, price, description} = res.data
                setTitle(title)
                setPrice(price)
                setDescription(description)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const updateHandler = (e) =>{
        e.preventDefault()
        const productObj = {
            title,
            price,
            description
        }
        axios.put("http://localhost:8000/api/products/" + product_id, productObj)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>EditForm.jsx</legend>
            <form onSubmit={updateHandler}>
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
                <button>Update</button>
            </form>
        </fieldset>
    )
}

export default EditForm