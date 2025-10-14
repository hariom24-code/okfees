import React from 'react';
import { UsersIcon, CollectionIcon, CurrencyRupeeIcon, ExclamationIcon } from '@heroicons/react/outline';

const InstituteDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Institute Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <UsersIcon className="h-10 w-10 text-blue-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">Total Students</h2>
              <p className="text-2xl font-bold text-gray-800">150</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <CollectionIcon className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">Total Batches</h2>
              <p className="text-2xl font-bold text-gray-800">10</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <CurrencyRupeeIcon className="h-10 w-10 text-yellow-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">Fees Collected</h2>
              <p className="text-2xl font-bold text-gray-800">₹5,00,000</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <ExclamationIcon className="h-10 w-10 text-red-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">Pending Fees</h2>
              <p className="text-2xl font-bold text-gray-800">₹50,000</p>
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Students</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Fees Paid</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Batch A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">₹10,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                      <a href="#" className="text-red-600 hover:text-red-900 ml-4">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;