// src/components/Blog.js

import React from 'react';
import './Blog.css';
import blogData from '../data/blogData';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Blogs</h1>
      <div className="blogs">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-heading">{blog.title}</h2>
              <p className="blog-snippet">{blog.snippet}</p>
              <a href={blog.link} className="blog-link" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
