import React from 'react';
import './ExercisePlan.css';

function ExercisePlan({ exercises }) {
  return (
    <div className="exercise-plan-container">
      {Object.entries(exercises).map(([day, activities]) => (
        <div className="exercise-plan-day" key={day}>
          <h3 className="exercise-plan-day-title">{day}</h3>
          <ul className="exercise-plan-list">
            {activities.map((exercise, index) => (
              <li className="exercise-plan-item" key={index}>
                <span className="exercise-plan-exercise-name">{exercise.name}</span>
                {exercise.duration && <span className="exercise-plan-exercise-duration"> - {exercise.duration}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ExercisePlan;
