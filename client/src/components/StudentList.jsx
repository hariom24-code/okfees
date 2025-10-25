import React, { useEffect, useState } from "react";
import Card from "./Card";
import API from "../services/api";

const StudentList = ({ batch }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchStudents = async () => {
      if (!batch) return;
      setLoading(true);
      try {
        // If batch is an object with _id, request students by batch id
        if (batch._id) {
          const { data } = await API.get(`/students?batch=${batch._id}`);
          if (mounted) setStudents(data.data || []);
        } else {
          // Fallback static list when no backend is available
          setStudents([
            { name: "Roshan Kumar", father: "Suresh Kumar" },
            { name: "Ajay Kumar", father: "Rajesh Kumar" },
          ]);
        }
      } catch (err) {
        console.error("Error fetching students", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchStudents();
    return () => (mounted = false);
  }, [batch]);

  if (!batch) {
    return (
      <Card>
        <p className="text-gray-500">Select a batch to view students</p>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="font-semibold mb-3 text-gray-800">{batch.name || batch} Students</h3>
      {loading ? (
        <p className="text-sm text-gray-500">Loading students...</p>
      ) : (
        <ul className="space-y-2">
          {students.map((s, i) => (
            <li
              key={s._id || i}
              className="border-b border-gray-200 pb-2 flex justify-between text-gray-700"
            >
              <span>{s.name}</span>
              <span className="text-gray-500">{s.parentName || s.father || s.phone || ''}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default StudentList;
