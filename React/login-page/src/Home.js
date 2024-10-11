// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Cafin Coffee Shop!</h1>
        <p style={styles.subheading}>Your perfect place to enjoy freshly brewed coffee.</p>
        <p style={styles.description}>
          At Cafin Coffee Shop, we believe in serving the finest coffee with a cozy ambiance. 
          Whether you're here for a quick coffee break or to unwind with friends, 
          we’ve got the perfect blend waiting for you.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://example.com/coffee-shop-background.jpg")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#6b4f4f',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#8b5e34',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1rem',
    color: '#4f4f4f',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default Home;
