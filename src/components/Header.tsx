
import { characters } from '../utils/constants'
import { charactersType, Props } from '../utils/types'
import Navigation from './Navigation'

const Header = ({hero} : Props) => {
    return (
        <header>
            <Navigation hero={hero} />
            <h1 className="text-center py-4">{characters[hero as keyof charactersType].name}</h1>
        </header>
    )
}

export default Header