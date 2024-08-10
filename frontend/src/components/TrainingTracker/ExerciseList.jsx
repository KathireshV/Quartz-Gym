// src/components/ExerciseList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExerciseList.css'; // Import the CSS file

const ExerciseList = ({ username }) => {
  const [exercises, setExercises] = useState([]);
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`/api/exercises/${username}`);
        setExercises(response.data);
        const statusMap = response.data.reduce((acc, exercise) => {
          acc[exercise.id] = exercise.status;
          return acc;
        }, {});
        setStatus(statusMap);
      } catch (error) {
        console.error('Error fetching exercises', error);
      }
    };

    fetchExercises();
  }, [username]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`/api/exercises/${id}`, { status: newStatus });
      setStatus((prevStatus) => ({ ...prevStatus, [id]: newStatus }));
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  return (
    <div className="exercise-list">
      <h2>My Exercises</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>{exercise.name}</td>
              <td>{status[exercise.id]}</td>
              <td>
                <select
                  value={status[exercise.id]}
                  onChange={(e) => handleStatusChange(exercise.id, e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
