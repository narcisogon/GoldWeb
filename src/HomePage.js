// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Banking from './Banking';
import Payments from './Payments';
import Investments from './Investments';
import FraudDetection from './FraudDetection';
import heroImage from './hero-image.jpg'

function HomePage() {
  return (
    <>
      <div
        className="hero-section text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          height: '50vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="container position-relative">
          <h1>Welcome to Goldman Sachs Financial Services</h1>
          <p>Your trusted partner in financial success</p>
          <Link to="/open-account">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
      <Banking />
      <Payments />
      <Investments />
      <FraudDetection />
    </>
  );
}

export default HomePage;
