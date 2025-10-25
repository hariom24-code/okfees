// src/App.jsx
import React from "react";
import "./App.css";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import InstituteDashboard from "./pages/InstituteDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Batches from "./pages/Batches";
import Fees from "./pages/Fees";
import Events from "./pages/Events";
import ProtectedRoute from "./components/ProtectedRoute";
import Reports from "./pages/Reports";

// A simple component to handle role-based redirection.
// In a real app, you'd use a more robust solution with context.
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <LoginPage />;
  return user.role === "institute" ? <InstituteDashboard /> : <StudentDashboard />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/batches" element={<ProtectedRoute><Batches /></ProtectedRoute>} />
        <Route path="/fees" element={<ProtectedRoute><Fees /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
  <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
