import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Card, CardContent } from '@mui/material';
import DashboardTable from './DashboardTable';
import DashboardGraph from './DashboardGraph';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const email = useSelector((state) => state.name); // This is the user's email
  const [userDetails, setUserDetails] = useState(null);
  const [trainerCount, setTrainerCount] = useState(0); // State to store trainer count

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

  useEffect(() => {
    const fetchTrainerCount = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/trainers/count');
        setTrainerCount(response.data); // Store the trainer count
      } catch (error) {
        console.error('Error fetching trainer count:', error);
      }
    };

    fetchTrainerCount();
  }, []);

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
            <li onClick={() => navigate('/manage-trainer')}>Manage Trainers</li>
            <li>Settings</li>
            <li className='dash-log' onClick={handleLog}>
              <LogoutIcon className='logout-icon' /> Logout
            </li>
          </ul>
        </div>
      </div>
      <div className='dash-right'>
        <div className='right-top'>
          <Card className='dash-card' style={{ textAlign: 'center', fontWeight: '500', fontSize: '19px' }}>
            <CardContent>
              Total No.of.Trainers:
            </CardContent>
            <CardContent style={{ textAlign: 'center', fontSize: '28px' }}>
              {trainerCount}
            </CardContent>
          </Card>
          <Card className='dash-card' style={{ textAlign: 'center', fontWeight: '500', fontSize: '19px' }}>
            <CardContent>
              Total No.of.Participants
            </CardContent>
            <CardContent style={{ textAlign: 'center', fontSize: '28px' }}>
              220
            </CardContent>
          </Card>
          <Card className='dash-card' style={{ textAlign: 'center', fontWeight: '500', fontSize: '19px' }}>
            <CardContent>
              Average Attendance
            </CardContent>
            <CardContent style={{ textAlign: 'center', fontSize: '28px' }}>
              105
            </CardContent>
          </Card>
        </div>
        <br />
        <br />
        <div className='right-bottom'>
          <DashboardTable />
          <DashboardGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
