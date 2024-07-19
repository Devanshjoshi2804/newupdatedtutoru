import React from 'react';
import { TextField, Button } from '@mui/material';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="submit-button"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default Contact;
