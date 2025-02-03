import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      navigate('/inputURL');
    } catch (error) {
      console.error('Error:', error.code, error.message);
      
    }
  };

  return (
    <div className="container2">
      <p className="title">Register</p>
      <form className="app1" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="name" />
        <input
        className='email1'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
        />
        <input
        className='password1'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <button type="submit">Register</button>
        <NavLink to="/">Already a user? Login here!</NavLink>
      </form>
    </div>
  );
}

export default Register;
