const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a batch name'],
  },
  institute: {
    type: mongoose.Schema.ObjectId,
    ref: 'Institute',
    required: true,
  },
  teacher: {
    type: String,
  },
  subject: {
    type: String,
  },
  timing: {
    type: String,
  },
  room: {
    type: String,
  },
  students: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Student',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Batch', BatchSchema);
