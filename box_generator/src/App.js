import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [boxes, setBoxes] = useState([])

  const addBox = (box) => {
    setBoxes([...boxes, box])
  }
  return (
        <fieldset>
          <legend>App.js</legend>
          <Form addBox={addBox}/>
          <Display boxes={boxes}/>
        </fieldset>
  );
}

export default App;
