import React, { useState, useEffect } from 'react';
import PopupForm from './PopupForm'; // Import the PopupForm component
import aboutUsImage from '../assets/about-us.jpg';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // New state for popup

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle opening the popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="about">
      <div className="about-container">
        <header className={`about-header `}>
          <h1>About Us</h1>
          <div className="underline"></div>
        </header>
        
        <div className="about-content">
          <div className={`about-image-container ${isVisible ? 'slide-in-left' : ''}`}>
            <img src={aboutUsImage} alt="About tutorU" className="about-image" />
            <div className="image-overlay">
              <span>Empowering Students</span>
            </div>
          </div>
          
          <div className={`about-text-container ${isVisible ? 'slide-in-right' : ''}`}>
            <h2>Welcome to <span className="highlight">tutorU</span></h2>
            <p>
              At tutorU, we're passionate about helping students reach their highest potential. Our personalized tutoring services and wealth of educational resources are designed to guide you towards academic excellence.
            </p>
            <p>
              Our team of experienced tutors is dedicated to delivering top-notch education, custom-tailored to each student's unique learning needs.
            </p>
            <ul className="about-features">
              <li>Personalized Learning Plans</li>
              <li>Expert Tutors Across Subjects</li>
              <li>Flexible Scheduling</li>
              <li>Proven Results</li>
            </ul>
            <p>
              Whether you're preparing for critical exams, striving to master challenging concepts, or honing your study skills, we are here to support you every step of the way.
            </p>
            <button className="cta-button" onClick={handleOpenPopup}>Start Your Journey</button>
          </div>
        </div>
      </div>
      
      {/* PopupForm component */}
      <PopupForm 
        open={isPopupOpen} 
        handleClose={handleClosePopup}
        selectedBoard=""
        selectedGrade=""
        selectedSubject=""
      />
    </section>
  );
}

export default About;
