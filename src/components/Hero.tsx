import React from 'react'
import { characters } from '../utils/constants';
import { charactersType, Props } from '../utils/types';

const Hero = ({hero} : Props) => {   
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={characters[hero as keyof charactersType].img} alt={characters[hero as keyof charactersType].name} />
        </section>
    )
}

export default Hero