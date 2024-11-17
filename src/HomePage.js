import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css"
import laptop from "./laptopman.mp4"
import appic from "./apppic.png"
import apple from "./apple.png"
import play from "./play.png"

function HomePage() {
  return (
    <>
      {/* Video Section with Text */}
      <div className="video-container">
        <video
          className="intro-video"
          src={laptop}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="overlay-content text-white">
          <h1>Invest With Confidence<br />Financial Succcess</h1>
          <p>
          Every day, we bring together the brightest minds in finance to empower individuals on their journey to financial growth. Our focus is on serving clients by leveraging insights, resources, and relationships to help navigate complex investment opportunities and achieve long-term financial success.
          </p>
          <Link to="/investments">
            <button className="btn btn-outline-light">See Our Investments</button>
          </Link>
        </div>
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
      {/* Mobile Banking Promotion Section */}
      <div className="mobile-banking-promo">
        <div className="promo-content">
          <img src={appic} alt="Mobile Banking App" />
          <div className="promo-text">
            <h2>Need help? Ask FinanceGo™</h2>
            <p>
              FinanceGo gives you valuable insights like a summary of your spending by category, retailer, and across accounts. Find it only in our Mobile Banking app.
            </p>
            <div className="app-download-buttons">
              <button className="btn btn-app-store">
                <img src={apple} alt="App Store" />
                Download on the App Store
              </button>
              <button className="btn btn-google-play">
                <img src={play} alt="Google Play" />
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default HomePage;
