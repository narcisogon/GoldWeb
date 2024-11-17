// App.js
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { auth, db } from './firebaseConfig';
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';
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
import './App.css';

function App() {
  const { currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  // Fetch user-specific data
  useEffect(() => {
    const getUserData = async () => {
      if (!currentUser) {
        console.log('User is not authenticated. Cannot fetch user data.');
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          // Set user data to state if needed
          setUsers([userData]); // Assuming you want to display user data
        } else {
          console.log('No user data found.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, [currentUser]);

  // Function to create or update user data
  const createOrUpdateUser = async () => {
    if (!currentUser) {
      console.log('User is not authenticated. Cannot create or update user.');
      return;
    }

    try {
      await setDoc(doc(db, 'users', currentUser.uid), {
        // Replace with your user data
        name: 'User Name',
        age: 30,
        // ... other fields
      });
      console.log('User data saved successfully.');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  // Function to delete user data
  const deleteUser = async () => {
    if (!currentUser) {
      console.log('User is not authenticated. Cannot delete user.');
      return;
    }

    try {
      await deleteDoc(doc(db, 'users', currentUser.uid));
      console.log('User data deleted successfully.');
    } catch (error) {
      console.error('Error deleting user data:', error);
    }
  };

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
      </div>
    </Router>
  );
}

export default App;
