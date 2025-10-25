import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Fees = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchFees = async () => {
      try {
        const res = await API.get('/fees');
        if (mounted) setFees(res.data.data || []);
      } catch (err) {
        console.error('Failed to fetch fees', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchFees();
    return () => (mounted = false);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Fees</h1>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-3">
            {fees.length === 0 && <p className="text-gray-500">No fee records yet.</p>}
            {fees.map((f) => (
              <div key={f._id} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">{f.student?.name || 'Student'}</div>
                    <div className="text-sm text-gray-500">Amount: ₹{f.amount}</div>
                    <div className="text-sm text-gray-500">Mode: {f.mode}</div>
                  </div>
                  <div className="text-sm text-gray-500">{new Date(f.createdAt).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fees;
