import React, { useState, useEffect } from 'react';
import './DashboardTable.css';
import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from '@mui/material';
import axios from 'axios';

const DashboardTable = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
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

  return (
    <Card className='dash-table-card'>
      <CardHeader title={<span className='table-title'>Trainers Information</span>} />
      <CardContent>
        <TableContainer component={Paper} style={{ border: '1px solid aliceblue' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className='table-head'>Name</p>
                </TableCell>
                <TableCell>
                  <span className='table-head'>Specialization</span>
                </TableCell>
                <TableCell>
                  <p className='table-head'>Email</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainers.map((trainer) => (
                <TableRow key={trainer.id}>
                  <TableCell className="table-cell">{trainer.name}</TableCell>
                  <TableCell className="table-cell">{trainer.specialization}</TableCell>
                  <TableCell className="table-cell">{trainer.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardTable;
