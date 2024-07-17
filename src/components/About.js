// src/components/About.js
import React from 'react';
import aboutUsImage from '../assets/about-us.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img src={aboutUsImage} alt="About Us" />
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to tutorU. We are dedicated to helping students achieve their academic goals through personalized tutoring services and a variety of educational resources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
