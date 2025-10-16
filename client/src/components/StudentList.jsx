import React from "react";

const StudentList = ({ batch }) => {
  if (!batch)
    return (
      <div className="bg-white p-3 shadow rounded">
        <p>Select a batch to view students</p>
      </div>
    );

  const students = [
    { name: "Roshan Kumar", father: "Suresh Kumar" },
    { name: "Ajay Kumar", father: "Rajesh Kumar" },
  ];

  return (
    <div className="bg-white shadow rounded p-3">
      <h3 className="font-semibold mb-3">{batch} Students</h3>
      <ul>
        {students.map((s, i) => (
          <li
            key={i}
            className="border-b py-2 flex justify-between text-gray-700"
          >
            <span>{s.name}</span>
            <span>{s.father}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
