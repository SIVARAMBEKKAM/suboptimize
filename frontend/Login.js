import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import Dashboard from "./dashboard";
import {
  signInWithPopup
} from "firebase/auth";


import {
  auth,
  provider
} from "./firebase";
import {
  signOut
} from "firebase/auth";



function Login() {
  const emailref=useRef();
  const passwordref=useRef();   

const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();

  try {

    const email = emailref.current.value;
    const password = passwordref.current.value;

    const res = await axios.post(
      "https://suboptimize-backend.onrender.com/api/auth/login",
      {
        email,
        password
      }
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    navigate("/dashboard");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );

  }
};const handleGoogleLogin = async () => {

  try {

    // Logout previous Firebase session
    await signOut(auth);

    const result = await signInWithPopup(
      auth,
      provider
    );

    const user = result.user;

    console.log(user);

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

return ( <div className="login-page">

  {/* Left Side */}
  <div className="login-left">
    <div className="login-left-content">

      <div className="login-logo">
        ✦ SubOptimize
      </div>

      <h1 className="login-heading">
        Master your
        <br />
        subscription
        <br />
        economy.
      </h1>

      <p className="login-description">
        Log in to view your personalized spending insights and regain
        control over your SaaS stack with enterprise-grade analytics.
      </p>

      <div className="login-saving-card">
        <div className="login-saving-title">
          MONTHLY SAVINGS
        </div>

        <div className="login-saving-amount">
          $1,240.00
        </div>

        <div className="login-progress">
          <div className="login-progress-fill"></div>
        </div>
      </div>

    </div>
  </div>

  {/* Right Side */}
  <div className="login-right">
      <div className="login-mobile-brand">
  <h2>SubOptimize</h2>
</div>
    <div className="login-card">

      {/* Mobile Brand */}
   

      <h1 className="login-card-title">
        Log in to your account
      </h1>

      <p className="login-card-subtitle">
        Welcome back! Please enter your details.
      </p>

      <label className="login-label">
        Email Address
      </label>

      <input
        className="login-input"
        type="email"
        placeholder="name@company.com"
        ref={emailref}
      />

      <div className="login-password-header">
        <label className="login-label">
          Password
        </label>

        <a href="/" className="login-forgot-link">
          Forgot password?
        </a>
      </div>

        <input className="login-input"
          type="password"
          placeholder="••••••••"
          ref={passwordref}
        />
    

      <div className="login-remember">
        <input type="checkbox" />
        <span>Remember me for 30 days</span>
      </div>

      <button className="login-btn" onClick={handleLogin}>
        Sign In
      </button>

      <div className="login-divider">
        <span>OR CONTINUE WITH</span>
      </div>
<button
  className="google-btn"
  onClick={handleGoogleLogin}
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
  />
  Continue with Google
</button>
</div>
<div >
      <p className="login-register-text">
        Don't have an account?{" "}
        <span
          className="login-register-link"
          onClick={() => navigate("/Register")}
        >
          Create account
        </span>
      </p></div>
</div>


    </div>



);
}

export default Login;
