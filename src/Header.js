import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Clickable Logo */}
        <a href="/" className="logo">
          <img 
            src="https://banner2.cleanpng.com/20180815/pqr/9957df2ba6f55774872856d3fa256e02.webp" 
            alt="Goldman Sachs Logo" 
          />
        </a>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#banking">Banking</a>
          <a href="#payments">Payments</a>
          <a href="#investments">Investments</a>
          <a href="#fraud-detection">Fraud Detection</a>
        </nav>

        {/* Transparent Sign In Button with Icon */}
        <div className="action-button">
          <button>
            <i className="fas fa-user"></i> Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

