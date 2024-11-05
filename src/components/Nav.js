import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <ul id='nav-links'>
        <li className='nav-link' key='homenav'><Link to='/home'>Home</Link></li>
        <li className='nav-link' key='projectsnav'><Link to='/projects'>Projects</Link></li>
        <li className='nav-link' key='aboutnav'><Link to='/about'>About</Link></li>
        <li className='nav-link' key='blognav'><Link to='/blog'>Blog</Link></li>
      </ul>
      <h1>@re_detach</h1>
    </nav>
  )
}

export default Nav;