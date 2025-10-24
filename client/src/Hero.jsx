import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">Transform Your Coaching Institute with OkFees</h1>
            <p className="mt-3 text-white/90 max-w-2xl">
              The ultimate platform for managing fees, students, and batches with ease. Streamline your operations and focus on what matters most: teaching.
            </p>
            <div className="mt-5 flex gap-3">
              <Link to="/signup" className="btn-primary hover:opacity-95 transition-opacity">Start Free Trial</Link>
              <Link to="/login" className="btn-outline hover:bg-white/10 transition-colors">Request a Demo</Link>
            </div>
          </div>
          <div>
            {/* Decorative illustration or a preview */}
            <div className="hero-illustration-placeholder shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
