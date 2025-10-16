const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const Institute = require("../models/Institute");
const Student = require("../models/Student");

// Initialize Google OAuth client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// 🔐 Helper function to generate JWT
const generateToken = (id, role) => {
  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET || "supersecret",
    { expiresIn: process.env.JWT_EXPIRE || "7d" }
  );
};

// 🧾 REGISTER CONTROLLER
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Select model based on role
    const Model = role === "student" ? Student : Institute;

    // Check if user exists
    const existingUser = await Model.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists with this email." });
    }

    // Hash password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await Model.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = generateToken(user._id, role);

    return res.status(201).json({
      success: true,
      message: "Registration successful!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role,
      },
      token,
    });
  } catch (error) {
    console.error("❌ Register Error:", error.message);
    return res.status(500).json({ error: "Server error during registration." });
  }
};

// 🔑 LOGIN CONTROLLER
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Choose model dynamically
    const Model = role === "student" ? Student : Institute;
    const user = await Model.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "No user found with this email." });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password." });
    }

    // Generate JWT
    const token = generateToken(user._id, role);

    return res.status(200).json({
      success: true,
      message: "Login successful!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role,
      },
      token,
    });
  } catch (error) {
    console.error("❌ Login Error:", error.message);
    return res.status(500).json({ error: "Server error during login." });
  }
};

// 🌐 GOOGLE AUTH CONTROLLER
exports.googleAuth = async (req, res) => {
  try {
    const { token, role } = req.body;

    if (!token || !role) {
      return res.status(400).json({ error: "Google token and role are required." });
    }

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub: googleId } = payload;

    // Select model based on role
    const Model = role === "student" ? Student : Institute;

    // Check if user exists
    let user = await Model.findOne({ email });

    if (!user) {
      // Create new user (no password for Google login)
      user = await Model.create({
        name,
        email,
        password: "",
        googleId,
      });
    }

    // Generate JWT
    const jwtToken = generateToken(user._id, role);

    return res.status(200).json({
      success: true,
      message: "Google authentication successful!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role,
      },
      token: jwtToken,
    });
  } catch (error) {
    console.error("❌ Google Auth Error:", error.message);
    return res.status(500).json({ error: "Google authentication failed." });
  }
};
