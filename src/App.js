// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { db } from './firebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc
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
  // State variables for new user input
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  // State variable to store the list of users
  const [users, setUsers] = useState([]);
  // Reference to the 'users' collection in Firestore
  const usersCollectionRef = collection(db, 'users');

  // Function to create a new user
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    window.location.reload();
  };

  // Function to update a user's age
  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
    window.location.reload();
  };

  // Function to delete a user
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    window.location.reload();
  };

  // useEffect hook to fetch users when the component mounts
  useEffect(() => {
    // Function to get users from Firestore
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      // Map the fetched data to the users state
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

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

