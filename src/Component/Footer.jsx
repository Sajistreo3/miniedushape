// Footer.jsx
import React from 'react';
import '../App.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Developed by Tekmadev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
