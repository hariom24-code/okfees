// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// ✅ Load environment variables
dotenv.config();

// ✅ Defaults for local dev
process.env.JWT_SECRET = process.env.JWT_SECRET || "devsecret";
process.env.JWT_EXPIRE = process.env.JWT_EXPIRE || "30d";
process.env.CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
process.env.PORT = process.env.PORT || 5000;

// ✅ Connect MongoDB
connectDB();

const app = express();

// ✅ Middleware
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  );
} else {
  // During local development allow requests from any localhost port to ease testing
  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );
}

// ✅ Passport (optional)
try {
  const passport = require("passport");
  const session = require("express-session");
  require("./config/passport");

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "mysecret",
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  console.log("✅ Passport initialized successfully");
} catch (err) {
  console.warn("⚠️ Passport not configured or missing. Skipping OAuth setup.");
}

// ✅ Import Routes
const authRoutes = require("./routes/auth");
const studentRoutes = require("./routes/studentRoutes");
const batchRoutes = require("./routes/batchRoutes");
const mockAuthRoutes = require("./routes/mockAuth");
const feeRoutes = require("./routes/feeRoutes");
const eventRoutes = require("./routes/eventRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

// ✅ Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/batches", batchRoutes);
app.use("/api/mock/auth", mockAuthRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/events", eventRoutes);
app.use('/api/analytics', analyticsRoutes);

// ✅ Root
app.get("/", (req, res) => {
  res.send("✅ OkFees API is running...");
});

// ✅ Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// ✅ Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
