import './App.css';
import Main from './views/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from './views/Create';
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter> 
      <fieldset>
        <legend>App.jsx</legend>
        <h1>Favorite Authors</h1>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/new" element={<Create/>}/>
          <Route path="/edit/:author_id" element={<Edit/>}/>
        </Routes>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
