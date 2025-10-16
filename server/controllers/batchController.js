const Batch = require('../models/Batch');

// @desc    Get all batches
// @route   GET /api/batches
// @access  Public
exports.getBatches = async (req, res, next) => {
  try {
    const batches = await Batch.find();
    res.status(200).json({ success: true, count: batches.length, data: batches });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Seed batches
// @route   GET /api/batches/seed
// @access  Public
exports.seedBatches = async (req, res, next) => {
    try {
        const batches = [
            { name: 'Batch A', subject: 'Mathematics', timing: '10:00 AM - 11:00 AM', teacher: 'Mr. Sharma' },
            { name: 'Batch B', subject: 'Science', timing: '11:00 AM - 12:00 PM', teacher: 'Ms. Gupta' },
            { name: 'Batch C', subject: 'English', timing: '1:00 PM - 2:00 PM', teacher: 'Mr. Khan' },
        ];
        await Batch.deleteMany();
        await Batch.insertMany(batches);
        res.status(200).json({ success: true, message: 'Batches seeded' });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
