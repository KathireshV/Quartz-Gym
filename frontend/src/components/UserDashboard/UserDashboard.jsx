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
  const [progress, setProgress] = useState({});
  const [editingProfile, setEditingProfile] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.userId);

  useEffect(() => {
    // Fetch user profile and progress from the backend
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get(`http://localhost:8080/api/users/${userId}`);
        setProfile(profileResponse.data);
        setUpdatedProfile(profileResponse.data);

        const progressResponse = await axios.get(`http://localhost:8080/api/users/${userId}/progress`);
        setProgress(progressResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

  const handleEditProfile = () => {
    setEditingProfile(true);
  };

  const handleSaveProfile = async () => {
    try {
      await axios.put(`http://localhost:8080/api/users/${userId}`, updatedProfile);
      setProfile(updatedProfile);
      setEditingProfile(false);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Failed to update profile. Please try again.');
      console.error('Error updating profile:', error);
    }
  };

  const handleChange = (e) => {
    setUpdatedProfile({
      ...updatedProfile,
      [e.target.name]: e.target.value,
    });
  };

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
        <FaUserCircle size={60} />
        <div className='user-dash-header'>
          {profile.name}'s Dashboard
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
        <div className='user-dash-content-top'>
          <h2 className='user-dash-content-title'>Profile Information</h2>
          {editingProfile ? (
            <Form className='user-dash-form'>
              <Form.Group className='user-dash-form-group'>
                <Form.Control
                  type='text'
                  name='name'
                  value={updatedProfile.name || ''}
                  onChange={handleChange}
                  placeholder='Enter your name'
                  className='user-dash-form-control'
                />
              </Form.Group>
              <Form.Group className='user-dash-form-group'>
                <Form.Control
                  type='email'
                  name='email'
                  value={updatedProfile.email || ''}
                  onChange={handleChange}
                  placeholder='Enter your email'
                  className='user-dash-form-control'
                />
              </Form.Group>
              <Button 
                variant='primary'
                onClick={handleSaveProfile}
                className='user-dash-form-submit'
              >
                Save Changes
              </Button>
            </Form>
          ) : (
            <div>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <Button 
                variant='primary' 
                onClick={handleEditProfile}
                className='user-dash-form-submit'
              >
                Edit Profile
              </Button>
            </div>
          )}
        </div>

        {/* <div className='user-dash-progress-card'>
          <h3>Gym Progress</h3>
          <div className='user-dash-progress-details'>
            <p><strong>Last Workout:</strong> {progress.lastWorkout}</p>
            <p><strong>Weekly Goals:</strong> {progress.weeklyGoals}</p>
            <p><strong>Total Workouts:</strong> {progress.totalWorkouts}</p>
            <p><strong>Progress:</strong> {progress.progressPercentage}%</p>
          </div>
        </div> */}
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
