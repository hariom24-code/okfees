const express = require('express');
const router = express.Router();
const { createFee, getFees, getFee } = require('../controllers/feeController');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getFees).post(protect, createFee);
router.route('/:id').get(protect, getFee);

module.exports = router;
