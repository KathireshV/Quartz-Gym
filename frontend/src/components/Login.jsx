import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css';
import { useDispatch } from 'react-redux';
import { setName } from './nameSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        // Send login request to backend
        const response = await axios.post('http://localhost:8080/api/auth/login', {
          email,
          password,
        });

        // Get JWT token from response
        const token = response.data;
        localStorage.setItem('token', token); // Store token in localStorage
        console.log(token);
        // Dispatch action to set user state
        dispatch(setName(email));

        // Call onLogin callback if provided
        onLogin();

        console.log("Login Successful!");
        navigate('/'); // Redirect to home page
      } catch (error) {
        toast.error("Login failed. Please check your credentials and try again.");
      }
    } else {
      toast.error("Please enter both email and password.");
    }
  };

  return (
    <div className='Login-page'>
      <div className='login-cont'>
        <h1>Login</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='log-user'
            placeholder='Email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <br />
          <input
            type='password'
            className='log-pass'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type='submit' className='log-but'>Login</button>
          <br /><br />
          <p className='si' onClick={() => navigate('/register')}>SignUp</p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
