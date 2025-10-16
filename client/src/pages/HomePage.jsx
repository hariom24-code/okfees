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
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4 grid grid-cols-3 gap-4 overflow-auto">
          <div className="col-span-1">
            <BatchList onSelectBatch={setSelectedBatch} />
          </div>
          <div className="col-span-2 space-y-4">
            <StudentList batch={selectedBatch} />
            <NewsSection />
            <ClassesSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
