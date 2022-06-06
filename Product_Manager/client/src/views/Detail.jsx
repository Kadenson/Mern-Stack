import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'


const Detail = () => {
    const [product, setProduct] = useState()
    const {product_id} = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => {setProduct(res.data)
            })
            .catch(err => console.log(err))
    },[product_id])

    const deleteHandler = (id) =>{
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                product ?
                    <div>
                        <h1>Title: {product.title}</h1>
                        <h3>Price: ${product.price}</h3>
                        <h3>Description: {product.description}</h3>
                        <Link to={`/${product._id}/edit`}>
                            Edit
                        </Link>
                        <button onClick={(e) => deleteHandler(product._id)}>Delete</button>
                    </div> : <h1>Loading.....</h1>
            }
        </fieldset>
    )
}

export default Detail