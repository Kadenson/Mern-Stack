import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Hello from './views/Hello';
import Home from './views/Home'
import Number from './views/Number';
import Color from './views/Color';
function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.jsx</legend>
        {/* <Link to="/Home">Home</Link>
        <Link to="Word/:word">Hello</Link>
        <Link to="Number/:number">Number</Link> */}
        <Routes>
          <Route path="/Home" element={<Home/>} />    
          <Route path="/:word" element={<Hello/>} />
          <Route path="number/:number" element={<Number/>}/>
          <Route path="/:word/:color1/:color2" element={<Color/>}/>
        </Routes>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
