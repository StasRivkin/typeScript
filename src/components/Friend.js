import React from 'react'
import style from '../css_modules/borderRound.module.css';
import { characters } from '../utils/constants';
import { Link } from 'react-router-dom';

const Friend = ({ friend, number }) => {
    let friendStyle = 'w-100 ';

    if (number === 7) {
        friendStyle += style.bottomLeft;
    }
    if (number === 9) {
        friendStyle += style.bottomRight;
    }
    return (
        <Link className='col-4 p-1 ' to={`/home/${friend}`}><img className={friendStyle} src={characters[friend].img} alt={characters[friend].name} /> </Link>
    )
}

export default Friend