import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <p className="logo-app">KELOMPOK 6 PAGE </p>
      <Link to="/login" className="menu-item">
        Logout
      </Link>
    </div>
  );
};

export default Header;
