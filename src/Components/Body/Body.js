import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
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
                    <div className='user-details'>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <h3>Zayed Fahim</h3>
                            <div className='user-address'>
                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                <address>Hazaribagh, Dhaka</address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;