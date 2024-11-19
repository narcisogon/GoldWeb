// SignUp.js
import React, { useState } from 'react';
import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        // Add other default fields as needed
      });

      // Navigate to dashboard after successful sign-up and data saving
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during sign-up:', error);
      // Handle specific error codes
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('The email address is already in use by another account.');
          break;
        case 'auth/invalid-email':
          setError('The email address is not valid.');
          break;
        case 'auth/weak-password':
          setError('The password is too weak.');
          break;
        case 'permission-denied':
          setError('Insufficient permissions to save user data.');
          break;
        default:
          setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Sign Up</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label className="form-label">Email Address:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;
