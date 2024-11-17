import React from 'react';
import Header from './/Header';
import Footer from './/Footer';
import Banking from './/Banking';
import Payments from './/Payments';
import Investments from './/Investments';
import FraudDetection from './/FraudDetection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banking />
        <Payments />
        <Investments />
        <FraudDetection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

