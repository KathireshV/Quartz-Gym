import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Card, CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa'; 
import TrainerManagement from './TrainerManagement';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';

const DashTrainer = ({ onLogout }) => {
  const navigate = useNavigate();
  const email = useSelector((state) => state.name); // This is the user's email
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(`Fetching details for user with email: ${email}`);
        const response = await axios.get(`http://localhost:8080/api/auth/users/search?email=${email}`);
        console.log('Response data:', response.data);
        setUserDetails(response.data); // Store the user details
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (email) {
      fetchUserDetails();
    }
  }, [email]);

  const handleLog = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className='dash-cont'>
      <div className='dash-left'>
        <div>
          <FaUserCircle size={60} style={{ marginTop: '-2%', cursor: 'pointer' }} onClick={() => navigate('/dash')} />
        </div>
        <br />
        <div>
          <span className='dash-name'>{userDetails ? `${userDetails.name}'s` : 'Loading...'}</span>
        </div>
        <div>
          <span className='dash-name'>Dashboard</span>
        </div>
        <div>
          <ul className='dash-item'>
            <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
            <li>Schedule</li>
            <li><Link to="/manage-trainers" style={{ textDecoration: 'none', color: 'white' }}>Manage Trainers</Link></li>
            <li>Settings</li>
            <li className='dash-log' onClick={handleLog}>
              <LogoutIcon className='logout-icon' /> Logout
            </li>
          </ul>
        </div>
      </div>
      <div className='dash-right'>
        <div className='right-top'>
          <TrainerManagement />
        </div>
      </div>
    </div>
  );
};

export default DashTrainer;
