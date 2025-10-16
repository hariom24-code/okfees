// src/pages/InstituteDashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BatchList from "../components/BatchList";
import StudentList from "../components/StudentList";
import NewsSection from "../components/NewsSection";
import ClassesSection from "../components/ClassesSection";

const InstituteDashboard = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Dashboard Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Column */}
            <div className="md:col-span-1">
              <BatchList onSelectBatch={setSelectedBatch} />
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 space-y-4">
              {/* Students Section */}
              <div className="bg-white shadow-md rounded-xl p-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  Students {selectedBatch ? `in ${selectedBatch.name}` : ""}
                </h2>
                {selectedBatch ? (
                  <StudentList batch={selectedBatch} />
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    Select a batch to view students
                  </p>
                )}
              </div>

              {/* News & Classes Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <NewsSection />
                <ClassesSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
