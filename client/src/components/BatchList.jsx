import React from "react";

const BatchList = ({ onSelectBatch }) => {
  const batches = ["Uttam Batch", "Bihar Batch", "UP Batch"];

  return (
    <div className="bg-white shadow rounded p-3">
      <h3 className="font-semibold mb-2">All Batches</h3>
      <ul>
        {batches.map((batch) => (
          <li
            key={batch}
            onClick={() => onSelectBatch(batch)}
            className="cursor-pointer hover:bg-blue-100 p-2 rounded"
          >
            {batch}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BatchList;
