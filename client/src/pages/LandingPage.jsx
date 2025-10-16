import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">OkFees</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        </nav>
        <div className="space-x-3">
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Login</Link>
          <Link to="/signup" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">Sign Up</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <h2 className="text-4xl font-bold mb-4">Smart Institute Management System</h2>
        <p className="text-gray-700 mb-8">Manage your students, fees, and growth — all in one place!</p>
        <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</Link>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-16 bg-white">
        <h3 className="text-2xl font-bold text-center mb-6">About</h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          OkFees helps coaching institutes manage students, batches, fees, and events efficiently.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h4 className="font-semibold mb-2">Student Management</h4>
            <p className="text-gray-600 text-sm">Add, edit, and manage student records easily.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h4 className="font-semibold mb-2">Fee Tracking</h4>
            <p className="text-gray-600 text-sm">Track collected and pending fees automatically.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h4 className="font-semibold mb-2">Event Scheduling</h4>
            <p className="text-gray-600 text-sm">Announce exams, meetings, and activities instantly.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-16 bg-white">
        <h3 className="text-2xl font-bold text-center mb-6">Pricing</h3>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-4">Free for up to 10 students. Paid plans start at ₹199/month.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-8 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-6">Testimonials</h3>
        <p className="text-center text-gray-600 italic max-w-2xl mx-auto">
          “OkFees transformed the way we manage our coaching institute!” – ABC Academy
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        © 2025 OkFees. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
