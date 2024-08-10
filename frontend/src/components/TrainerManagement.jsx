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
  const [editingTrainer, setEditingTrainer] = useState(null);

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

  const handleAddOrUpdateTrainer = async () => {
    if (validateFields(newTrainer)) {
      try {
        if (editingTrainer) {
          // Update trainer
          const response = await axios.put(`http://localhost:8080/api/trainers/${editingTrainer.id}`, newTrainer);
          setTrainers(trainers.map(trainer => trainer.id === editingTrainer.id ? response.data : trainer));
          alert('Trainer updated successfully!');
        } else {
          // Add new trainer
          const response = await axios.post('http://localhost:8080/api/trainers', newTrainer);
          const addedTrainer = response.data;
          setTrainers([...trainers, addedTrainer]);
          alert('Trainer added successfully!');
        }
        // Reset form
        setNewTrainer({ name: '', specialization: '', email: '' });
        setEditingTrainer(null);
      } catch (error) {
        alert('Operation failed. Please try again.');
        console.error('Error adding/updating trainer:', error);
      }
    }
  };

  const handleEditTrainer = (trainer) => {
    setNewTrainer({
      name: trainer.name,
      specialization: trainer.specialization,
      email: trainer.email,
    });
    setEditingTrainer(trainer);
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
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
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

        <Button variant="primary" onClick={handleAddOrUpdateTrainer}>
          {editingTrainer ? 'Update Trainer' : 'Add Trainer'}
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
                  variant="warning"
                  onClick={() => handleEditTrainer(trainer)}
                >
                  Edit
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
