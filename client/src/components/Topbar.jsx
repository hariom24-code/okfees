import React from "react";

const Topbar = () => {
  return (
    <div className="card flex items-center justify-between gap-4">
      <input
        type="text"
        placeholder="Search student..."
        className="p-2 border rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-primary-400"
      />
      <div className="flex items-center space-x-4">
        <button className="btn btn-ghost" aria-label="notifications">🔔</button>
        <img
          src="/assets/react.svg"
          alt="profile"
          className="w-9 h-9 rounded-full ring-2 ring-white"
        />
      </div>
    </div>
  );
};

export default Topbar;
