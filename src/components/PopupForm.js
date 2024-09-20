import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Cookies from 'js-cookie';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  background: 'linear-gradient(45deg, #007bff, #00c6ff)',
  color: 'white',
  padding: '24px',
  fontSize: '24px',
  fontWeight: 'bold',
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: '32px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '24px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e0e0e0',
      borderRadius: '10px',
    },
    '&:hover fieldset': {
      borderColor: '#007bff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#007bff',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'none',
}));

function PopupForm({ open, handleClose, selectedBoard, selectedGrade, selectedSubject }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const dataToSubmit = {
        ...formData,
        board: selectedBoard,
        grade: selectedGrade,
        subject: selectedSubject,
      };

      console.log('Submitting data:', dataToSubmit);

      const csrfToken = Cookies.get('csrftoken');
      console.log('CSRF Token:', csrfToken);

      const response = await axios.post(
        'https://admin.tutoru.in/myapp/api/tutor-request/',
        dataToSubmit,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
        }
      );

      console.log('Response:', response);

      if (response.status === 201) {
        alert('Form submitted successfully!');
        handleClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
        });
      } else {
        console.error('Unexpected response:', response);
        alert('Unexpected response from server. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);

        let errorMessage = 'Failed to submit form data. ';
        if (error.response.data && typeof error.response.data === 'object') {
          Object.keys(error.response.data).forEach(key => {
            errorMessage += `${key}: ${error.response.data[key].join(', ')}. `;
          });
        } else {
          errorMessage += error.response.data || error.message;
        }
        alert(errorMessage);
      } else if (error.request) {
        console.error('Error request data:', error.request);
        alert('No response received from server. Please check your internet connection and try again.');
      } else {
        console.error('Error message:', error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <StyledDialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          components={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <StyledDialogTitle id="form-dialog-title">Start Your Journey with tutorU</StyledDialogTitle>
          <StyledDialogContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <StyledTextField
                autoFocus
                margin="dense"
                name="name"
                label="Full Name"
                type="text"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <StyledTextField
                margin="dense"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <StyledTextField
                margin="dense"
                name="phone"
                label="Phone Number"
                type="tel"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />
            </motion.div>
          </StyledDialogContent>
          <DialogActions style={{ padding: '24px' }}>
            <StyledButton onClick={handleClose} color="primary" variant="outlined">
              Cancel
            </StyledButton>
            <StyledButton onClick={handleSubmit} color="primary" variant="contained">
              Submit
            </StyledButton>
          </DialogActions>
        </StyledDialog>
      )}
    </AnimatePresence>
  );
}

export default PopupForm;