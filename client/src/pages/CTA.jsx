import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="bg-blue-600 text-white text-center p-8">
      <h2 className="text-2xl font-bold">Ready to get started?</h2>
      <p className="mt-2">Join us now!</p>
      <div className="mt-4">
        <Link to="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">Create your institute</Link>
      </div>
    </div>
  );
};

export default CTA;
