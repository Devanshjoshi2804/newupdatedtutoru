import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="contact-info">
          <a href="tel:+919892100528" className="contact-link">
            Phone: 9892100528
          </a>
          <a href="mailto:support@tutoru.in" className="contact-link">
            Email: support@tutoru.in
          </a>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Button component={Link} to="/find-tutor" variant="contained" color="primary">
            Find a Tutor
          </Button>
          <Button component={Link} to="/contact" variant="outlined" color="primary">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
