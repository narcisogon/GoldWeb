// Investments.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Investments.css'; // Add a separate CSS file for styling

function Investments() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/investment-options');
  };

  return (
    <section id="investments" className="investments-section">
      <h2>Investment Opportunities</h2>
      <p>Explore low-cost investment options to grow your wealth.</p>

      {/* "Get Started" button */}
      <button onClick={handleGetStarted} className="get-started-button">Get Started</button>

      {/* Investment options cards */}
      <div className="investment-cards-container">
        <div className="investment-card" onClick={() => navigate('/investments/do-it-yourself')}>
          <h3>Do-it-yourself Investing</h3>
          <p>Hands-on control with $0 online stock and ETF trades.</p>
        </div>
        <div className="investment-card" onClick={() => navigate('/investments/automated')}>
          <h3>Automated Investing</h3>
          <p>Begin your investing journey with just $500.</p>
        </div>
        <div className="investment-card" onClick={() => navigate('/investments/dedicated-advisor')}>
          <h3>Dedicated Financial Advisor</h3>
          <p>Personalized investment planning and advice.</p>
        </div>
        <div className="investment-card" onClick={() => navigate('/investments/team-based-wealth')}>
          <h3>Team-based Wealth Management</h3>
          <p>Solutions for high-net-worth individuals.</p>
        </div>
      </div>
    </section>
  );
}

export default Investments;
