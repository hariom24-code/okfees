// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerInstitute, loginWithGoogle } from "../services/api";
import { useToast } from "../hooks/useToast";
import { motion as Motion } from "framer-motion";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "institute", // default role
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { add } = useToast();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill all fields.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    add("Creating your account...", "info");

    try {
      // ✅ Backend signup call
      const res = await registerInstitute(formData);

      add("Account created successfully 🎉", "success");

      // Save token + user for session persistence
      if (res?.token) localStorage.setItem("token", res.token);
      if (res?.user) localStorage.setItem("user", JSON.stringify(res.user));

      // Redirect based on role
      if ((res.user && res.user.role) === "institute" || formData.role === "institute") navigate("/dashboard");
      else navigate("/student/dashboard");
    } catch (error) {
      // Prefer backend-provided error message when available
      const backendMsg = error?.response?.data?.error || error?.response?.data || null;
      const msg = backendMsg || error?.message || "Signup failed. Please try again.";
      setError(typeof msg === 'string' ? msg : JSON.stringify(msg));
      add(`Signup failed: ${typeof msg === 'string' ? msg : JSON.stringify(msg)}`, "error");
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      // loginWithGoogle will redirect the browser for real OAuth flows.
      // For mock mode it returns a value we can use.
      const maybe = await loginWithGoogle();
      if (maybe && maybe.token) {
        localStorage.setItem("token", maybe.token);
        if (maybe.user) localStorage.setItem("user", JSON.stringify(maybe.user));
        add("Google signup successful 🚀", "success");
        navigate("/dashboard");
      } else {
        // If not mock mode, the function will have redirected the browser.
        // Nothing more to do here.
      }
    } catch (error) {
      const msg =
        error?.response?.data?.error ||
        error?.message ||
        "Google signup failed.";
      add(msg, "error");
      console.error("Google signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <Motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:mx-auto sm:w-full sm:max-w-md text-center"
      >
        <Link to="/" className="text-4xl font-bold text-blue-700">
          OkFees
        </Link>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </Motion.div>

  <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-6 shadow-xl sm:rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit}>
            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="institute">Institute</option>
                <option value="student">Student</option>
              </select>
            </div>

            {/* Input Fields */}
            {["name", "email", "password"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700 capitalize"
                >
                  {field === "name" ? "Full Name / Institute Name" : field}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "password" ? "password" : "text"}
                  required
                  value={formData[field]}
                  onChange={onChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}

            {/* Error */}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            {/* Submit Button */}
            <Motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-2 px-4 text-white rounded-lg ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </Motion.button>
          </form>

          {/* Google Signup */}
          <Motion.div className="mt-4 text-center">
            <button
              onClick={handleGoogleSignup}
              disabled={loading}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-100"
            >
              Continue with Google
            </button>
          </Motion.div>

          {/* Redirect to Login */}
          <div className="mt-6 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:text-blue-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
  </Motion.div>
    </div>
  );
};

export default SignupPage;
