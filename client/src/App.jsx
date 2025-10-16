// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import InstituteDashboard from "./pages/InstituteDashboard";
import StudentDashboard from "./pages/StudentDashboard";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <SignupPage />}
        />

        {/* Institute Dashboard */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              user?.role === "institute" ? (
                <InstituteDashboard />
              ) : (
                <Navigate to="/student/dashboard" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Student Dashboard */}
        <Route
          path="/student/dashboard"
          element={
            isLoggedIn ? (
              user?.role === "student" ? (
                <StudentDashboard />
              ) : (
                <Navigate to="/dashboard" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
