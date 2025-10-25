const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
  amount: { type: Number, required: true },
  mode: { type: String, enum: ['cash','card','online','upi'], default: 'cash' },
  note: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Fee', feeSchema);
