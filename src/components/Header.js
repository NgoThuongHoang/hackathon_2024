// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <nav>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/login" style={{ margin: '0 10px', color: 'white' }}>Login</Link>
        <Link to="/dashboard" style={{ margin: '0 10px', color: 'white' }}>Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
