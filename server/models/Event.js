const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  audience: { type: String, enum: ['all','students','parents'], default: 'all' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
