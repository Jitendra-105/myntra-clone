import React, { useState } from 'react'
import "./Register.css"
import bannerImg from "../../../assets/loginBanner.png"


const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="body-container-1">


            <div className="register-container">

                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>

                <form onSubmit={handleSubmit} className='login-form'>
                    <div className="input-container-1">
                        <label htmlFor="name" className='label'>Full Name:</label>
                        <input type="text" name={name} onChange={(e) => setName(e.target.value)} placeholder='full name' />
                    </div>
                    <div className="input-container-1">
                        <label htmlFor="email" className='label'>Email:</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' />
                    </div>
                    <div className="input-container-1">
                        <label htmlFor="password" className='label'>Password:</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='******' />
                    </div>
                    <div className="input-container-1 no">
                        <label htmlFor="empty" className='label'></label>
                        <button type='submit' className='submit'>Submit</button>
                    </div>

                    <button onClick={() => props.onSwitchForm("Login")} className='other-btn'>Already have an account? <span className='reg-color'>Click here</span></button>
                </form>

            </div>
        </div>
    )
}

export default Register;