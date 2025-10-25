import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchEvents = async () => {
      try {
        const res = await API.get('/events');
        if (mounted) setEvents(res.data.data || []);
      } catch (err) {
        console.error('Failed to fetch events', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchEvents();
    return () => (mounted = false);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Events & Announcements</h1>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-3">
            {events.length === 0 && <p className="text-gray-500">No events yet.</p>}
            {events.map((ev) => (
              <div key={ev._id} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">{ev.title}</div>
                    <div className="text-sm text-gray-500">{ev.description}</div>
                    <div className="text-sm text-gray-500">Audience: {ev.audience}</div>
                  </div>
                  <div className="text-sm text-gray-500">{new Date(ev.date).toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
