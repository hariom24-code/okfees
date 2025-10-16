import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Heroicons v2 uses names like XMarkIcon and Bars3Icon and the package path
// changed to @heroicons/react/24/outline
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">OkFees</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/#features" onClick={() => { if (window.location.pathname !== '/') window.location.href = '/#features'; else { const el = document.getElementById('features'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="/#testimonials" onClick={() => { if (window.location.pathname !== '/') window.location.href = '/#testimonials'; else { const el = document.getElementById('testimonials'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <a href="/#faq" onClick={() => { if (window.location.pathname !== '/') window.location.href = '/#faq'; else { const el = document.getElementById('faq'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              <a href="/#pricing" onClick={() => { if (window.location.pathname !== '/') window.location.href = '/#pricing'; else { const el = document.getElementById('pricing'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <a href="/#login" onClick={() => { if (window.location.pathname !== '/') window.location.href = '/#login'; else { const el = document.getElementById('login'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Login</a>
              <a href="/signup" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Start Free Trial</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/#features" onClick={() => { setIsOpen(false); if (window.location.pathname !== '/') window.location.href = '/#features'; else { const el = document.getElementById('features'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="/#testimonials" onClick={() => { setIsOpen(false); if (window.location.pathname !== '/') window.location.href = '/#testimonials'; else { const el = document.getElementById('testimonials'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="/#faq" onClick={() => { setIsOpen(false); if (window.location.pathname !== '/') window.location.href = '/#faq'; else { const el = document.getElementById('faq'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <a href="/#pricing" onClick={() => { setIsOpen(false); if (window.location.pathname !== '/') window.location.href = '/#pricing'; else { const el = document.getElementById('pricing'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="/#login" onClick={() => { setIsOpen(false); if (window.location.pathname !== '/') window.location.href = '/#login'; else { const el = document.getElementById('login'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Login</a>
            <a href="/signup" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Start Free Trial</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
