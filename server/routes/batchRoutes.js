const express = require('express');
const router = express.Router();
const { getBatches, seedBatches } = require('../controllers/batchController');

router.route('/').get(getBatches);
router.route('/seed').get(seedBatches);

module.exports = router;
