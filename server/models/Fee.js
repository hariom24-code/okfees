const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.ObjectId,
    ref: 'Student',
    required: true,
  },
  institute: {
    type: mongoose.Schema.ObjectId,
    ref: 'Institute',
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  paidAmount: {
    type: Number,
    default: 0,
  },
  pendingAmount: {
    type: Number,
  },
  dueDate: {
    type: Date,
  },
  paymentHistory: [
    {
      amount: Number,
      paymentDate: {
        type: Date,
        default: Date.now,
      },
      receipt: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Calculate pending amount before saving
FeeSchema.pre('save', function (next) {
  this.pendingAmount = this.totalAmount - this.paidAmount;
  next();
});

module.exports = mongoose.model('Fee', FeeSchema);
