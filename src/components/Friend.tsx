import React from 'react'
import style from '../css_modules/borderRound.module.css';
import { characters } from '../utils/constants';
import { Link } from 'react-router-dom';
import { charactersType, Props } from '../utils/types';

const Friend = ({friend, number}: Props) => {   
    let friendStyle = 'w-100 ';
    if (number === 7) {
        friendStyle += style.bottomLeft;
    }
    if (number === 9) {
        friendStyle += style.bottomRight;
    }
    return (
        <Link className='col-4 p-1 ' to={`/home/${friend}`}><img className={friendStyle} src={characters[friend as keyof charactersType].img} alt={characters[friend as keyof charactersType].name} /> </Link>
    )
}

export default Friend