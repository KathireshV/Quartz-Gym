import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SchedulePage.css';

const SchedulePage = () => {
    const [schedule, setSchedule] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        // Calculate the next 7 days
        const today = new Date();
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            weekDates.push(date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
        }
        setDates(weekDates);

        // Fetch the schedule and trainers when the component mounts
        axios.get('/api/schedule')
            .then(response => setSchedule(response.data))
            .catch(error => console.error('Error fetching schedule:', error));

        axios.get('/api/trainers')
            .then(response => setTrainers(response.data))
            .catch(error => console.error('Error fetching trainers:', error));
    }, []);

    const handleUpdateSchedule = () => {
        axios.post('/api/schedule/update', schedule)
            .then(response => alert('Schedule updated successfully'))
            .catch(error => console.error('Error updating schedule:', error));
    };

    const handleDownloadSchedule = () => {
        axios.get('/api/schedule/download', { responseType: 'blob' })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'schedule.xlsx');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => console.error('Error downloading schedule:', error));
    };

    return (
        <div className="schedule-container">
            <h1>Weekly Schedule</h1>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Trainer</th>
                        {dates.map((date, index) => (
                            <th key={index}>{date}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.trainerName}</td>
                            {/* Add more columns for each timeslot (e.g., entry.schedule[0], entry.schedule[1], etc.) */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-group">
                <button className="update-button" onClick={handleUpdateSchedule}>Update Schedule</button>
                <button className="download-button" onClick={handleDownloadSchedule}>Download Schedule</button>
            </div>
        </div>
    );
};

export default SchedulePage;
