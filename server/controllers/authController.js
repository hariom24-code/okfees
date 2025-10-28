const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const Institute = require("../models/Institute");
const Student = require("../models/Student");

// ✅ Initialize Google OAuth client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ✅ Helper: Generate JWT
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
    console.log('Register request body:', req.body);
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role)
      return res.status(400).json({ error: "All fields are required." });

    const Model = role === "student" ? Student : Institute;

    const existingUser = await Model.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists with this email." });

    // For Student model we don't have a pre-save hook to hash passwords,
    // so hash explicitly for students. For Institute the model has a
    // pre-save hook which will hash the password, so pass the raw
    // password and let mongoose middleware handle it.
    let user;
    if (role === 'student') {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await Model.create({ name, email, password: hashedPassword });
    } else {
      user = await Model.create({ name, email, password });
    }

    const token = generateToken(user._id, role);

    res.status(201).json({
      success: true,
      message: "Registration successful!",
      user: { id: user._id, name: user.name, email: user.email, role },
      token,
    });
  } catch (err) {
    console.error("❌ Register Error:", err);
    const payload = { error: err.message || "Server error during registration." };
    if (process.env.NODE_ENV !== 'production') payload.stack = err.stack;
    res.status(500).json(payload);
  }
};

// 🔑 LOGIN CONTROLLER
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role)
      return res.status(400).json({ error: "All fields are required." });

    const Model = role === "student" ? Student : Institute;
    const user = await Model.findOne({ email });

    if (!user) return res.status(404).json({ error: "No user found with this email." });

    if (!user.password)
      return res
        .status(403)
        .json({ error: "This account uses Google login only." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password." });

    const token = generateToken(user._id, role);

    res.status(200).json({
      success: true,
      message: "Login successful!",
      user: { id: user._id, name: user.name, email: user.email, role },
      token,
    });
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ error: "Server error during login." });
  }
};

// 🌐 GOOGLE AUTH CONTROLLER
exports.googleAuth = async (req, res) => {
  try {
    const { token, role } = req.body;

    if (!token || !role)
      return res
        .status(400)
        .json({ error: "Google token and role are required." });

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub: googleId } = payload;

    const Model = role === "student" ? Student : Institute;
    let user = await Model.findOne({ email });

    if (!user) {
      user = await Model.create({
        name,
        email,
        password: "", // empty for Google
        googleId,
      });
    }

    const jwtToken = generateToken(user._id, role);

    res.status(200).json({
      success: true,
      message: "Google authentication successful!",
      user: { id: user._id, name: user.name, email: user.email, role },
      token: jwtToken,
    });
  } catch (err) {
    console.error("❌ Google Auth Error:", err);
    res.status(500).json({ error: "Google authentication failed." });
  }
};


