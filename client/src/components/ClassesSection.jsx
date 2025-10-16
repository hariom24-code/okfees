import React from "react";

const ClassesSection = () => {
  const classes = [
    { name: "10th Math", time: "10 AM", teacher: "Ramesh Sir" },
    { name: "9th Science", time: "12 PM", teacher: "Suresh Sir" },
  ];

  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="font-semibold mb-2">Live Classes</h3>
      <ul>
        {classes.map((cls, i) => (
          <li key={i} className="border-b py-2">
            <p className="font-semibold">{cls.name}</p>
            <p>Time: {cls.time}</p>
            <p>Teacher: {cls.teacher}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassesSection;
