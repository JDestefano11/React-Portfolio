import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Joe Destefano</h1>
        </Link>
        <nav className="nav">
          <Link to="./Home" className="nav-link">Home</Link>
          <Link to="./About" className="nav-link">About Me</Link>
          <Link to="./Projects" className="nav-link">Projects</Link>
          <Link to="./Contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};