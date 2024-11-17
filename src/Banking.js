// Banking.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banking() {
  const navigate = useNavigate();

  const handleOpenAccount = () => {
    navigate('/open-account');
  };

  return (
    <section id="banking" className="service-section">
      <h2>Banking Services</h2>
      <p>
        Access easy, secure banking without a traditional bank account. Features include savings,
        checking, and mobile deposits.
      </p>
      <button onClick={handleOpenAccount}>Open Account</button>
    </section>
  );
}

export default Banking;
