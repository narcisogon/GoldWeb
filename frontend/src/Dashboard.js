// src/Dashboard.js
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { db } from './firebaseConfig'; // Correctly imported
import { AuthContext } from './AuthContext';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import InvestmentList from './InvestmentList';
import InvestmentChart from './InvestmentChart';
import './Dashboard.css';

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * fetchInvestments:
   * Fetches the user's investments from Firestore.
   * Wrapped with useCallback to memoize the function and prevent unnecessary re-creations.
   */
  const fetchInvestments = useCallback(async () => {
    if (!currentUser) {
      console.log('User is not authenticated. Cannot fetch investments.');
      setLoading(false); // Ensure loading state is updated
      return;
    }

    try {
      const investmentsRef = collection(db, 'investments', currentUser.uid, 'stocks');
      const snapshot = await getDocs(investmentsRef);
      const investmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInvestments(investmentsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching investments:', error);
      setLoading(false);
    }
  }, [currentUser]); // 'db' removed as it's a stable dependency

  /**
   * useEffect:
   * Calls fetchInvestments whenever currentUser or fetchInvestments changes.
   * Ensures that investments are fetched when the user logs in or fetchInvestments is updated.
   */
  useEffect(() => {
    fetchInvestments();
  }, [fetchInvestments]);

  /**
   * addSampleInvestments:
   * Adds sample investment documents to Firestore.
   * After adding, it refreshes the investments state to reflect the new data.
   */
  const addSampleInvestments = async () => {
    if (!currentUser) {
      console.log('User is not authenticated. Cannot add investments.');
      return;
    }

    try {
      const investmentsRef = collection(db, 'investments', currentUser.uid, 'stocks');
      await addDoc(investmentsRef, {
        symbol: 'AAPL',
        shares: 10,
        purchasePrice: 150,
        purchaseDate: new Date(),
      });
      await addDoc(investmentsRef, {
        symbol: 'GOOGL',
        shares: 5,
        purchasePrice: 2000,
        purchaseDate: new Date(),
      });
      console.log('Sample investments added.');

      // Refresh the investments state without reloading the page
      fetchInvestments();
    } catch (error) {
      console.error('Error adding sample investments:', error);
    }
  };

  if (loading) {
    return <div className="container py-5">Loading investments...</div>;
  }

  return (
    <div className="container py-5">
      <h2>Welcome to Your Dashboard</h2>
      <p>Here is an overview of your investments:</p>

      {/* Button to add sample data */}
      <button className="btn btn-primary mb-4" onClick={addSampleInvestments}>
        Add Sample Investments
      </button>

      {/* Investment List */}
      <InvestmentList investments={investments} />

      {/* Investment Chart */}
      <InvestmentChart investments={investments} />
    </div>
  );
}

export default Dashboard;
