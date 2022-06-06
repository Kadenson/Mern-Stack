import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const [authors, setAuthors] = useState([])
    const [refresh, setRefresh] = useState(false)

    const refreshSwap = () =>{
        setRefresh(!refresh)
    }

    useEffect(() =>{
        axios.get("http://localhost:8000/api/authors")
            .then(res => {setAuthors(res.data)        
            console.log(res.data)
        })
            .catch(err => console.log(err))
    }, [refresh])

    const deleteHandler = (id) =>{
        axios.delete("http://localhost:8000/api/authors/delete/" + id)
            .then(res => { refreshSwap()
                console.log(res)
            })
            .catch(err => console.log(err))

    }

    return (
        <fieldset>
            <legend>DashBoard.jsx</legend>
            <Link to={"/new"}>Add an Author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                {
                    authors.map((author, index) =>{
                        return(
                            <tbody key={index}>
                                <tr>
                                    <td>{author.name}</td>
                                    <td><Link to={"/edit/"+ author._id}>Edit</Link></td>
                                    <td><button onClick={(e) => deleteHandler(author._id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </fieldset>
    )
}

export default Dashboard