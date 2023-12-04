import React, { useState } from 'react'
import "./Login.css"
import { Link } from "react-router-dom"

import bannerImg from "../../../assets/loginBanner.png"

const Login = (props) => {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (

        <div className="body-container-1">
            <div className="login-container">

                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>

                <form onSubmit={handleSubmit} className='login-form'>
                    <div className="input-container-1">
                        <label htmlFor="email" className='label'>Email:</label>
                        <input type="email" name="email" placeholder='abc@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-container-1">
                        <label htmlFor="email" className='label'>Password:</label>
                        <input type="password" name="password" placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-container-1 no">
                        <label htmlFor="empty" className='label'></label>
                        <Link to="/"><button type='submit' className='submit'>Submit</button></Link>
                    </div>

                    <div className="others">
                        <button onClick={() => props.onSwitchForm("Register")} className='other-btn'>Don't have an account? <span className='reg-color'>Register here</span></button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login;