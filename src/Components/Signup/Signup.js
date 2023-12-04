import React, { useState } from 'react'
import "./Signup"
import Login from './Login/Login'
import Register from './Register/Register'
// import Navbar from "../Navbar/Navbar"
const Signup = () => {
  const [currentForm, SetCurrentForm] = useState ("Login")

  const toggleForm = (formName) => {
    SetCurrentForm (formName);
  }
  return (
    
    <div className='signup-container'>
     
      {
        currentForm === "Login" ? <Login onSwitchForm = {toggleForm}/> : <Register onSwitchForm = {toggleForm}/>
      }
       {/* <Navbar /> */}
   </div>
  )
}

export default Signup;