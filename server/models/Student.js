const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  parentName: { type: String },
  class: { type: String },
  batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },
  feesPaid: { type: Number, default: 0 },
  totalFees: { type: Number, default: 0 },
  pendingFees: { type: Number, default: 0 },
  joinDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", studentSchema);
