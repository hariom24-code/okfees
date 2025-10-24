import React from 'react';
import { AcademicCapIcon, BanknotesIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Easy Fee Management',
    description: 'Automate fee collection, send reminders, and generate receipts with a single click.',
    icon: BanknotesIcon,
  },
  {
    name: 'Student & Batch Tracking',
    description: 'Manage student information, track attendance, and organize batches effortlessly.',
    icon: UsersIcon,
  },
  {
    name: 'Performance Analytics',
    description: 'Gain insights into student performance and institute growth with our powerful analytics dashboard.',
    icon: ChartBarIcon,
  },
  {
    name: 'Online Study Material',
    description: 'Share notes, assignments, and other study materials with your students through the portal.',
    icon: AcademicCapIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Everything You Need to Succeed</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            OkFees provides a comprehensive suite of tools to help you manage and grow your coaching institute.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
