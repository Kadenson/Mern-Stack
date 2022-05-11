import React, {useState} from 'react'

const ToDo = (props) => {
    const [tasks, setTasks] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        props.addTask({
            tasks,
            completed: false
        })
        setTasks("")
    }


    return (
        <fieldset>
            <legend>ToDo.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Task:
                    <input onChange={(e) => setTasks(e.target.value)} value={tasks} type="text" />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default ToDo