// src/components/Services.js

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Services.css';

const servicesData = [
  { title: "One-on-One Tutoring", description: "Personalized one-on-one tutoring sessions tailored to your child's needs.", icon: "🧑‍🏫" },
  { title: "Group Classes", description: "Interactive group classes for collaborative learning.", icon: "👥" },
  { title: "Online Tutoring", description: "Convenient online tutoring sessions from the comfort of your home.", icon: "💻" },
  { title: "Homework Help", description: "Assistance with homework and assignments to keep your child on track.", icon: "📚" },
  { title: "Test Preparation", description: "Comprehensive test preparation for various entrance exams.", icon: "📝" },
  { title: "Specialized Subjects", description: "Tutoring for specialized subjects including Math, Science, and more.", icon: "🔬" },
];

function Services() {
  return (
    <Container maxWidth="lg" className="services">
      <Typography variant="h3" component="h1" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Box className="service-card">
              <div className="icon">{service.icon}</div>
              <Typography variant="h5" component="h2" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1" component="p">
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
