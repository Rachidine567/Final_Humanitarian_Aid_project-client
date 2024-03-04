import React, {useState} from 'react'
//import React from "react"
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import "../login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from './LoginValidation';
import axios from 'axios'

function Login(){

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        remember: false   // Initialize remember as a boolean

        
     
         })
         const navigate = useNavigate();
         const [errors, setErrors] = useState({})
         const handleInput = (event) => {

            const { name, value, type, checked } = event.target;
            const inputValue = type === 'checkbox' ? checked : value;
            setValues(prev => ({...prev, [name]: inputValue}));

            //  setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
         }
     
         const handleSubmit = (event) => {
             event.preventDefault();
             setErrors(Validation(values));
             if(errors.name === "" && errors.email === "" && errors.password === ""){
                axios.post('http://localhost:8012/register', values)
                .then(res => {
                    navigate('/login');
                })
                .catch(err => console.log(err));
                
             }
         }

    return(
        <div>
        <Navbar/>
        <Box height={70}></Box>
        
        <div className="main-section-login">
        <div className="main-login-section">
          <center>
            <img src="./testimonial-1.jpg" alt=""/>
          <h1>! Create Account !</h1>
          </center>
          <form className="form-fields-login" onSubmit={handleSubmit}>
            <div className="form-fields">
                <div className="form-field">
                    <label htmlFor="name">name</label><br/>
                    <input type="text" placeholder='Enter Name' name="name" id="name" onChange={handleInput}/><br/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className="form-fields">
                    <div className="form-field">
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" placeholder='Enter Email' name="email" id="email" onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" placeholder='Enter Password' name="password" id="password" onChange={handleInput}/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="cpassword">Conform Password</label><br/>
                    <input type="password" placeholder='Confirm password' name="confirm_password" id="cpassword" onChange={handleInput}/>
                    {errors.confirm_password && <span className='text-danger'>{errors.confirm_password}</span>}
                </div>
                <div className="form-field-check">
                    <input type="checkbox" name="remember" id="remember" checked={values.remember} onChange={handleInput}/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <div className="form-field">
                    <button type="submit">register</button>
                </div>
                <div className="form-field">
                    <p>Already have an account ? &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/login">Login here </Link></p>
                </div>
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