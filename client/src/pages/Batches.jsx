import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Batches = () => {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/batches');
        setBatches(res.data.data);
      } catch (err) {
        console.error('Error fetching batches', err);
      }
    };

    fetchBatches();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Batches</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {batches.map((batch) => (
            <div key={batch._id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800">{batch.name}</h2>
              <p className="text-gray-600">{batch.subject}</p>
              <p className="text-gray-600">Timing: {batch.timing}</p>
              <p className="text-gray-600">Teacher: {batch.teacher}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Batches;
