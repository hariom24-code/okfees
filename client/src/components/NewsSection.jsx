import React, { useState } from "react";
import Card from "./Card";

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
    <Card>
      <h3 className="font-semibold mb-2 text-gray-800">Institute News</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
        {news.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          placeholder="Add new news..."
          value={newNews}
          onChange={(e) => setNewNews(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-l-md focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleAddNews}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </Card>
  );
};

export default NewsSection;
