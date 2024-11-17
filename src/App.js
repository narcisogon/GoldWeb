// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banking from './Banking';
import Payments from './Payments';
import Investments from './Investments';
import FraudDetection from './FraudDetection';
import OpenAccount from './OpenAccount'; // New import
import SendMoney from './SendMoney';     // New import
import RequestMoney from './RequestMoney'; // New import
import InvestmentOptions from './InvestmentOptions'; // New import
import FraudDetectionInfo from './FraudDetectionInfo'; // New import
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banking />
                  <Payments />
                  <Investments />
                  <FraudDetection />
                </>
              }
            />
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
