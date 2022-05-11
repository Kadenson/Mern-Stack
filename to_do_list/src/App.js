import './App.css';
import React, {useState} from 'react';
import ToDo from './components/ToDo';
import TaskList from './components/TaskList';
function App() {
  const [newTask, setNewTask] = useState([])

  const addTask = (task) =>{
    setNewTask([...newTask, task])
  }
  console.log(newTask)

  const removeTask = (index) => {
    const task = newTask.filter((task, i) => index !== i)
    setNewTask(task)
  }

  const checkbox = (index, completed) => {
    const flipBoolean = newTask.map((newTask, ind) =>{
      if(index === ind){
        newTask.completed = completed
      }
      return newTask
    })

    setNewTask(flipBoolean)
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <ToDo addTask={addTask}/>
      <TaskList newTask={newTask}
      removeTask={removeTask}
      checkbox={checkbox}
      />
    </fieldset>
  );
}

export default App;
