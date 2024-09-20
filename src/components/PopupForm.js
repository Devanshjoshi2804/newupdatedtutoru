import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Cookies from 'js-cookie';

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

        // More detailed error message
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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enter Your Details</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="phone"
          label="Phone"
          type="tel"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopupForm;
