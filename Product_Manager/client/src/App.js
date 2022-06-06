import './App.css';
import Detail from './views/Detail';
import Main from './views/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter>
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:product_id" element={<Detail/>}/>
        <Route path='/:product_id/edit' element={<Edit/>}/>
      </Routes>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;
