import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import Dashboard from "./dashboard";
import Register from "./register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;