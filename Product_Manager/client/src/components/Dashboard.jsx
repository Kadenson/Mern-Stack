import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Dashboard = (props) => {
    const {refreshState, refresh} = props
    const [product, setProduct] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
            .then(res => {setProduct(res.data)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [refreshState])

    const deleteHandler = (id) =>{
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => refresh())
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            {
                product.map((item, index) => {
                    return(
                        <div key={index}>
                            <Link to={"/" + item._id}>
                                <h1>{item.title}</h1>
                            </Link>
                                <button onClick={(e) => deleteHandler(item._id)}>Delete</button>
                        </div>
                    )
                })              
            }
        </fieldset>
    )
}

export default Dashboard