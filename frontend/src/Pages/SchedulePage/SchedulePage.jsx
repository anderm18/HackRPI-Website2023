import React from 'react';
import Schedule from '../../Components/Schedule/Schedule.jsx';
import './SchedulePage.css'; // Import your CSS file for SchedulePage styling

const SchedulePage = () => {
    return (
        <div className="schedule-page-container" style={{margin: '40px 0'}}>   {/*className for css styling*/}
            <h1>Schedule</h1>
            <Schedule />
        </div>
    );
};

export default SchedulePage;



