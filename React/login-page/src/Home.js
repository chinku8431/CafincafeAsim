// src/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:8000/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        setError('Failed to fetch user data');
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Welcome to Cafin Coffee Shop!</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && <p>Hello, {userData.username}!</p>}
    </div>
  );
};

export default Home;
