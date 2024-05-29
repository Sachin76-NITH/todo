// Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      navigate('/');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>You have been logged out.</h2>
      <button className="logout-button" onClick={() => navigate('/')}>Go to Homepage</button>
    </div>
  );
};

export default Logout;
