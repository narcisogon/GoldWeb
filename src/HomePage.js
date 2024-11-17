import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banking from './Banking';
import Payments from './Payments';
import Investments from './Investments';
import FraudDetection from './FraudDetection';
import heroImage from './hero-image.jpg';
import "./HomePage.css"


function HomePage() {
  const slides = [
    {
      
      text: 'Open a Credit Card with Great Rewards',
    },
    {
      
      text: 'Grow Your Savings with Competitive Rates',
    },
    {
      
      text: 'Start Investing for Your Future',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

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

      {/* Slideshow Component */}
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slideshow-slide"
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <img src={slide.image} alt={slide.text} />
            <div className="slideshow-text">{slide.text}</div>
          </div>
        ))}
        <button className="slideshow-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="slideshow-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Account Sections */}
      <div className="account-section">
        <div className="account-card">
          <img src="credit-card-icon.png" alt="Checking accounts" />
          <h3>Checking accounts</h3>
          <p>
            No fees, no minimums and no overdraft fees, plus a top-rated mobile app.
          </p>
          <Link to="/checking-accounts">Compare checking accounts</Link>
        </div>
        <div className="account-card">
          <img src="savings-icon.png" alt="Savings accounts" />
          <h3>Savings accounts</h3>
          <p>Grow your savings with no fees, no minimums and a competitive rate.</p>
          <Link to="/savings-accounts">Compare savings accounts</Link>
        </div>
        <div className="account-card">
          <img src="business-icon.png" alt="Investments" />
          <h3>Investments</h3>
          <p>Start investing to get a head start on building your wealth and securing your future.</p>
          <Link to="/investments">Explore investment options</Link>
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
