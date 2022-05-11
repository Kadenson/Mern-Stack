import React from 'react'

const TaskList = (props) => {
    const {newTask, removeTask, checkbox} = props

    const deleteHandler = (e, index) => {
        removeTask(index)
    }

    return (
        <fieldset>
            <legend>TaskList.jsx</legend>
            {
                newTask.map((task, index) =>{
                    return(
                        <div key={index}>
                            {
                                !task.completed ? <p style={{display: "inline-block"}}>{task.tasks}</p> : 
                                <p value={index} style={{textDecoration: "line-through", display: "inline-block"}}>{task.tasks}</p>
                            }
                            <p style={{display: "inline"}}><input onClick={(e) => checkbox(index, e.target.checked)} type="checkbox" />
                            <button onClick={(e) => deleteHandler(e, index)}>Delete</button></p>
                            
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default TaskList