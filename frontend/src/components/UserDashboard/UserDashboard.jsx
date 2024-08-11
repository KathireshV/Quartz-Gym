import React, { useState, useEffect } from 'react';
import './UserDashboard.css'; // Ensure the correct path
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa'; 
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDashboard = ({ onLogout }) => {
  const [profile, setProfile] = useState({});
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const navigate = useNavigate();
  const email = useSelector((state) => state.name); // This is the user's email

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(`Fetching details for user with email: ${email}`);
        const response = await axios.get(`http://localhost:8080/api/auth/users/search?email=${email}`);
        console.log('Response data:', response.data);
        setProfile(response.data); // Store the user details, including membership info
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (email) {
      fetchUserDetails();
    }
  }, [email]);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));
    } else {
      alert('Please enter both weight and height!');
    }
  };

  return (
    <div className='user-dash-container'>
      <div className='user-dash-sidebar'>
        <FaUserCircle size={60} style={{}}/>
        <div className='user-dash-header'>
          {profile.name}'s <br /><br /> Dashboard
        </div>
        <ul className='user-dash-nav'>
          <li><a href="#profile" className='user-dash-nav-item'>Profile</a></li>
          <li><a className='user-dash-nav-item' onClick={() => navigate('/train-track')}>Progress</a></li>
          <li><a href="#settings" className='user-dash-nav-item'>Settings</a></li>
          <li className='user-dash-logout' onClick={handleLogout}>
            <LogoutIcon className='user-dash-logout-icon' /> Logout
          </li>
        </ul>
      </div>
      <div className='user-dash-main'>
        <div className='user-dash-content-top'>
          <h2 className='user-dash-content-title'>Profile Information</h2>
          <div>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Membership:</strong> {profile.memebership || 'NIL'}</p>
          </div>
          {profile.membership && (
            <div className='user-dash-membership-details'>
              <h3 className='user-dash-membership-title'>Membership Details</h3>
              <p><strong>Plan:</strong> {profile.membership.plan}</p>
              <p><strong>Start Date:</strong> {new Date(profile.membership.startDate).toLocaleDateString()}</p>
              <p><strong>End Date:</strong> {new Date(profile.membership.endDate).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {profile.membership.status}</p>
            </div>
          )}
        </div>

        <div className='user-dash-bmi-card'>
          <h3 className='user-dash-bmi-title'>BMI Calculator</h3>
          <Form className='user-dash-bmi-form'>
            <Form.Group className='user-dash-bmi-form-group'>
              <Form.Control
                type='number'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder='Enter your weight (kg)'
                className='user-dash-bmi-form-control'
              />
            </Form.Group>
            <Form.Group className='user-dash-bmi-form-group'>
              <Form.Control
                type='number'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder='Enter your height (cm)'
                className='user-dash-bmi-form-control'
              />
            </Form.Group>
            <Button 
              variant='primary'
              onClick={calculateBMI}
              className='user-dash-bmi-form-submit'
            >
              Calculate BMI
            </Button>
          </Form>
          {bmiResult && (
            <div className='user-dash-bmi-result'>
              <p>Your BMI is: {bmiResult}</p>
              <p>{bmiResult < 18.5 ? 'Underweight' : bmiResult < 24.9 ? 'Normal weight' : bmiResult < 29.9 ? 'Overweight' : 'Obesity'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
