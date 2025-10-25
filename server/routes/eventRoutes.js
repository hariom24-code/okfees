const express = require('express');
const router = express.Router();
const { createEvent, getEvents, deleteEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getEvents).post(protect, createEvent);
router.route('/:id').delete(protect, deleteEvent);

module.exports = router;
