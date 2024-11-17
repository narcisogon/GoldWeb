// SignUp.js
import React, { useState } from 'react';
import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Account created
        const user = userCredential.user;
        // Store user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          // Add other default fields as needed
        });
        navigate('/dashboard');
      })
      .catch((error) => {
        setError('Error creating account');
        console.error('Error signing up:', error);
      });
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
