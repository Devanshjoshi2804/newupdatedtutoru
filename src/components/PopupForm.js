import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './PopupForm.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

function PopupForm({ open, handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    axios.post('http://localhost:8000/myapp/submit_form/', data)
      .then(response => {
        if (response.data.status === 'success') {
          alert('Form submitted successfully');
        } else {
          alert('Form submission failed');
        }
        handleClose();
      })
      .catch(error => {
        console.error('There was an error!', error);
        handleClose();
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="popup-form-title"
      aria-describedby="popup-form-description"
    >
      <Box component="form" sx={style} onSubmit={handleSubmit}>
        <h2 id="popup-form-title">Get Started</h2>
        <TextField
          required
          name="name"
          label="Name"
          fullWidth
          margin="normal"
        />
        <TextField
          required
          name="phone"
          label="Phone Number"
          fullWidth
          margin="normal"
        />
        <TextField
          name="grade"
          label="Grade (1-12)"
          fullWidth
          margin="normal"
        />
        <TextField
          name="subjects"
          label="Subjects (including NEET, JEE)"
          fullWidth
          margin="normal"
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
          <Button type="submit" variant="contained">Submit</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default PopupForm;
