// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginInstitute } from "../services/api"; // optional: real API call

const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("institute");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);

      // ✅ Uncomment this when backend is connected:
      // const res = await loginInstitute({ email, password, role });
      // localStorage.setItem("token", res.token);
      // localStorage.setItem("user", JSON.stringify(res.user));

      // 🔹 For now: mock success
      localStorage.setItem("user", JSON.stringify({ email, role }));

      if (role === "institute") navigate("/dashboard");
      else navigate("/student/dashboard");
    } catch {
      setError("Invalid login credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-xl p-8 w-96 border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin}>
          {/* Role Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Login as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400"
            >
              <option value="institute">Institute</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mb-3 rounded focus:ring-2 focus:ring-blue-400"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 mb-4 rounded focus:ring-2 focus:ring-blue-400"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
