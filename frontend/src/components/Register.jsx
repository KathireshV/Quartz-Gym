import React, { useState } from 'react';
import '../components/Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        // Basic validation checks
        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill out all fields.');
            return;
        }

        b 
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            // Send registration data to backend
            await axios.post('http://localhost:8080/api/auth/register', {
                username,
                email,
                password,
            });
            alert('Registration successful!');
            navigate('/login');
        } catch (error) {
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className='Reg-page'>
            <div className='reg-cont'>
                <h1>Register</h1>
                <br />
                <form onSubmit={handleRegister}>
                    <input
                        type='text'
                        className='reg-user'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        type='email'
                        className='reg-mail'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        type='password'
                        className='reg-pass'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        type='password'
                        className='reg-pass'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button type='submit' className='reg-but'>Sign Up</button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    );
}

export default Register;
