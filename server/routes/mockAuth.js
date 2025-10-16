// routes/mockAuth.js
const express = require("express");
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Mock Auth Route working ✅" });
});

module.exports = router;
