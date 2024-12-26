// Nav.js
import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">Edu shape</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
