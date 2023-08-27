import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-heading'>
          <h1>TSX <span>App</span></h1>
      </div>
      <div className='navbar-links'>
          <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/Search'><li>Search</li></Link>
          </ul>
      </div>
    </div>
  )
}

export default Navbar