import React from 'react';
import aboutUsImage from '../assets/about-us.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h2>About Us</h2>
      </div>
      <img src={aboutUsImage} alt="About Us" className="about-image" />
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to <strong>tutorU</strong>, where your academic success is our mission. We are passionate about helping students reach their highest potential through personalized tutoring services and a wealth of educational resources. Our team of experienced tutors is dedicated to delivering top-notch education, custom-tailored to each student's unique learning needs.
          </p>
          <p>
            At <strong>tutorU</strong>, we foster a nurturing and engaging learning environment that inspires students to excel. Whether you're preparing for critical exams, striving to master challenging concepts, or honing your study skills, we are here to guide you every step of the way. Join us at <strong>tutorU</strong> and embark on a journey towards academic excellence and a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
