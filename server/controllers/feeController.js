const Fee = require('../models/Fee');
const Student = require('../models/Student');

// Create a fee payment
exports.createFee = async (req, res) => {
  try {
    const { studentId, amount, mode, note } = req.body;
    if (!studentId || !amount) return res.status(400).json({ error: 'studentId and amount required' });

    const fee = await Fee.create({ student: studentId, amount, mode, note, institute: req.user?.id });

    // Update student balances
    const student = await Student.findById(studentId);
    if (student) {
      student.feesPaid = (student.feesPaid || 0) + Number(amount);
      student.pendingFees = Math.max(0, (student.totalFees || 0) - student.feesPaid);
      await student.save();
    }

    res.status(201).json({ success: true, data: fee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get fees (optionally by student)
exports.getFees = async (req, res) => {
  try {
    const query = {};
    if (req.query.studentId) query.student = req.query.studentId;
    if (req.user && req.user.role === 'institute') query.institute = req.user.id;

    const fees = await Fee.find(query).populate('student', 'name email');
    res.status(200).json({ success: true, count: fees.length, data: fees });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get single fee
exports.getFee = async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id).populate('student', 'name email');
    if (!fee) return res.status(404).json({ error: 'Fee not found' });
    res.status(200).json({ success: true, data: fee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
