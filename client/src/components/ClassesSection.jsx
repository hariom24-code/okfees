import React from "react";
import Card from "./Card";

const ClassesSection = () => {
  const classes = [
    { name: "10th Math", time: "10 AM", teacher: "Ramesh Sir" },
    { name: "9th Science", time: "12 PM", teacher: "Suresh Sir" },
  ];

  return (
    <Card>
      <h3 className="font-semibold mb-2 text-gray-800">Live Classes</h3>
      <ul className="space-y-2">
        {classes.map((cls, i) => (
          <li key={i} className="border-b border-gray-200 pb-2">
            <p className="font-semibold text-gray-700">{cls.name}</p>
            <p className="text-sm text-gray-500">Time: {cls.time}</p>
            <p className="text-sm text-gray-500">Teacher: {cls.teacher}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ClassesSection;
