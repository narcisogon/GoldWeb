// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './AuthContext'; // Default import without curly braces
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import Banking from './Banking';
import Payments from './Payments';
import Investments from './Investments';
import FraudDetection from './FraudDetection';
import OpenAccount from './OpenAccount';
import SendMoney from './SendMoney';
import RequestMoney from './RequestMoney';
import InvestmentOptions from './InvestmentOptions';
import FraudDetectionInfo from './FraudDetectionInfo';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

// Investment Sub-Section Components
import DoItYourselfInvesting from './DoItYourselfInvesting';
import AutomatedInvesting from './AutomatedInvesting';
import DedicatedFinancialAdvisor from './DedicatedFinancialAdvisor';
import TeamBasedWealthManagement from './TeamBasedWealthManagement';
import Chatbot from './components/Chatbot';

import './App.css';

function App() {
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
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

              {/* Investment Sub-Sections */}
              <Route path="/investments/do-it-yourself" element={<DoItYourselfInvesting />} />
              <Route path="/investments/automated" element={<AutomatedInvesting />} />
              <Route path="/investments/dedicated-advisor" element={<DedicatedFinancialAdvisor />} />
              <Route path="/investments/team-based-wealth" element={<TeamBasedWealthManagement />} />

              {/* Additional Routes */}
              <Route path="/open-account" element={<OpenAccount />} />
              <Route path="/send-money" element={<SendMoney />} />
              <Route path="/request-money" element={<RequestMoney />} />
              <Route path="/investment-options" element={<InvestmentOptions />} />
              <Route path="/fraud-detection-info" element={<FraudDetectionInfo />} />

              {/* Authentication Routes */}
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />

              {/* Protected Route */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
