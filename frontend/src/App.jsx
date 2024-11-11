import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './components/store';
import SubscriptionPage from './components/SubscriptionPage';
import TrainerManagement from './components/TrainerManagement';
import DashTrainer from './components/DashTrainer';
import FatLoss from './components/Exercise/FatLoss';
import BackWorkout from './components/Exercise/BackWorkout';
import HomeExercise from './components/Exercise/HomeExercise';
import FullBody from './components/Exercise/FullBody';
import Beginner from './components/Exercise/Beginner';
import MuscleBuilding from './components/Exercise/MuscleBuilding';
import PaymentPage from './components/PaymentPage';
import RazorPayment from './components/Payment/PaypalPayment';
import UserDashboard from './components/UserDashboard/UserDashboard';
import ExerciseTracker from './components/TrainingTracker/ExerciseTracker';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    
    <Provider store={store}>

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
        <Route 
          path='/login' 
          element={<Login onLogin={handleLogin} />} 
          />
        <Route path='/register' element={<Register />} />
        <Route path='/subscribe' element={<SubscriptionPage />} />
        <Route path="/manage-trainer" element={<DashTrainer onLogout={handleLogout}/>} />
        {/* <Route path="/exercise1" element={<ExercisePlan />} /> */}
        <Route path="/fat-loss" element={<FatLoss />} />
        <Route path="/back-workout" element={<BackWorkout />} />
        <Route path="/home-exercise" element={<HomeExercise />} />
        <Route path="/full-body" element={<FullBody />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/muscle-building" element={<MuscleBuilding />} />
        <Route path="/payment" element={<RazorPayment />} />
        <Route path="/train-track" element={<ExerciseTracker onLogout={handleLogout}/>} />
        <Route path='/dash' element={<Dashboard onLogout={handleLogout} />} />
        <Route path='/user-dash' element={<UserDashboard onLogout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
