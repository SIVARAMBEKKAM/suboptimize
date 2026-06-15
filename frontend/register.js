import React from 'react'
import './sign.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useRef } from "react";
import Dashboard from './dashboard';
import {
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  provider
} from "./firebase";
function Register() {

    const navigate = useNavigate();
  const emailref = useRef();
  const passwordref = useRef();
   const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://suboptimize-backend.onrender.com/api/auth/register",
        {
          // name: nameref.current.value,
          email: emailref.current.value,
          password: passwordref.current.value
        }
      );

      alert("Registration Successful");

      navigate("/dashboard");

    } catch (error) {

  console.log(error);
  console.log(error.response?.data);

  alert(
    error.response?.data?.message ||
    error.message
  );
}

    };
  

  // Google Register/Login
  const handleGoogleLogin = async () => {
    try {
  
      const result = await signInWithPopup(
        auth,
        provider
      );
  
      const user = result.user;
  
      await axios.post(
        "https://suboptimize-backend.onrender.com/api/auth/google",
        {
          email: user.email,
          uid: user.uid
        }
      );
  
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
  
      navigate("/dashboard");
  
    } catch (error) {
  
      console.log(error);
  
    }
  };
  
  return (
    
    <div className="signup-page">
      <div className="brand">
        <div className="logo"><img src='icon.png'></img></div>
        <h1>SubOptimize</h1>
      </div>

      <div className="card">
        <h2>Create your free account</h2>
        <p className="subtitle">
          Start optimizing your enterprise subscriptions today.
        </p>

        {/* <div className="field">
          <label>Full Name</label>
          <div className="input-wrapper">
            <input placeholder="Jane Doe"           ref={nameref}
  />
          </div>
        </div> */}

        <div className="field">
          <label>Email Address</label>
          <div className="input-wrapper">
            <input placeholder="jane@company.com"            ref={emailref}
/>
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div className="input-wrapper">
            <input type="password" placeholder="••••••••"            ref={passwordref}
/>
          </div>

          
        </div>

        <div className="terms">
          <input type="checkbox" />
          <span>
            I agree to the <a>Terms of Service</a> and{" "}
            <a>Privacy Policy</a>.
          </span>
        </div>

        <button className="signup-btn" onClick={handleRegister}>
          Sign Up
          <span>→</span>
        </button>

        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

    <button
  className="google-btn"
  onClick={handleGoogleLogin}
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt=""
  />
  Continue with Google
</button>
      </div>

      <p className="login" >
        Already have an account? <a onClick={() => navigate("/")}>Log in</a>
      </p>
    </div>
  );
}

export default Register