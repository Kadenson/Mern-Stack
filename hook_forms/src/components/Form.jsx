import React, {useState} from 'react'

const Form = (props) => {
    const {firstName, setFirstName,
        lastName, setLastName, 
        email, setEmail, 
        password, setPassword,
        confirmPassword, setConfirmPassword,
        createUser} = props

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    

    const firstNameHandler = (e) =>{
        setFirstName(e.target.value)
        if(e.target.value.length < 1){
            setFirstNameError("First name required.")
        }
        else if(e.target.value.length < 3){
            setFirstNameError("First name is to short.")
        }
        else{
            setFirstNameError("")
        }
    }

    const lastNameHandler = (e) =>{
        setLastName(e.target.value)
        if(e.target.value.length < 1){
            setLastNameError("Last name required.")
        }
        else if(e.target.value.length < 3){
            setLastNameError("Last name is to short.")
        }
        else{
            setLastNameError("")
        }
    } 

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        if(e.target.value.length < 1){
            setEmailError("Email required.")
        }
        if(!e.target.value.includes("@")){
            setEmailError("Email is not valid.")
        }
        else{
            setEmailError("")
        }
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        }
        else{
            setPasswordError("")
        }
        console.log(confirmPassword)
    }

    const confirmPasswordHandler = (e) =>{
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 8){
            setConfirmPasswordError("Password must be at least 8 characters")
        }
        else if(e.target.value !== password){
            setConfirmPasswordError("Passwords must match")
        }
        else{
            setConfirmPasswordError("")
        }
        console.log(confirmPassword)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
        <div>
            <form onSubmit={createUser}>
                <div>
                    {
                        firstNameError ? <p style={{color: "red"}}>{firstNameError}</p> : null
                    }
                    <label>First Name: </label>
                    <input type="text" onChange={firstNameHandler} value={firstName} name="firstName"/>
                </div>
                <div>
                    {
                        lastNameError ? <p style={{color: "red"}}>{lastNameError}</p> : null
                    }
                    <label>Last Name: </label>
                    <input type="text" onChange={lastNameHandler} value={lastName} name="lastName"/>
                </div>
                <div>
                    {
                    emailError ? <p style={{color: "red"}}>{emailError}</p> : null

                    }
                    <label>Email Address: </label>
                    <input type="text" onChange={emailHandler} value={email} name="email"/>
                </div>
                <div>
                    {
                    passwordError ? <p style={{color: "red"}}>{passwordError}</p> : null
                    }
                    <label>Password: </label>
                    <input type="password" onChange={passwordHandler} value={password}/>
                </div>
                <div>
                    {
                    confirmPasswordError ? <p style={{color: "red"}}>{confirmPasswordError}</p> : null
                    }
                    <label>Confirm Password: </label>
                    <input type="password" onChange={confirmPasswordHandler} value={confirmPassword}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
        </fieldset>
    )
}

export default Form