import React from 'react';
import { CollectionIcon, CurrencyRupeeIcon, ExclamationCircleIcon } from '@heroicons/react/outline';

const StudentDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <CollectionIcon className="h-10 w-10 text-blue-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">My Batch</h2>
              <p className="text-2xl font-bold text-gray-800">Batch A</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <CurrencyRupeeIcon className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">Fees Paid</h2>
              <p className="text-2xl font-bold text-gray-800">₹10,000</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <ExclamationCircleIcon className="h-10 w-10 text-red-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">Pending Dues</h2>
              <p className="text-2xl font-bold text-gray-800">₹2,000</p>
            </div>
          </div>
        </div>

        {/* Fee History */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fee History</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Paid</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">15 Oct, 2.025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹5,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <a href="#" className="text-blue-600 hover:text-blue-900">Download</a>
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

export default StudentDashboard;