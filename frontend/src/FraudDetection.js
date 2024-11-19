// FraudDetection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function FraudDetection() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/fraud-detection-info');
  };

  return (
    <section id="fraud-detection" className="service-section">
      <h2>Fraud Detection</h2>
      <p>Our advanced fraud detection tools help keep your transactions safe.</p>
      <button onClick={handleLearnMore}>Learn More</button>
    </section>
  );
}

export default FraudDetection;
