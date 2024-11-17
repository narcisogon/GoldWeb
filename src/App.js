//Firebase stuff
import { useState, useEffect, cloneElement } from 'react'
import { db } from './firebaseConfig'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
import firebaseApp from './firebaseConfig';

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
  //state variables for new user input
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  //state variable to store the list of users
  const [users, setUsers] = useState([]);
   //reference to the 'users' collection in Firestore
  const usersCollectionRef = collection(db, "users");
   //function to create a new user
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    window.location.reload();
  }
  //function to update a user's age
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields)
    window.location.reload();
  }
  //function to delete a user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload();
  }
  //useEffect hook to fetch users when the component mounts
  useEffect(() => {
    //function to get users from Firestore
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      //map the fetched data to the users state
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [])

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
