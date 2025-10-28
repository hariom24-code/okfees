// src/pages/InstituteDashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BatchList from "../components/BatchList";
import StudentList from "../components/StudentList";
import Card from "../components/Card";
import API from "../services/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InstituteDashboard = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [summary, setSummary] = useState({ batches: 0, students: 0, fees: 0 });
  const [showBatchForm, setShowBatchForm] = useState(false);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [batchForm, setBatchForm] = useState({ name: '', subject: '', timing: '', teacherName: '' });
  const [studentForm, setStudentForm] = useState({ name: '', email: '', phone: '', batch: '' });
  const [batchesList, setBatchesList] = useState([]);
  const [creatingBatch, setCreatingBatch] = useState(false);
  const [creatingStudent, setCreatingStudent] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
  const [announcementText, setAnnouncementText] = useState('');
  const navigate = useNavigate();

  // Fetch dashboard summary counts
  const fetchSummary = async () => {
    try {
      const [bres, sres, fres] = await Promise.all([
        API.get('/batches'),
        API.get('/students'),
        API.get('/fees'),
      ]);

  const batches = bres?.data?.count ?? (bres?.data?.data?.length ?? 0);
  const batchData = bres?.data?.data || [];
      const students = sres?.data?.count ?? (sres?.data?.data?.length ?? 0);
      const feesArr = fres?.data?.data || [];
      const fees = feesArr.reduce((sum, f) => sum + (f.amount || 0), 0);

  setSummary({ batches, students, fees });
  setBatchesList(batchData);
    } catch (err) {
      console.error('Failed to fetch dashboard summary', err);
    }
  };

  useEffect(() => { fetchSummary(); }, []);

  const createBatch = async (e) => {
    e.preventDefault();
    setCreatingBatch(true);
    try {
      await API.post('/batches', batchForm);
      // Notify other components to refresh
      window.dispatchEvent(new Event('batches:updated'));
      setBatchForm({ name: '', subject: '', timing: '', teacherName: '' });
      setShowBatchForm(false);
      fetchSummary();
    } catch (err) {
      console.error('Create batch failed', err);
    } finally {
      setCreatingBatch(false);
    }
  };

  const createStudent = async (e) => {
    e.preventDefault();
    setCreatingStudent(true);
    try {
      await API.post('/students', studentForm);
      window.dispatchEvent(new Event('students:updated'));
      setStudentForm({ name: '', email: '', phone: '', batch: '' });
      setShowStudentForm(false);
      fetchSummary();
    } catch (err) {
      console.error('Create student failed', err);
    } finally {
      setCreatingStudent(false);
    }
  };

  const addAnnouncement = (e) => {
    e.preventDefault();
    if (!announcementText.trim()) return;
    setAnnouncements((s) => [{ text: announcementText.trim(), createdAt: new Date() }, ...s]);
    setAnnouncementText('');
    setShowAnnouncementForm(false);
  };

  // Mock upcoming classes (you can replace with API data later)
  const upcoming = [
    {
      id: 1,
      title: "Physics - Mechanics",
      timing: "Mon, Wed, Fri - 5:00 PM",
      teacher: "Ravi Sharma",
      seats: 30,
      fee: "₹3000",
    },
    {
      id: 2,
      title: "Maths - Algebra",
      timing: "Tue, Thu - 6:00 PM",
      teacher: "Sunita Verma",
      seats: 25,
      fee: "₹2800",
    },
    {
      id: 3,
      title: "Chemistry - Organic",
      timing: "Sat - 10:00 AM",
      teacher: "Anil Gupta",
      seats: 20,
      fee: "₹3200",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-6">
          {/* Header / Institute banner */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Kartik Classes 01</h1>
                <p className="text-sm opacity-90">CBSE / IIT-JEE | 200+ students enrolled</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm">Active Batches</div>
                  <div className="font-semibold text-lg">{summary.batches}</div>
                </div>
                <div className="space-x-2">
                  <button onClick={() => setShowBatchForm((s) => !s)} className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">Create Batch</button>
                  <button onClick={() => setShowStudentForm((s) => !s)} className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">Add Student</button>
                </div>
              </div>
            </div>
          </div>

          {/* Inline forms for create batch / student */}
          {showBatchForm && (
            <div className="mb-4">
              <Card>
                <form onSubmit={createBatch} className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input required placeholder="Batch name" value={batchForm.name} onChange={(e)=>setBatchForm({...batchForm,name:e.target.value})} className="p-2 border rounded" />
                    <input placeholder="Subject" value={batchForm.subject} onChange={(e)=>setBatchForm({...batchForm,subject:e.target.value})} className="p-2 border rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input placeholder="Timing" value={batchForm.timing} onChange={(e)=>setBatchForm({...batchForm,timing:e.target.value})} className="p-2 border rounded" />
                    <input placeholder="Teacher" value={batchForm.teacherName} onChange={(e)=>setBatchForm({...batchForm,teacherName:e.target.value})} className="p-2 border rounded" />
                  </div>
                  <div className="flex space-x-2">
                    <button type="submit" disabled={creatingBatch} className="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-60">
                      {creatingBatch ? 'Creating...' : 'Create'}
                    </button>
                    <button type="button" onClick={()=>setShowBatchForm(false)} className="px-3 py-1 rounded border">Cancel</button>
                  </div>
                </form>
              </Card>
            </div>
          )}

          {showStudentForm && (
            <div className="mb-4">
              <Card>
                <form onSubmit={createStudent} className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    <input required placeholder="Student name" value={studentForm.name} onChange={(e)=>setStudentForm({...studentForm,name:e.target.value})} className="p-2 border rounded" />
                    <input required placeholder="Email" value={studentForm.email} onChange={(e)=>setStudentForm({...studentForm,email:e.target.value})} className="p-2 border rounded" />
                    <input placeholder="Phone" value={studentForm.phone} onChange={(e)=>setStudentForm({...studentForm,phone:e.target.value})} className="p-2 border rounded" />
                  </div>
                  <div>
                    <select value={studentForm.batch} onChange={(e)=>setStudentForm({...studentForm,batch:e.target.value})} className="p-2 border rounded w-full">
                      <option value="">Select Batch (optional)</option>
                      {batchesList.length === 0 ? (
                        <option disabled>Loading batches...</option>
                      ) : (
                        batchesList.map((b) => (
                          <option key={b._id || b.id} value={b._id || b.id}>{b.name || b.title || `Batch ${b._id || b.id}`}</option>
                        ))
                      )}
                    </select>
                  </div>
                  <div className="flex space-x-2">
                    <button type="submit" disabled={creatingStudent} className="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-60">{creatingStudent ? 'Adding...' : 'Create Student'}</button>
                    <button type="button" onClick={()=>setShowStudentForm(false)} className="px-3 py-1 rounded border">Cancel</button>
                  </div>
                </form>
              </Card>
            </div>
          )}

          <div className="grid grid-cols-12 gap-6">
            {/* Left quick/profile column */}
            <div className="col-span-12 lg:col-span-3">
              <Card className="mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">📚</div>
                  <div>
                    <div className="font-semibold">Kartik Classes 01</div>
                    <div className="text-sm text-gray-500">Institute Owner: Kartik</div>
                    <div className="text-sm text-gray-500">Location: Patna</div>
                  </div>
                </div>
                <div className="mt-4">
                  <button onClick={() => setShowAnnouncementForm((s) => !s)} className="w-full bg-blue-600 text-white py-2 rounded">{showAnnouncementForm ? 'Cancel' : 'Add Announcement'}</button>
                </div>
                {showAnnouncementForm && (
                  <div className="mt-3">
                    <form onSubmit={addAnnouncement} className="space-y-2">
                      <textarea value={announcementText} onChange={(e)=>setAnnouncementText(e.target.value)} placeholder="Write announcement..." className="w-full p-2 border rounded" />
                      <div className="flex space-x-2">
                        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">Add</button>
                        <button type="button" onClick={()=>setShowAnnouncementForm(false)} className="px-3 py-1 rounded border">Cancel</button>
                      </div>
                    </form>
                  </div>
                )}
                {announcements.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-semibold">Announcements</h4>
                    <ul className="text-sm text-gray-700">
                      {announcements.map((a, i) => (
                        <li key={i} className="border-b pb-1">{a.text} <div className="text-xs text-gray-400">{new Date(a.createdAt).toLocaleString()}</div></li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>

              <Card>
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li onClick={() => navigate('/fees')} className="hover:text-blue-600 cursor-pointer">💳 Payments</li>
                  <li onClick={() => navigate('/events')} className="hover:text-blue-600 cursor-pointer">📅 Timetable</li>
                  <li onClick={() => setShowAnnouncementForm(true)} className="hover:text-blue-600 cursor-pointer">👥 Teachers</li>
                  <li onClick={() => setShowAnnouncementForm(true)} className="hover:text-blue-600 cursor-pointer">⚙️ Settings</li>
                </ul>
              </Card>
            </div>

            {/* Main feed */}
            <div className="col-span-12 lg:col-span-6">
              <Card className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Overview</h2>
                <p className="text-sm text-gray-600">Welcome back! Here's what's happening in your institute.</p>
              </Card>

              <div className="space-y-4">
                {upcoming.map((c) => (
                  <Card key={c.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-lg font-semibold">{c.title}</div>
                        <div className="text-sm text-gray-500">Teacher: {c.teacher}</div>
                        <div className="text-sm text-gray-500">Timing: {c.timing}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Seats: {c.seats}</div>
                        <div className="text-sm font-semibold">{c.fee}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right column: batches & students */}
            <div className="col-span-12 lg:col-span-3">
              <div className="space-y-4">
                <Card>
                  <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Batches</h3>
                      <button onClick={() => setShowBatchForm(true)} className="text-blue-600 text-sm">+ New</button>
                    </div>
                  <div className="mt-3">
                    <BatchList onSelectBatch={setSelectedBatch} />
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-2">Students</h3>
                  {selectedBatch ? (
                    <StudentList batch={selectedBatch} />
                  ) : (
                    <p className="text-sm text-gray-500">Select a batch to view students</p>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
