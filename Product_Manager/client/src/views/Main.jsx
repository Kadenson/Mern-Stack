import React, {useState} from 'react'
import Form from '../components/Form'
import Dashboard from '../components/Dashboard'

const Main = () => {
    const [refreshState, setRefresh] = useState(false)

    const refresh = () =>{
        setRefresh(!refreshState)
    }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <Form refresh={refresh}/>
            <Dashboard refreshState={refreshState} refresh={refresh}/>
        </fieldset>
    )
}

export default Main