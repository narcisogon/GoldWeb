// Payments.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payments() {
  const navigate = useNavigate();

  const handleSendMoney = () => {
    navigate('/send-money');
  };

  const handleRequestMoney = () => {
    navigate('/request-money');
  };

  return (
    <section id="payments" className="service-section">
      <h2>Payments</h2>
      <p>
        Quick and secure payment options to help you manage daily expenses and send money easily.
      </p>
      <button onClick={handleSendMoney}>Send Money</button>
      <button onClick={handleRequestMoney}>Request Money</button>
    </section>
  );
}

export default Payments;
