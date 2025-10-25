const express = require('express');
const router = express.Router();
const { getBatches, seedBatches, createBatch, updateBatch, deleteBatch } = require('../controllers/batchController');
const { protect } = require('../middleware/auth');

router.route('/').get(getBatches).post(protect, createBatch);
router.route('/seed').get(seedBatches);
router.route('/:id').put(protect, updateBatch).delete(protect, deleteBatch);

module.exports = router;
