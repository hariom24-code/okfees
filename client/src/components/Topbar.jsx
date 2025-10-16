import React from "react";

const Topbar = () => {
  return (
    <div className="bg-white shadow p-3 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search student..."
        className="border rounded p-2 w-1/3"
      />
      <div className="flex items-center space-x-4">
        <button>🔔</button>
        <img
          src="/assets/react.svg"
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
