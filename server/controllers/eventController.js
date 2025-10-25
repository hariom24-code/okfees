const Event = require('../models/Event');

// Create event
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, audience } = req.body;
    if (!title || !date) return res.status(400).json({ error: 'title and date required' });

    const ev = await Event.create({ title, description, date, audience, institute: req.user?.id });
    res.status(201).json({ success: true, data: ev });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get events (optionally institute-scoped)
exports.getEvents = async (req, res) => {
  try {
    const query = {};
    if (req.user && req.user.role === 'institute') query.institute = req.user.id;
    const events = await Event.find(query).sort({ date: 1 });
    res.status(200).json({ success: true, count: events.length, data: events });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete event
exports.deleteEvent = async (req, res) => {
  try {
    const ev = await Event.findByIdAndDelete(req.params.id);
    if (!ev) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
