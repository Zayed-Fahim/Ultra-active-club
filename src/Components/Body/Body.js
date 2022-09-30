import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Exercise from '../Exercise/Exercise';
import image from '../../images/user-img.webp'
import './Body.css'
import Activity from '../Activity/Activity';
const Body = () => {
    const [exercises, setExercises] = useState([])
    const [exerciseValue, setExerciseValue] = useState(0);
    const clickHandle = (time_required) => {
        setExerciseValue(exerciseValue + time_required);
    };
    
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div className='container'>
            <div className='header-main'>
                <div className='header'>
                    <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
                    <h1>INTENSITY-FITNESS-CLUB</h1>
                </div>
                <h2>Select today’s exercise</h2>
                <div className='exercise-container'>
                    <div className='every-exercise'>
                        {
                            exercises.map(exercise => <Exercise key={exercise.id}
                                exercise={exercise} clickHandle={clickHandle}>
                            </Exercise>)
                        }
                    </div>
                </div>
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
                <div className='body-details'>
                    <div className='weight'>
                        <h2>75<small>kg</small></h2>
                        <p>Weight</p>
                    </div>    
                    <div className='height'>
                        <h2>6.0</h2>
                        <p>Height</p>
                    </div>    
                    <div className='age'>
                        <h2>25yrs</h2>
                        <p>Age</p>
                    </div>    
                </div>
                <Activity exerciseValue={exerciseValue}></Activity>
            </div>
        </div>
    );
};

export default Body;