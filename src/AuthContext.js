// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Set loading to false when auth state is determined
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
