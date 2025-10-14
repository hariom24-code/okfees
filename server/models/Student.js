const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /\S+@\S+\.\S+/,
      'Please add a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
  },
  institute: {
    type: mongoose.Schema.ObjectId,
    ref: 'Institute',
    required: true,
  },
  batch: {
    type: mongoose.Schema.ObjectId,
    ref: 'Batch',
  },
  contact: {
    type: String,
  },
  parentDetails: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Student', StudentSchema);
