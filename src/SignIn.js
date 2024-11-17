// SignIn.js
import React, { useState } from "react";
import "./SignIn.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from './logo.webp';

function SignIn() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="signin-container">
            <img 
                src={logo}
                alt="Goldman Sachs" 
                className="logo"
            />
            <h2>Sign In</h2>
            
            <form className="signin-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password</label>
                <div className="password-input">
                    <input 
                        type={passwordVisible ? "text" : "password"} 
                        id="password" 
                        name="password" 
                        required 
                    />
                    <span onClick={togglePasswordVisibility} className="toggle-password">
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <div className="remember-me">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Remember Me</label>
                </div>

                <button type="submit" className="signin-button">Sign in</button>
            </form>
            
            <div className="links">
                <a href="#forgot">Forgot Username or Password?</a>
                <a href="#setup">Set Up Online Access</a>
            </div>
        </div>
    );
}

export default SignIn;
