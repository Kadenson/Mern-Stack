import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import People from './views/People';
import Planets from './views/Planets';
import Searching from './components/Searching';
import Starships from './views/Starships';

function App() {

  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <h1>Welcome</h1>
        <Searching/>
        <Routes>
          <Route path="planets/:planet_id" element={<Planets/>}/>
          <Route path="people/:people_id" element={<People/>}/>
          <Route path="starships/:starship_id" element={<Starships/>}></Route>
        </Routes>
        
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
