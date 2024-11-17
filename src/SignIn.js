// SignIn.js
import React, { useState } from "react";
import "./SignIn.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import logo from './logo.webp';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
    <div className="signin-container">
      <img
        src={logo}
        alt="Goldman Sachs"
        className="logo"
      />
      <h2>Sign In</h2>

      {error && <div className="error-message">{error}</div>}

      <form className="signin-form" onSubmit={handleSignIn}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={togglePasswordVisibility} className="toggle-password">
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <button type="submit" className="signin-button">Sign In</button>
      </form>

      <div className="links">
        <Link to="/forgot-password">Forgot Password?</Link>
        <Link to="/sign-up">Set Up Online Account</Link>
      </div>
    </div>
  );
}

export default SignIn;