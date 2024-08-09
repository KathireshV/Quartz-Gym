import React from 'react';
import ExercisePlan from './ExercisePlan';
const fatLossExercises = {
  Monday: [
    { name: 'Running', duration: '30 mins' },
    { name: 'Jump Rope', duration: '15 mins' },
    { name: 'Burpees', duration: '3 sets of 10 reps' },
  ],
  Tuesday: [
    { name: 'Cycling', duration: '45 mins' },
    { name: 'HIIT Workout', duration: '20 mins' },
    { name: 'Mountain Climbers', duration: '3 sets of 15 reps' },
  ],
  Wednesday: [
    { name: 'Swimming', duration: '30 mins' },
    { name: 'Rowing', duration: '15 mins' },
    { name: 'Jump Squats', duration: '3 sets of 10 reps' },
  ],
  Thursday: [
    { name: 'Running', duration: '30 mins' },
    { name: 'Box Jumps', duration: '3 sets of 10 reps' },
    { name: 'Russian Twists', duration: '3 sets of 20 reps' },
  ],
  Friday: [
    { name: 'Circuit Training', duration: '40 mins' },
    { name: 'Treadmill', duration: '20 mins' },
    { name: 'Plank', duration: '3 sets of 1 min' },
  ],
  Saturday: [
    { name: 'Hiking', duration: '60 mins' },
    { name: 'Jumping Jacks', duration: '10 mins' },
    { name: 'Lunges', duration: '3 sets of 15 reps' },
  ],
  Sunday: [
    { name: 'Rest Day', duration: '' },
  ],
};

function FatLoss() {
  return (
    <div className="page-container" style={{padding:'20px',background:' linear-gradient(45deg, rgb(14, 51, 83) 0%, rgb(26, 23, 23) 80%)'}}>  
      <h2 style={{color:'white', textAlign:'center' ,fontSize:'50px'}}>Fat Loss Plan</h2>
      <ExercisePlan exercises={fatLossExercises} />
    </div>
  );
}

export default FatLoss;
