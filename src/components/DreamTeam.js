import React from 'react'
import { friends } from '../utils/constants';
import Friend from './Friend';

const DreamTeam = ({hero, changeHero}) => {
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.filter(f => f !== hero).map((item, index) => <Friend key={index} friend={item} number={index + 1} changeHero={changeHero} hero={hero}/>)}
        </section>
    )
}

export default DreamTeam