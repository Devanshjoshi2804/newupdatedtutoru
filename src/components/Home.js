import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PopupForm from './PopupForm';
import Footer from './Footer';
import heroImage from '../assets/hero-image.png';
import logo from '../assets/fj.png';
import tutorData from '../data/tutorData';
import './Home.css';

const searchStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '1rem',
  backgroundColor: '#ffffff',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  marginTop: '2rem',
};

const highlightedTextStyle = {
  backgroundColor: '#1596ff',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  display: 'inline-block',
};

function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  const handleBoardChange = (e) => {
    setSelectedBoard(e.target.value);
    setSelectedGrade('');
    setSelectedSubject('');
  };

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
    setSelectedSubject('');
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const boards = Object.keys(tutorData);
  const grades = selectedBoard ? Object.keys(tutorData[selectedBoard]) : [];
  const subjects = selectedBoard && selectedGrade ? tutorData[selectedBoard][selectedGrade] : [];

  return (
    <Container maxWidth="lg" className="home">
      <Box className="logo-section">
        <img src={logo} alt="TutorU Logo" className="logo animate-logo" />
      </Box>
      <Box className="hero">
        <img src={heroImage} alt="Hero" className="hero-image animate-hero-image" />
        <div className="hero-content animate-hero-content">
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to TutorU
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Find the Best Verified Home Tutor for Your Child in Navi Mumbai.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <span style={highlightedTextStyle}>
              At TutorU, we offer personalized one-to-one home tutoring with the best tutors for all subjects from Grade 1 to 12, including CBSE, ICSE, IB, IGCSE, and State Board, as well as entrance test preparation, across Navi Mumbai.
            </span>
          </Typography>
        </div>
        <Box sx={searchStyle}>
          <select name="board" id="board" className="form-control" value={selectedBoard} onChange={handleBoardChange}>
            <option value="">Board</option>
            {boards.map((board) => (
              <option key={board} value={board}>
                {board}
              </option>
            ))}
          </select>
          <select name="grade" id="grade" className="form-control" value={selectedGrade} onChange={handleGradeChange} disabled={!selectedBoard}>
            <option value="">Grade</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          <select name="subject" id="subject" className="form-control" value={selectedSubject} onChange={handleSubjectChange} disabled={!selectedGrade}>
            <option value="">Subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={toggleForm}
            className="form-control animate-button"
            disabled={!selectedSubject}
          >
            Find Tutor
          </Button>
        </Box>
      </Box>
      <PopupForm 
        open={formOpen} 
        handleClose={toggleForm} 
        selectedBoard={selectedBoard} 
        selectedGrade={selectedGrade} 
        selectedSubject={selectedSubject} 
      />
      {/* Infinite Moving Text Section */}
      <div className="moving-text-section">
        <div className="moving-text">
          <p>Learn from the best tutors in the comfort of your home!</p>
          <p>Personalized 1-on-1 tutoring sessions available now!</p>
          <p>Boost your grades with our expert tutors!</p>
          <p>Achieve academic excellence with TutorU!</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"TutorU has transformed my learning experience. My grades have improved significantly!"</p>
            <span>- Student A</span>
          </div>
          <div className="testimonial">
            <p>"The tutors are very knowledgeable and patient. My child loves the sessions!"</p>
            <span>- Parent B</span>
          </div>
          <div className="testimonial">
            <p>"Highly recommend TutorU for their excellent tutoring services!"</p>
            <span>- Student C</span>
          </div>
          <div className="testimonial">
            <p>"Great experience with TutorU. The tutors are professional and helpful."</p>
            <span>- Parent D</span>
          </div>
        </div>
      </div>

      {/* Core Benefits Section */}
<div className="core-benefits-section mt-16">
  <h2 className="section-title">Core Benefits</h2>
  <div className="benefits-container">
    <div className="benefit">
      <h3>Handpicked Expert Tutors</h3>
      <p>We carefully select experienced and knowledgeable tutors through a thorough hiring process to ensure top-notch, personalized education at your doorstep.</p>
    </div>
    <div className="benefit">
      <h3>Dedicated Mentors</h3>
      <p>We assign personal mentors to track progress and keep parents updated throughout the year.</p>
    </div>
    <div className="benefit">
      <h3>Focused Assessments</h3>
      <p>We conduct frequent assessments to enhance strengths and target areas for improvement.</p>
    </div>
    <div className="benefit">
      <h3>Study Material</h3>
      <p>We provide expert-designed resources for effective and engaging home learning.</p>
    </div>
  </div>
</div>
      <Footer />
    </Container>
  );
}

export default Home;