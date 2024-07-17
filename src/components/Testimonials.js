// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    { id: 1, text: "Great service!", author: "John Doe" },
    { id: 2, text: "I improved my grades thanks to tutorU.", author: "Jane Smith" },
    // Add more testimonials here
  ];

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          <p>"{testimonial.text}"</p>
          <p>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
