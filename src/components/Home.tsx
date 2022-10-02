import React, { useEffect } from 'react'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import Hero from './Hero'
import { useParams } from 'react-router-dom'
import { defaultHero, friends } from '../utils/constants'
import { Props } from '../utils/types'

const Home = ({ changeHero }: Props) => {
    let { heroId } = useParams();
   // console.log(`1 - ${heroId}`);

    if (!friends.includes(heroId||'')) {
        heroId = defaultHero;
       // console.log('hero here!');
    }

    useEffect(() => {
        changeHero!(heroId!);
       // console.log(`2 - ${heroId}`);

    }, [heroId, changeHero]);

    return (
        <main className="clearfix">
            <Hero hero={heroId} />
            <DreamTeam hero={heroId} changeHero={changeHero} />
            <FarGalaxy />
        </main>
    )
}

export default Home