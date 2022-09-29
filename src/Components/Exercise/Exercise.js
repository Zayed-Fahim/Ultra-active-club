import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const { img, title, details, age, time_required } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{details}</p>
            <h5>For Age: {age}</h5>
            <h5>Time Required: {time_required}s</h5>
            <button className='button'>
                <h4>Add to list</h4>
            </button>
        </div>
    );
};

export default Exercise;