// src/services/api.js
import axios from "axios";

// ✅ Base URL (adjust for deployment)
const API = axios.create({
  baseURL: import.meta?.env?.VITE_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// ✅ Attach token (if exists)
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (error) => Promise.reject(error)
);

// ✅ Global error handling
API.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(
      new Error(error.response?.data?.error || error.message || "Request failed")
    );
  }
);

// ✅ Optional Mock Mode
const useMockAuth =
  (typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_USE_MOCK_AUTH === "true") ||
  false;

// ✅ Register Institute or Student
export const registerInstitute = async (formData) => {
  const path = useMockAuth ? "/mock/auth/register" : "/auth/register";
  const { data } = await API.post(path, formData);
  return data;
};

// ✅ Login Institute / Student
export const loginInstitute = async (formData) => {
  const path = useMockAuth ? "/mock/auth/login" : "/auth/login";
  const { data } = await API.post(path, formData);

  // Save token + user info locally for session persistence
  if (data?.token) localStorage.setItem("token", data.token);
  if (data?.user) localStorage.setItem("user", JSON.stringify(data.user));

  return data;
};

// ✅ Google OAuth Login (redirect-based)
export const loginWithGoogle = async () => {
  try {
    if (!useMockAuth) {
      // Redirect user to backend OAuth URL
      window.location.href = "http://localhost:5000/api/auth/google";
    } else {
      // Mock success (for dev)
      return { message: "Mock Google login success" };
    }
  } catch (error) {
    throw new Error(error.response?.data?.error || "Google login failed!");
  }
};

// ✅ Forgot Password OTP
export const sendOtp = async (email) => {
  const { data } = await API.post("/auth/send-otp", { email });
  return data;
};

export default API;
