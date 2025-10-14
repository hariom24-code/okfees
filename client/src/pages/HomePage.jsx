import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpenIcon, CreditCardIcon, CalendarIcon, ChartBarIcon } from '@heroicons/react/outline';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Manage your coaching institute with ease</h1>
                <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">OkFees centralizes student data, fee tracking, and communication — helping coaching institutes streamline operations and focus on student success.</p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/signup" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">Start Free</Link>
                  <Link to="/form" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">Explore Features</Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <img src="/src/assets/hero-placeholder.png" alt="OkFees dashboard" className="w-full max-w-lg mx-auto rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Tools built for coaching centers — student management, batch scheduling, fee tracking, and reporting.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <BookOpenIcon className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-bold mt-5">Student Management</h3>
                <p className="mt-2 text-base text-gray-600">Manage student profiles, attendance, and performance.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <CreditCardIcon className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-bold mt-5">Fee Management</h3>
                <p className="mt-2 text-base text-gray-600">Track payments, reminders and receipts.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <CalendarIcon className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-bold mt-5">Batch Scheduling</h3>
                <p className="mt-2 text-base text-gray-600">Create and manage class schedules.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-bold mt-5">Reports & Analytics</h3>
                <p className="mt-2 text-base text-gray-600">Gain insights on fee collection and performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Courses</h2>
              <Link to="/courses" className="text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors">Explore Courses</Link>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src="/src/assets/course-placeholder.png" alt="Course" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Fundamentals Of Science</h3>
                  <p className="text-gray-600 mt-2">Basic science course for beginners.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-xl text-blue-600">$49</span>
                    <Link to="/form" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src="/src/assets/course-placeholder.png" alt="Course" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Advanced Math</h3>
                  <p className="text-gray-600 mt-2">In-depth math topics for senior students.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-xl text-blue-600">$18</span>
                    <Link to="/form" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src="/src/assets/course-placeholder.png" alt="Course" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Complete Physics</h3>
                  <p className="text-gray-600 mt-2">Physics course covering modern concepts.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-xl text-blue-600">$14</span>
                    <Link to="/form" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;