import React, { useState } from 'react';
import './Activity.css'
import { ToastContainer, toast } from "react-toast";
import addToLs from '../Utilities/LocalStorage';

const Activity = (props) => {
    const {exerciseValue} = props
    const times = [10, 20, 30, 40, 50];
    const success = () => toast.success("Activity Completed 👋");
    const [selectedTime, setSelectedTime] = useState(0)
    const buttonClicked = (time) => {
        setSelectedTime(time)
        addToLs(selectedTime)
    }
    return (
        <div className='activity'>
            <h3>Add A Break</h3>
            <div className='timer'>
                {
                    times.map(time => <button onClick={()=>buttonClicked(time)}>{time}s</button>)
                }
            </div>
            <div className='exercise-break'>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h3>Exercise time</h3>
                    <p>{exerciseValue} seconds</p>
                </div>
                <div className='break-time'>
                    <h3>Break time</h3>
                    <p>{selectedTime} seconds</p>
                </div>
                <button onClick={success} >
                    <p>Activity Completed</p>
                    <ToastContainer />
                </button>
            </div>
        </div>
    );
};

export default Activity;