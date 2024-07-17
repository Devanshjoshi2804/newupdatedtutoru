import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PopupForm from './PopupForm';
import Footer from './Footer';
import heroImage from '../assets/hero-image.png';
import logo from '../assets/logo.png'; // Import the logo image
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
  backgroundColor: '#3f51b5',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  display: 'inline-block',
};

function Home() {
  const [formOpen, setFormOpen] = useState(false);

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <Container maxWidth="lg" className="home">
      <Box className="logo-section">
        <img src={logo} alt="TutorU Logo" className="logo" />
      </Box>
      <Box className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to TutorU
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Find the Best Verified Home Tutor for Your Child in Navi Mumbai.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <span style={highlightedTextStyle}>
              At tutorU, we provide the best private and home tutors across Navi Mumbai for all subjects from Class 1 to 12, including CBSE, ICSE, IB, IGCSE, and State Board, along with various entrance tests. We bring personalized one-on-one learning solutions to your home.
            </span>
          </Typography>
        </div>
        <Box sx={searchStyle}>
          <select name="board" id="board" className="form-control">
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Board">State Board</option>
          </select>
          <select name="grade" id="grade" className="form-control">
            <option value="">Select Grade</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          <select name="subject" id="subject" className="form-control">
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
          </select>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={toggleForm}
            className="form-control"
          >
            Find Tutor
          </Button>
        </Box>
      </Box>
      <PopupForm open={formOpen} handleClose={toggleForm} />
      <Footer />
    </Container>
  );
}

export default Home;
