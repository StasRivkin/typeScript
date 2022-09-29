import { useEffect, useState } from 'react';
import styles from "../css_modules/aboutMe.module.css";
import { characters, periodMonth } from "../utils/constants";
import { useParams } from 'react-router-dom';
import { friends } from '../utils/constants';
import { charactersType, Props } from '../utils/types';

interface State {
  hero: {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
  }
}

const AboutMe = ({ currentHero, changeHero }: Props) => {
  const [state, setState] = useState({} as State);
  let { heroId } = useParams();

  if (!friends.includes(heroId!)) {
    heroId = currentHero;
  }

  useEffect(() => {
    console.log(heroId);
    let hero = JSON.parse(localStorage.getItem(heroId!) as string);
    if (!hero || (Date.now() - hero.time) > periodMonth) {
      fetch(`${characters[heroId as keyof charactersType].url}`)
        .then(response => response.json())
        .then(data => {
          let info = {
            "name": data.name,
            "height": data.height,
            "mass": data.mass,
            "hair_color": data.hair_color,
            "skin_color": data.skin_color,
            "eye_color": data.eye_color,
            "birth_year": data.birth_year,
            "gender": data.gender
          };
          setState({ hero: info });
          hero = {
            payload: info,
            time: Date.now()
          };
          localStorage.setItem(heroId!, JSON.stringify(hero));
        });
        changeHero!(heroId!);

      console.log('fetch');
    }
    else {
      setState({ hero: hero.payload });
      console.log('storage');
    }

  }, [heroId,changeHero])

  return (
    <div>

      {(state.hero) &&
        <div className={`farGalaxy ${styles.hero_box}`}>
          <p><span className={styles.hero_titles}>name:</span> {state.hero.name}</p>
          <p><span className={styles.hero_titles}>height:</span> {state.hero.height}</p>
          <p><span className={styles.hero_titles}>birth year:</span> {state.hero.birth_year}</p>
          <p><span className={styles.hero_titles}>gender:</span> {state.hero.gender}</p>
          <p><span className={styles.hero_titles}>mass:</span> {state.hero.mass}</p>
          <p><span className={styles.hero_titles}>hair color:</span> {state.hero.hair_color}</p>
          <p><span className={styles.hero_titles}>skin color:</span> {state.hero.skin_color}</p>
          <p><span className={styles.hero_titles}>eye color:</span> {state.hero.eye_color}</p>
        </div>
      }
    </div>
  )


}

export default AboutMe;