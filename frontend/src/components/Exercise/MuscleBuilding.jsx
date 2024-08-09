import React from 'react';
import ExercisePlan from './ExercisePlan';

const muscleBuildingExercises = {
  Monday: [
    { name: 'Bench Press', duration: '3 sets of 8 reps' },
    { name: 'Squats', duration: '3 sets of 10 reps' },
    { name: 'Pull-Ups', duration: '3 sets of 8 reps' },
  ],
  Tuesday: [
    { name: 'Deadlifts', duration: '3 sets of 8 reps' },
    { name: 'Overhead Press', duration: '3 sets of 10 reps' },
    { name: 'Barbell Rows', duration: '3 sets of 10 reps' },
  ],
  Wednesday: [
    { name: 'Incline Dumbbell Press', duration: '3 sets of 10 reps' },
    { name: 'Leg Press', duration: '3 sets of 10 reps' },
    { name: 'Chin-Ups', duration: '3 sets of 8 reps' },
  ],
  Thursday: [
    { name: 'Bench Press', duration: '3 sets of 8 reps' },
    { name: 'Squats', duration: '3 sets of 10 reps' },
    { name: 'Pull-Ups', duration: '3 sets of 8 reps' },
  ],
  Friday: [
    { name: 'Deadlifts', duration: '3 sets of 8 reps' },
    { name: 'Overhead Press', duration: '3 sets of 10 reps' },
    { name: 'Barbell Rows', duration: '3 sets of 10 reps' },
  ],
  Saturday: [
    { name: 'Incline Dumbbell Press', duration: '3 sets of 10 reps' },
    { name: 'Leg Press', duration: '3 sets of 10 reps' },
    { name: 'Chin-Ups', duration: '3 sets of 8 reps' },
  ],
  Sunday: [
    { name: 'Rest Day', duration: '' },
  ],
};

function MuscleBuilding() {
  return (
    <div className="page-container" style={{padding:'20px',background:' linear-gradient(45deg, rgb(14, 51, 83) 0%, rgb(26, 23, 23) 80%)'}}>  
      <h2 style={{color:'white', textAlign:'center' ,fontSize:'50px'}}>Muscle Building Plan</h2>
      <ExercisePlan exercises={muscleBuildingExercises} />
    </div>
  );
}

export default MuscleBuilding;
