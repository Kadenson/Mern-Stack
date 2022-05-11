import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import UserInfo from './components/UserInfo';

function App() {
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  

  const createUser = (e) => {
    e.preventDefault();
    //const newUser = { firstName, lastName,email, password, confirmPassword };
    setFirstName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setLastName("")
  }


  return (
    <fieldset>
      <legend>App.js</legend>
      <Form firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      createUser={createUser}
      />

      <UserInfo firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      />
    </fieldset>
  );
}

export default App;
