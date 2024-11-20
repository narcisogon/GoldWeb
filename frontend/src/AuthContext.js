// src/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebaseConfig'; // Ensure firebaseConfig.js is correctly set up
import { onAuthStateChanged } from 'firebase/auth';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Replace this with a spinner or a more sophisticated loading indicator if desired
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export AuthProvider as the default export
export default AuthProvider;
