import React, {useState} from 'react'
//import React from "react"
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import "../login/Login.css";
import { Link } from "react-router-dom";
import './LoginValidation';
import Validation from './LoginValidation';

function Login(){

    const [values, setValues] = useState({
   email: '',
   password: '',
   remember: false

    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setValues(prev => ({...prev, [name]: inputValue}));
        //setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    return(
        <div>
        <Navbar/>
        <Box height={70}></Box>
        
        <div class="main-section-login">
        <div class="main-login-section">
          <center>
            <img src="./testimonial-1.jpg" alt=""/>
          <h1>Login</h1>
          </center>
          <form class="form-fields-login" action="" onSubmit={handleSubmit}>
            <div class="form-fields">
                <div class="form-field">
                    <label for="">Email</label><br/>
                    <input type="email" placeholder='Enter Email' name="email" id="" onChange={handleInput}/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div class="form-field">
                    <label for="">Password</label><br/>
                    <input type="password" placeholder='Enter Password' name="password" id="" onChange={handleInput}/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <div class="form-field-check">
                    <input type="checkbox" name="remember" id="remember" checked={values.remember} onChange={handleInput}/>
                    <label for="remember">Remember me</label>
                    {errors.remember && <span className='text-danger'>{errors.remember}</span>}
                    
                </div>
                <div class="form-field">
                    <button type="submit">Login</button>
                </div>
                <div class="form-field">
                    <p>Don't have an account ? &nbsp;&nbsp;&nbsp;&nbsp; <Link to="/register">Create One</Link></p>
                </div>
            </div>
          </form>
        </div>
</div>


        <Footer/>
        </div>
    )
}
export default Login;