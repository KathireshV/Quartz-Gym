import React, { useState, useEffect } from 'react';
import './UserDashboard.css'; // Ensure the correct path
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa'; 
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ExerciseManagement from './ExerciseManagement';

const ExerciseTracker = ({ onLogout }) => {
  const [profile, setProfile] = useState({});
  const [bmiResult, setBmiResult] = useState(null);
  const navigate = useNavigate();
  
  // Accessing the email directly from the name field in Redux state
  const email = useSelector((state) => state.name);
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(`Fetching details for user with email: ${email}`);
        const response = await axios.get(`http://localhost:8080/api/auth/users/search?email=${email}`);
        console.log('Response data:', response.data);
        setProfile(response.data); // Store the user details
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

  return (
    <div className='user-dash-container'>
      <div className='user-dash-sidebar' style={{alignItems:'center'}}>
        <FaUserCircle size={70} style={{cursor:'pointer'}} onClick={()=>navigate('/user-dash')}/>
        <div className='user-dash-header'>
          {profile.name}'s <br /><br /> Dashboard
        </div>
        <ul className='user-dash-nav'>
          <li><a href="#profile" className='user-dash-nav-item'>Profile</a></li>
          <li><a href="#progress" className='user-dash-nav-item'>Progress</a></li>
          <li><a href="#settings" className='user-dash-nav-item'>Settings</a></li>
          <li className='user-dash-logout' onClick={handleLogout}>
            <LogoutIcon className='user-dash-logout-icon' /> Logout
          </li>
        </ul>
      </div>
      <div className='user-dash-main'>
        <ExerciseManagement/>
      </div>
    </div>
  );
};

export default ExerciseTracker;
