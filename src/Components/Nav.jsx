// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">Tekmadev</a>
        <ul className="nav-links">
          {location.pathname === '/' ? (<li><a href="#hero">Home</a></li>) : (<li><Link to={'/'}>Home</Link></li>)}
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
