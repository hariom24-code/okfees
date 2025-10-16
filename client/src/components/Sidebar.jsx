import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Kartik Classes 01</h2>
      <ul className="space-y-4">
        <li>🏠 Dashboard</li>
        <li>👨‍🎓 Batches</li>
        <li>📰 News</li>
        <li>⚙️ Settings</li>
        <li>🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
