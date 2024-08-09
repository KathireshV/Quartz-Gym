import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import './TrainerManagement.css'; // Import your custom CSS
import axios from 'axios';

const TrainerManagement = () => {
  const [trainers, setTrainers] = useState([]);
  const [newTrainer, setNewTrainer] = useState({
    name: '',
    specialization: '',
    email: '',
  });

  useEffect(() => {
    // Fetch trainers from the backend when the component mounts
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/trainers');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchTrainers();
  }, []);

  const addTrainer = async () => {
    if (validateFields(newTrainer)) {
      try {
        // Send registration data to backend
        const response = await axios.post('http://localhost:8080/api/trainers', newTrainer);
        const addedTrainer = response.data; // Get the newly added trainer data from the response
        // Update local state to reflect the new trainer
        setTrainers([...trainers, addedTrainer]);
        alert('Added successfully!');
        setNewTrainer({ name: '', specialization: '', email: '' });
      } catch (error) {
        alert('Registration failed. Please try again.');
        console.error('Error adding trainer:', error);
      }
    }
  };

  const handleChange = (e) => {
    setNewTrainer({
      ...newTrainer,
      [e.target.name]: e.target.value,
    });
  };

  const validateFields = (trainer) => {
    if (!trainer.name || !trainer.specialization || !trainer.email) {
      alert('All fields are required!');
      return false;
    }
    if (!isValidEmail(trainer.email)) {
      alert('Please enter a valid email address!');
      return false;
    }
    return true;
  };

  const isValidEmail = (email) => {
    // Basic email validation pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const deleteTrainer = async (trainerId) => {
    try {
      // Send a request to the backend to delete the trainer
      await axios.delete(`http://localhost:8080/api/trainers/${trainerId}`);
      // Remove the trainer from the local state
      setTrainers(trainers.filter((trainer) => trainer.id !== trainerId));
      alert('Trainer deleted successfully!');
    } catch (error) {
      alert('Failed to delete trainer. Please try again.');
      console.error('Error deleting trainer:', error);
    }
  };

  return (
    <div className="trainer-management-dark">
      <h2>Manage Trainers</h2>
      <Form className="add-trainer-form">
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            name="name"
            value={newTrainer.name}
            onChange={handleChange}
            placeholder="Enter trainer name"
          />
        </Form.Group>

        <Form.Group controlId="formSpecialization">
          <Form.Control
            type="text"
            name="specialization"
            value={newTrainer.specialization}
            onChange={handleChange}
            placeholder="Enter trainer specialization"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            value={newTrainer.email}
            onChange={handleChange}
            placeholder="Enter trainer email"
          />
        </Form.Group>

        <Button variant="primary" onClick={addTrainer}>
          Add Trainer
        </Button>
      </Form>

      <Table striped bordered hover className="trainer-table mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer, index) => (
            <tr key={trainer.id}>
              <td>{index + 1}</td>
              <td>{trainer.name}</td>
              <td>{trainer.specialization}</td>
              <td>{trainer.email}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteTrainer(trainer.id)}
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

export default TrainerManagement;
