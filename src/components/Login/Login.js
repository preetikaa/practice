import React, { useState } from "react";
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        navigate("/inputURL")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        alert("No user found or invalid credentials")
    });
  }

  return (
    <>
      <h2 className='heading'> URL Analysis Tool</h2>
      <div className='container'>
        <p className='title'>Login</p>

        <form className='app'>
          <input 
            className='email'
            type="email" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            className='password'
            type="password" 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={onLogin}>Submit</button>
          <NavLink to="register" >
            Not registered? Create an account here!
          </NavLink>
        </form>
      </div>
    </>
  );
}

export default Login;