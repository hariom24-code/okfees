import React from 'react';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Features</h1>
      <p className="mt-4 text-gray-700">This page will describe product features. Replace with real content.</p>
      <div className="mt-6">
        <Link to="/" className="text-blue-600">Back to home</Link>
      </div>
    </div>
  );
}
