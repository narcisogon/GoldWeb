// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banking from './Banking';
import Payments from './Payments';
import Investments from './Investments';
import FraudDetection from './FraudDetection';
import OpenAccount from './OpenAccount';
import SendMoney from './SendMoney';
import RequestMoney from './RequestMoney';
import InvestmentOptions from './InvestmentOptions';
import FraudDetectionInfo from './FraudDetectionInfo';
import './App.css';
// App.js
import HomePage from './HomePage'; // Add this line

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />

            {/* Main Sections */}
            <Route path="/banking" element={<Banking />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/fraud-detection" element={<FraudDetection />} />

            {/* Additional Routes */}
            <Route path="/open-account" element={<OpenAccount />} />
            <Route path="/send-money" element={<SendMoney />} />
            <Route path="/request-money" element={<RequestMoney />} />
            <Route path="/investment-options" element={<InvestmentOptions />} />
            <Route path="/fraud-detection-info" element={<FraudDetectionInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
