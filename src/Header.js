// Header.js
import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './AuthContext';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import logo from './logo.webp'; // Adjust the path if needed

function Header() {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully.');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Goldman Sachs Logo" height="40" />
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
            {/* ...navigation links */}
          </ul>

          {/* Sign In/Out Buttons */}
          <div className="d-flex">
            {currentUser ? (
              <>
                <span className="text-white me-2">{currentUser.email}</span>
                <button className="btn btn-outline-light" onClick={handleSignOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/sign-in">
                <button className="btn btn-outline-light">
                  <FontAwesomeIcon icon={faUser} /> Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
