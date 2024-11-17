// Investments.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Investments() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/investment-options');
  };

  return (
    <section id="investments" className="service-section">
      <h2>Investment Opportunities</h2>
      <p>Explore low-cost investment options to grow your wealth.</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </section>
  );
}

export default Investments;
