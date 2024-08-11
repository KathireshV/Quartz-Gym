import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import './ExerciseManagement.css'; // Import your custom CSS
import axios from 'axios';
import { useSelector } from 'react-redux';

const ExerciseManagement = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    name: '',
    status: 'Not Started', // Set default status
  });
  const [editingExercise, setEditingExercise] = useState(null);

  const email = useSelector((state) => state.name);

  useEffect(() => {
    // Fetch exercises from the backend when the component mounts
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/exercises?email=${email}`);
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, [email]);

  const handleAddOrUpdateExercise = async () => {
    if (validateFields(newExercise)) {
      try {
        if (editingExercise) {
          // Update exercise
          const response = await axios.put(`http://localhost:8080/api/exercises/${editingExercise.id}`, newExercise);
          setExercises(exercises.map(exercise => exercise.id === editingExercise.id ? response.data : exercise));
          alert('Exercise updated successfully!');
        } else {
          // Add new exercise
          const response = await axios.post('http://localhost:8080/api/exercises', { ...newExercise, email: email });
          const addedExercise = response.data;
          setExercises([...exercises, addedExercise]);
          alert('Exercise added successfully!');
        }
        // Reset form
        setNewExercise({ name: '', status: 'Not Started' });
        setEditingExercise(null);
      } catch (error) {
        alert('Operation failed. Please try again.');
        console.error('Error adding/updating exercise:', error);
      }
    }
  };

  const handleEditExercise = (exercise) => {
    setNewExercise({
      name: exercise.name,
      status: exercise.status,
    });
    setEditingExercise(exercise);
  };

  const handleDeleteExercise = async (exerciseId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this exercise?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/exercises/${exerciseId}`);
        setExercises(exercises.filter(exercise => exercise.id !== exerciseId));
        alert('Exercise deleted successfully!');
      } catch (error) {
        alert('Delete operation failed. Please try again.');
        console.error('Error deleting exercise:', error);
      }
    }
  };

  const handleChange = (e) => {
    setNewExercise({
      ...newExercise,
      [e.target.name]: e.target.value,
    });
  };

  const validateFields = (exercise) => {
    if (!exercise.name || !exercise.status) {
      alert('All fields are required!');
      return false;
    }
    return true;
  };

  return (
    <div className="exercise-management-container">
      <h2 className="exercise-management-title">Manage Exercise Completion</h2>
      <Form className="exercise-management-form">
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            name="name"
            value={newExercise.name}
            onChange={handleChange}
            placeholder="Enter exercise name"
          />
        </Form.Group>

        <Form.Group controlId="formStatus">
          <Form.Control
            as="select"
            name="status"
            value={newExercise.status}
            onChange={handleChange}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={handleAddOrUpdateExercise}>
          {editingExercise ? 'Update Exercise' : 'Add Exercise'}
        </Button>
      </Form>

      <Table striped bordered hover className="exercise-management-table mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={exercise.id}>
              <td>{index + 1}</td>
              <td>{exercise.name}</td>
              <td>{exercise.status}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEditExercise(exercise)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteExercise(exercise.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExerciseManagement;
