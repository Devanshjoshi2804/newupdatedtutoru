// src/components/Contact.js
import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Contact.css';

function Contact() {
  return (
    <Container maxWidth="lg" className="contact">
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
