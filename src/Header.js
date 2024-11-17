// Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.webp';

function Header() {
  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Goldman Sachs Logo" height="50" />
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/banking" className="nav-link">
                Banking
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/payments" className="nav-link">
                Payments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/investments" className="nav-link">
                Investments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fraud-detection" className="nav-link">
                Fraud Detection
              </Link>
            </li>
          </ul>

          {/* Sign In Button */}
          <div className="d-flex">
            <button className="btn btn-outline-light">
              <FontAwesomeIcon icon={faUser} /> Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
