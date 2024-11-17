// HomePage.js
import React from 'react';
import Banking from './Banking';
import Payments from './Payments';
import Investments from './Investments';
import FraudDetection from './FraudDetection';

function HomePage() {
  return (
    <>
      <Banking />
      <Payments />
      <Investments />
      <FraudDetection />
    </>
  );
}

export default HomePage;
