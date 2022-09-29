
import { navItems } from '../utils/constants';
import { Props } from '../utils/types';
import NavItem from './NavItem';

const Navigation = ({hero}: Props) => {
  return (
    <nav className="fixed-top mt-2 ms-4">
      <ul className="nav">
        {navItems.map(item => <NavItem key={item.route} item={item} hero={hero}/>)}
      </ul>
    </nav>
  )
}

export default Navigation