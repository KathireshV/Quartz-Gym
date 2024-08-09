import React from 'react';
import ExercisePlan from './ExercisePlan';
const fullBodyExercises = {
  Monday: [
    { name: 'Deadlifts', duration: '3 sets of 8 reps' },
    { name: 'Push-Ups', duration: '3 sets of 10 reps' },
    { name: 'Plank', duration: '3 sets of 1 min' },
  ],
  Tuesday: [
    { name: 'Squats', duration: '3 sets of 15 reps' },
    { name: 'Pull-Ups', duration: '3 sets of 8 reps' },
    { name: 'Russian Twists', duration: '3 sets of 20 reps' },
  ],
  Wednesday: [
    { name: 'Lunges', duration: '3 sets of 15 reps' },
    { name: 'Overhead Press', duration: '3 sets of 10 reps' },
    { name: 'Sit-Ups', duration: '3 sets of 15 reps' },
  ],
  Thursday: [
    { name: 'Burpees', duration: '3 sets of 10 reps' },
    { name: 'Bent Over Rows', duration: '3 sets of 12 reps' },
    { name: 'Bicycle Crunches', duration: '3 sets of 20 reps' },
  ],
  Friday: [
    { name: 'Bench Press', duration: '3 sets of 10 reps' },
    { name: 'Tricep Dips', duration: '3 sets of 12 reps' },
    { name: 'Leg Raises', duration: '3 sets of 15 reps' },
  ],
  Saturday: [
    { name: 'Deadlifts', duration: '3 sets of 8 reps' },
    { name: 'Push-Ups', duration: '3 sets of 10 reps' },
    { name: 'Plank', duration: '3 sets of 1 min' },
  ],
  Sunday: [
    { name: 'Rest Day', duration: '' },
  ],
};

function FullBody() {
  return (
    <div className="page-container" style={{padding:'20px',background:' linear-gradient(45deg, rgb(14, 51, 83) 0%, rgb(26, 23, 23) 80%)'}}>  
      <h2 style={{color:'white', textAlign:'center' ,fontSize:'50px'}}>Full Body Plan</h2>
      <ExercisePlan exercises={fullBodyExercises} />
    </div>
  );
}

export default FullBody;
