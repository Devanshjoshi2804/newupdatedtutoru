// src/components/FindTutor.js

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import heroImage from '../assets/hero-image.png';
import './FindTutor.css';

function FindTutor() {
  return (
    <Container maxWidth="lg" className="find-tutor">
      <Box className="content">
        <Box className="image-section">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </Box>
        <Box className="form-section">
          <Typography variant="h3" component="h1" gutterBottom>
            Find the Perfect Tutor for Your Child
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Discover the best tutors tailored to your child's needs.
          </Typography>
          <Box className="form-container">
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
            <Button variant="contained" color="primary" size="large" className="form-control">
              Find Tutor
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default FindTutor;
