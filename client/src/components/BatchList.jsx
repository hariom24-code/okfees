import React, { useEffect, useState } from "react";
import Card from "./Card";
import API from "../services/api";

const BatchList = ({ onSelectBatch }) => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchBatches = async () => {
      try {
        const { data } = await API.get("/batches");
        if (mounted) setBatches(data.data || []);
      } catch (err) {
        console.error("Failed to load batches", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchBatches();
    return () => (mounted = false);
  }, []);

  return (
    <Card>
      <h3 className="font-semibold mb-2 text-gray-800">All Batches</h3>
      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-1">
          {batches.map((batch) => (
            <li
              key={batch._id || batch.name}
              onClick={() => onSelectBatch(batch)}
              className="cursor-pointer hover:bg-blue-100 p-2 rounded text-gray-700"
            >
              {batch.name}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default BatchList;
