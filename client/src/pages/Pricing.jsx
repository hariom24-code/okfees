import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-4 text-gray-700">Pricing plans and details go here.</p>
      <div className="mt-6">
        <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded">Start Free Trial</Link>
      </div>
    </div>
  );
}
