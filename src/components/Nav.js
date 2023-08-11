import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <ul id='nav-links'>
        <li className='nav-link' key='homenav'><Link to='/home'>Home</Link></li>
        <li className='nav-link' key='instrumentalsnav'><Link to='/instrumentals'>Instrumentals</Link></li>
        <li className='nav-link' key='aboutnav'><Link to='/about'>About</Link></li>
        <li className='nav-link' key='blognav'><Link to='/blog'>Blog</Link></li>
        <li className='nav-link' key='contactnav'><Link to='/contact'>Contact</Link></li>
      </ul>
      <h1>re detach</h1>
    </nav>
  )
}

export default Nav;