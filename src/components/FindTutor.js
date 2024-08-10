import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import PopupForm from './PopupForm';
import heroImage from '../assets/hero-image.png';
import tutorData from '../data/tutorData';
import './FindTutor.css';

const FindTutor = () => {
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
    <Container maxWidth="lg" className="find-tutor">
      <Box className="content">
        <Box className="image-section">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </Box>
        <Box className="form-section">
          <h1>Find Your Ideal Tutor</h1>
          <p>Fill out the form below to match with the best tutor for your needs.</p>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <select
              name="board"
              id="board"
              className="form-control"
              value={selectedBoard}
              onChange={handleBoardChange}
            >
              <option value="">Board</option>
              {boards.map((board) => (
                <option key={board} value={board}>
                  {board}
                </option>
              ))}
            </select>
            <select
              name="grade"
              id="grade"
              className="form-control"
              value={selectedGrade}
              onChange={handleGradeChange}
              disabled={!selectedBoard}
            >
              <option value="">Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
            <select
              name="subject"
              id="subject"
              className="form-control"
              value={selectedSubject}
              onChange={handleSubjectChange}
              disabled={!selectedGrade}
            >
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
      </Box>
      <PopupForm
        open={formOpen}
        handleClose={toggleForm}
        selectedBoard={selectedBoard}
        selectedGrade={selectedGrade}
        selectedSubject={selectedSubject}
      />
    </Container>
  );
};

export default FindTutor;
