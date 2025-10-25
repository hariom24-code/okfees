const Fee = require('../models/Fee');
const Student = require('../models/Student');

// Get monthly revenue for last N months (default 6)
exports.monthlyRevenue = async (req, res) => {
  try {
    const months = parseInt(req.query.months) || 6;
    const now = new Date();

    const pipeline = [
      {
        $match: {},
      },
      {
        $group: {
          _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
          total: { $sum: '$amount' },
        },
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: months },
    ];

    const results = await Fee.aggregate(pipeline);

    // Normalize to an array ordered chronologically
    const data = results
      .map((r) => ({ year: r._id.year, month: r._id.month, total: r.total }))
      .reverse();

    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get monthly student growth (new students per month)
exports.monthlyStudentGrowth = async (req, res) => {
  try {
    const months = parseInt(req.query.months) || 6;
    const pipeline = [
      {
        $group: {
          _id: { year: { $year: '$joinDate' }, month: { $month: '$joinDate' } },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: months },
    ];

    const results = await Student.aggregate(pipeline);

    const data = results.map((r) => ({ year: r._id.year, month: r._id.month, count: r.count })).reverse();

    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
