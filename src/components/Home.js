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
        <img src={logo} alt="TutorU Logo" className="logo" />
      </Box>
      <Box className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to tutorU
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Find the Best Verified Home Tutor for Your Child in Navi Mumbai.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <span style={highlightedTextStyle}>
              At TutorU, we provide the best private and home tutors across Navi Mumbai for all subjects from Class 1 to 12, including CBSE, ICSE, IB, IGCSE, and State Board, along with various entrance tests. We bring personalized one-on-one learning solutions to your home.
            </span>
          </Typography>
        </div>
        <Box sx={searchStyle}>
          <select name="board" id="board" className="form-control" value={selectedBoard} onChange={handleBoardChange}>
            <option value="">Select Board</option>
            {boards.map((board) => (
              <option key={board} value={board}>
                {board}
              </option>
            ))}
          </select>
          <select name="grade" id="grade" className="form-control" value={selectedGrade} onChange={handleGradeChange} disabled={!selectedBoard}>
            <option value="">Select Grade</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          <select name="subject" id="subject" className="form-control" value={selectedSubject} onChange={handleSubjectChange} disabled={!selectedGrade}>
            <option value="">Select Subject</option>
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
            className="form-control"
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
      <Footer />
    </Container>
  );
}

export default Home;
