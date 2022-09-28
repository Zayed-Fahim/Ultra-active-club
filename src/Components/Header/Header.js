import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
            <h1>INTENSITY-FITNESS-CLUB</h1>
        </div>
    );
};

export default Header;