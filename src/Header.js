import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Goldman Sachs Financial Services</h1>
      <nav>
        <a href="#banking">Banking</a>
        <a href="#payments">Payments</a>
        <a href="#investments">Investments</a>
        <a href="#fraud-detection">Fraud Detection</a>
      </nav>
    </header>
  );
}

export default Header;
