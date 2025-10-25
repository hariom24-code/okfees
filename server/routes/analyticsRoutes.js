const express = require('express');
const router = express.Router();
const { monthlyRevenue, monthlyStudentGrowth } = require('../controllers/analyticsController');
const { protect } = require('../middleware/auth');

router.get('/revenue', protect, monthlyRevenue);
router.get('/students', protect, monthlyStudentGrowth);

module.exports = router;
