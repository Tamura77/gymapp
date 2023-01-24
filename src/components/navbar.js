import {React} from 'react';
import {NavLink} from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {

  return (
      <nav className='navbar'>
        <h1 className='company'>
            Fitness
        </h1>
        <div className='nav-menu'>
        <NavLink to="/" className="navlink" activeClassName="navlink-active">
            Home
        </NavLink>
          <NavLink to="/exercises" className="navlink" activeClassName="navlink-active">
            Exercises
            </NavLink> 
            <NavLink to="/nutrition" className="navlink" activeClassName="navlink-active">
            Nutrition
            </NavLink>  
            <NavLink to="/planner" className="navlink" >
            Planner
            </NavLink>   
        </div>
      </nav>
  );
};

export default Navbar;
