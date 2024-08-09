import React from 'react';
import ExercisePlan from './ExercisePlan';
const homeExerciseExercises = {
  Monday: [
    { name: 'Bodyweight Squats', duration: '3 sets of 15 reps' },
    { name: 'Push-Ups', duration: '3 sets of 10 reps' },
    { name: 'Plank', duration: '3 sets of 1 min' },
  ],
  Tuesday: [
    { name: 'Lunges', duration: '3 sets of 15 reps' },
    { name: 'Tricep Dips', duration: '3 sets of 12 reps' },
    { name: 'Russian Twists', duration: '3 sets of 20 reps' },
  ],
  Wednesday: [
    { name: 'Jumping Jacks', duration: '3 sets of 30 reps' },
    { name: 'Sit-Ups', duration: '3 sets of 15 reps' },
    { name: 'Superman', duration: '3 sets of 15 reps' },
  ],
  Thursday: [
    { name: 'Burpees', duration: '3 sets of 10 reps' },
    { name: 'Bicycle Crunches', duration: '3 sets of 20 reps' },
    { name: 'Wall Sit', duration: '3 sets of 1 min' },
  ],
  Friday: [
    { name: 'High Knees', duration: '3 sets of 30 reps' },
    { name: 'Leg Raises', duration: '3 sets of 15 reps' },
    { name: 'Bridge', duration: '3 sets of 15 reps' },
  ],
  Saturday: [
    { name: 'Mountain Climbers', duration: '3 sets of 20 reps' },
    { name: 'Push-Ups', duration: '3 sets of 10 reps' },
    { name: 'Plank', duration: '3 sets of 1 min' },
  ],
  Sunday: [
    { name: 'Rest Day', duration: '' },
  ],
};

function HomeExercise() {
  return (
    <div className="page-container" style={{padding:'20px',background:' linear-gradient(45deg, rgb(14, 51, 83) 0%, rgb(26, 23, 23) 80%)'}}>  
      <h2 style={{color:'white', textAlign:'center' ,fontSize:'50px'}}>Home Exercise Plan</h2>
      <ExercisePlan exercises={homeExerciseExercises} />
    </div>
  );
}

export default HomeExercise;
