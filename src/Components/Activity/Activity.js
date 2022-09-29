import React from 'react';
import './Activity.css'
const Activity = () => {
    return (
        <div className='activity'>
            <h3>Add A Break</h3>
            <div className='timer'>
                <h4>10s</h4>
                <h4>20s</h4>
                <h4>30s</h4>
                <h4>40s</h4>
                <h4>50s</h4>
            </div>
            <div className='exercise-break'>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h3>Exercise time</h3>
                    <p>200 seconds</p>
                </div>
                <div className='break-time'>
                    <h3>Break time</h3>
                    <p>15 seconds</p>
                </div>
                <button>
                    <p>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Activity;