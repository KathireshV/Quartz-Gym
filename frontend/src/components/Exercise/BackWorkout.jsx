import React from 'react';
import ExercisePlan from './ExercisePlan';

const backWorkoutExercises = {
  Monday: [
    { name: 'Pull-Ups', duration: '3 sets of 8 reps' },
    { name: 'Bent Over Rows', duration: '3 sets of 10 reps' },
    { name: 'Lat Pulldowns', duration: '3 sets of 12 reps' },
  ],
  Tuesday: [
    { name: 'Deadlifts', duration: '3 sets of 8 reps' },
    { name: 'Single Arm Rows', duration: '3 sets of 10 reps' },
    { name: 'T-Bar Rows', duration: '3 sets of 12 reps' },
  ],
  Wednesday: [
    { name: 'Chin-Ups', duration: '3 sets of 8 reps' },
    { name: 'Seated Rows', duration: '3 sets of 10 reps' },
    { name: 'Face Pulls', duration: '3 sets of 15 reps' },
  ],
  Thursday: [
    { name: 'Pull-Ups', duration: '3 sets of 8 reps' },
    { name: 'Barbell Rows', duration: '3 sets of 10 reps' },
    { name: 'Cable Rows', duration: '3 sets of 12 reps' },
  ],
  Friday: [
    { name: 'Deadlifts', duration: '3 sets of 8 reps' },
    { name: 'Bent Over Rows', duration: '3 sets of 10 reps' },
    { name: 'Reverse Flys', duration: '3 sets of 12 reps' },
  ],
  Saturday: [
    { name: 'Pull-Ups', duration: '3 sets of 8 reps' },
    { name: 'Lat Pulldowns', duration: '3 sets of 10 reps' },
    { name: 'Face Pulls', duration: '3 sets of 15 reps' },
  ],
  Sunday: [
    { name: 'Rest Day', duration: '' },
  ],
};

function BackWorkout() {
  return (
    <div className="page-container" style={{padding:'20px',background:' linear-gradient(45deg, rgb(14, 51, 83) 0%, rgb(26, 23, 23) 80%)'}}>  
      <h2 style={{color:'white', textAlign:'center' ,fontSize:'50px'}}>Back Workout Plan</h2>
      <ExercisePlan exercises={backWorkoutExercises} />
    </div>
  );
}

export default BackWorkout;
