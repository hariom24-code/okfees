import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-primary-600 to-primary-700 text-white flex flex-col p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Kartik Classes 01</h2>
        <p className="text-sm opacity-90">Manage batches, students & payments</p>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block py-2 px-3 rounded hover:bg-white/10 transition">🏠 Dashboard</Link>
          </li>
          <li>
            <Link to="/batches" className="block py-2 px-3 rounded hover:bg-white/10 transition">👨‍🎓 Batches</Link>
          </li>
          <li>
            <Link to="/fees" className="block py-2 px-3 rounded hover:bg-white/10 transition">💳 Fees</Link>
          </li>
          <li>
            <Link to="/events" className="block py-2 px-3 rounded hover:bg-white/10 transition">📰 Events</Link>
          </li>
          <li>
            <button className="w-full text-left py-2 px-3 rounded hover:bg-white/10">⚙️ Settings</button>
          </li>
          <li>
            <button className="w-full text-left py-2 px-3 rounded hover:bg-white/10">🚪 Logout</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
