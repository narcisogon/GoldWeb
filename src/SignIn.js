// SignIn.js
import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/dashboard'); // Adjust the path as needed
      })
      .catch((error) => {
        setError('Invalid email or password');
        console.error('Error signing in:', error);
      });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Sign In</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSignIn}>
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
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;
