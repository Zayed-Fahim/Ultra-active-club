import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import image from '../../images/user-img.webp'
import './Body.css'
const Body = () => {
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    },[])
    return (
        <div className='container'>
            <h2>Select today’s exercise</h2>
            <div className='exercise-container'>
                <div className='every-exercise'>
                    {
                        exercises.map(exercise => <Exercise key={exercise.id}
                            exercise={exercise}>
                        </Exercise>)
                    }
                </div>
                <div className='every-user-activity'>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;