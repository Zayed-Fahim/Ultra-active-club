import React from 'react';
import './Activity.css'
import { ToastContainer, toast } from "react-toast";
const Activity = (props) => {
    const times = [10, 20, 30, 40, 50];
    const success = () => toast.success("Activity Completed 👋");
    return (
        <div className='activity'>
            <h3>Add A Break</h3>
            <div className='timer'>
                {
                    times.map(time => <button>{time}s</button>)
                }
            </div>
            <div className='exercise-break'>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h3>Exercise time</h3>
                    <p> seconds</p>
                </div>
                <div className='break-time'>
                    <h3>Break time</h3>
                    <p> seconds</p>
                </div>
                <button onClick={success}>
                    <p>Activity Completed</p>
                    <ToastContainer />
                </button>
            </div>
        </div>
    );
};

export default Activity;