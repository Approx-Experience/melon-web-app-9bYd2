import { NavLink } from 'react-router';
import './link.css'

const Link = ({to, text, icon}) => {
  return (
    <NavLink to={to} className='navlink'>
      {icon ?? <span><img src={icon} /></span>}
      <span>{text}</span>
    </NavLink>
  )
};

export default Link
