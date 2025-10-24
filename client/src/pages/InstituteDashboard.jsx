// src/pages/InstituteDashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BatchList from "../components/BatchList";
import StudentList from "../components/StudentList";
import Card from "../components/Card";

const InstituteDashboard = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);

  // Mock upcoming classes (you can replace with API data later)
  const upcoming = [
    {
      id: 1,
      title: "Physics - Mechanics",
      timing: "Mon, Wed, Fri - 5:00 PM",
      teacher: "Ravi Sharma",
      seats: 30,
      fee: "₹3000",
    },
    {
      id: 2,
      title: "Maths - Algebra",
      timing: "Tue, Thu - 6:00 PM",
      teacher: "Sunita Verma",
      seats: 25,
      fee: "₹2800",
    },
    {
      id: 3,
      title: "Chemistry - Organic",
      timing: "Sat - 10:00 AM",
      teacher: "Anil Gupta",
      seats: 20,
      fee: "₹3200",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-6">
          {/* Header / Institute banner */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Kartik Classes 01</h1>
                <p className="text-sm opacity-90">CBSE / IIT-JEE | 200+ students enrolled</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm">Active Batches</div>
                  <div className="font-semibold text-lg">8</div>
                </div>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">Create Batch</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left quick/profile column */}
            <div className="col-span-12 lg:col-span-3">
              <Card className="mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">📚</div>
                  <div>
                    <div className="font-semibold">Kartik Classes 01</div>
                    <div className="text-sm text-gray-500">Institute Owner: Kartik</div>
                    <div className="text-sm text-gray-500">Location: Patna</div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-blue-600 text-white py-2 rounded">Add Announcement</button>
                </div>
              </Card>

              <Card>
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="hover:text-blue-600 cursor-pointer">💳 Payments</li>
                  <li className="hover:text-blue-600 cursor-pointer">📅 Timetable</li>
                  <li className="hover:text-blue-600 cursor-pointer">👥 Teachers</li>
                  <li className="hover:text-blue-600 cursor-pointer">⚙️ Settings</li>
                </ul>
              </Card>
            </div>

            {/* Main feed */}
            <div className="col-span-12 lg:col-span-6">
              <Card className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Overview</h2>
                <p className="text-sm text-gray-600">Welcome back! Here's what's happening in your institute.</p>
              </Card>

              <div className="space-y-4">
                {upcoming.map((c) => (
                  <Card key={c.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-lg font-semibold">{c.title}</div>
                        <div className="text-sm text-gray-500">Teacher: {c.teacher}</div>
                        <div className="text-sm text-gray-500">Timing: {c.timing}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Seats: {c.seats}</div>
                        <div className="text-sm font-semibold">{c.fee}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right column: batches & students */}
            <div className="col-span-12 lg:col-span-3">
              <div className="space-y-4">
                <Card>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Batches</h3>
                    <button className="text-blue-600 text-sm">+ New</button>
                  </div>
                  <div className="mt-3">
                    <BatchList onSelectBatch={setSelectedBatch} />
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-2">Students</h3>
                  {selectedBatch ? (
                    <StudentList batch={selectedBatch} />
                  ) : (
                    <p className="text-sm text-gray-500">Select a batch to view students</p>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
