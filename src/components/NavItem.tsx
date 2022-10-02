import { Link } from 'react-router-dom';
import { Props } from '../utils/types';

const NavItem = ( {item, hero} : Props) => {       
  return (
    <li>
      <Link className="nav-item btn btn-danger mx-1" to={`${item!.route}/${hero}`}> {item!.title} </Link>
    </li>
  )
}

export default NavItem