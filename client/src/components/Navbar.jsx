import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// Heroicons v2 uses names like XMarkIcon and Bars3Icon and the package path
// changed to @heroicons/react/24/outline
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand">OkFees</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/#features" className="text-slate-600 font-medium hover:text-brand transition-colors">Features</a>
              <a href="/#testimonials" className="text-slate-600 font-medium hover:text-brand transition-colors">Testimonials</a>
              <a href="/#faq" className="text-slate-600 font-medium hover:text-brand transition-colors">FAQ</a>
              <a href="/#pricing" className="text-slate-600 font-medium hover:text-brand transition-colors">Pricing</a>
              <Link to="/login" className="text-slate-600 font-medium hover:text-brand transition-colors">Login</Link>
              <Link to="/signup" className="btn btn-primary">Start Free Trial</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost p-2">
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
            <a href="/#features" onClick={() => setIsOpen(false)} className="text-slate-600 hover:bg-gray-50 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="/#testimonials" onClick={() => setIsOpen(false)} className="text-slate-600 hover:bg-gray-50 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="/#faq" onClick={() => setIsOpen(false)} className="text-slate-600 hover:bg-gray-50 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-slate-600 hover:bg-gray-50 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-slate-600 hover:bg-gray-50 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            <Link to="/signup" onClick={() => setIsOpen(false)} className="btn btn-primary block px-3 py-2 text-base">Start Free Trial</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
