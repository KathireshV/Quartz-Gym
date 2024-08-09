import React from 'react';
import ExercisePlan from './ExercisePlan';
const beginnerExercises = {
  Monday: [
    { name: 'Walking', duration: '30 mins' },
    { name: 'Bodyweight Squats', duration: '3 sets of 10 reps' },
    { name: 'Plank', duration: '3 sets of 30 secs' },
  ],
  Tuesday: [
    { name: 'Cycling', duration: '20 mins' },
    { name: 'Knee Push-Ups', duration: '3 sets of 8 reps' },
    { name: 'Sit-Ups', duration: '3 sets of 10 reps' },
  ],
  Wednesday: [
    { name: 'Walking', duration: '30 mins' },
    { name: 'Lunges', duration: '3 sets of 10 reps' },
    { name: 'Russian Twists', duration: '3 sets of 15 reps' },
  ],
  Thursday: [
    { name: 'Cycling', duration: '20 mins' },
    { name: 'Wall Sit', duration: '3 sets of 30 secs' },
    { name: 'Plank', duration: '3 sets of 30 secs' },
  ],
  Friday: [
    { name: 'Walking', duration: '30 mins' },
    { name: 'Bodyweight Squats', duration: '3 sets of 10 reps' },
    { name: 'Sit-Ups', duration: '3 sets of 10 reps' },
  ],
  Saturday: [
    { name: 'Cycling', duration: '20 mins' },
    { name: 'Knee Push-Ups', duration: '3 sets of 8 reps' },
    { name: 'Russian Twists', duration: '3 sets of 15 reps' },
  ],
  Sunday: [
    { name: 'Rest Day', duration: '' },
  ],
};

function Beginner() {
  return (
    <div className="page-container" style={{padding:'20px',background:' linear-gradient(45deg, rgb(14, 51, 83) 0%, rgb(26, 23, 23) 80%)'}}>  
      <h2 style={{color:'white', textAlign:'center' ,fontSize:'50px'}}>Beginner Plan</h2>
      <ExercisePlan exercises={beginnerExercises} />
    </div>
  );
}

export default Beginner;
