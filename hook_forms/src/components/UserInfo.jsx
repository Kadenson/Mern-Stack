import React from 'react'

const UserInfo = (props) => {
    const {firstName, lastName, email,
    password, confirmPassword} = props
    return (
        <fieldset>
            <legend>UserInfo.jsx</legend>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Confirm Password: {confirmPassword}</h3>
        </fieldset>
    )
    
}

export default UserInfo