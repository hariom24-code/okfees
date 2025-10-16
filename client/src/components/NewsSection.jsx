import React, { useState } from "react";

const NewsSection = () => {
  const [news, setNews] = useState([
    "Batch test on Sunday",
    "Fee payment reminder",
  ]);

  const [newNews, setNewNews] = useState("");

  const handleAddNews = () => {
    if (newNews.trim()) {
      setNews([...news, newNews]);
      setNewNews("");
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="font-semibold mb-2">Institute News</h3>
      <ul className="list-disc pl-4 text-gray-700 mb-3">
        {news.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add new news..."
        value={newNews}
        onChange={(e) => setNewNews(e.target.value)}
        className="border p-2 w-2/3 mr-2"
      />
      <button
        onClick={handleAddNews}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default NewsSection;
