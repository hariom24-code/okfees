import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const [revenue, setRevenue] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const r1 = await API.get('/analytics/revenue?months=6');
        const r2 = await API.get('/analytics/students?months=6');
        setRevenue(r1.data.data || []);
        setStudents(r2.data.data || []);
      } catch (err) {
        console.error('Failed to load analytics', err);
      }
    };
    fetch();
  }, []);

  const revData = revenue.map((d) => ({ name: `${d.month}/${d.year}`, total: d.total }));
  const studData = students.map((d) => ({ name: `${d.month}/${d.year}`, count: d.count }));

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Reports & Analytics</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Revenue (last 6 months)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">New Students (last 6 months)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={studData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
