import './App.css';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <fieldset>
        <legend>App.jsx</legend>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </fieldset>
    </div>
    </BrowserRouter>
  );
}

export default App;
