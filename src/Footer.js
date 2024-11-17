// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-primary text-white text-center py-3 mt-auto">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Goldman Sachs</p>
      </div>
    </footer>
  );
}

export default Footer;
