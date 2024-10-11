// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Fake login check
    if (email === 'admin@example.com' && password === 'password') {
      setError('');
      onLogin();  // Set logged-in status in App.js
      navigate('/home');  // Redirect to Home page
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { /* Styling omitted for brevity */ },
  form: { /* Styling omitted for brevity */ },
  inputGroup: { /* Styling omitted for brevity */ },
  input: { /* Styling omitted for brevity */ },
  button: { /* Styling omitted for brevity */ },
  error: { color: 'red', marginBottom: '10px' },
};

export default Login;
