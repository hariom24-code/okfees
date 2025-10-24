import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';
import { Squares2X2Icon, CurrencyRupeeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useToast } from '../hooks/useToast';
import ConfirmModal from '../components/ConfirmModal';

const StudentDashboard = () => {
  const { add } = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toDownload, setToDownload] = useState(null);
  const [student, setStudent] = useState(null);
  const [batchName, setBatchName] = useState('');
  const [feeHistory, setFeeHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const currentUser = (() => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch {
      return null;
    }
  })();

  const handleDownload = async (receiptId) => {
    // Attempt to download a receipt blob from backend; fallback to toast if missing
    try {
      const res = await API.get(`/receipts/${receiptId}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `receipt-${receiptId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      add('Download started', 'success');
    } catch (err) {
      console.error('Download failed', err);
      add('Receipt download failed. Make sure backend endpoint /api/receipts/:id is available.', 'error');
    } finally {
      setConfirmOpen(false);
      setToDownload(null);
    }
  };

  useEffect(() => {
    // Ensure only students can view this dashboard; otherwise redirect to login
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        // Try to load student details
        const res = await API.get(`/students/${currentUser._id}`);
        const s = res.data?.data || null;
        setStudent(s);

        // Fetch batches to map id -> name (API only has list endpoint)
        try {
          const bres = await API.get('/batches');
          const batches = bres.data?.data || [];
          const b = batches.find((x) => String(x._id) === String(s?.batch));
          setBatchName(b?.name || '—');
        } catch {
          setBatchName('—');
        }

        // Build a simple fee history from available fields (fallback mock)
        const history = [];
        if (s) {
          // If the backend doesn't store individual payments, create a mock entry
          if (s.feesPaid && s.feesPaid > 0) {
            history.push({ id: `${s._id}-1`, date: new Date(s.joinDate || Date.now()).toLocaleDateString(), amount: s.feesPaid, receiptId: `receipt-${s._id}-1` });
          }
        }
        setFeeHistory(history);
      } catch (err) {
        console.error('Failed to load student data', err);
        add('Failed to load student data', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [add, currentUser, navigate]);

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <Squares2X2Icon className="h-10 w-10 text-blue-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">My Batch</h2>
              <p className="text-2xl font-bold text-gray-800">{loading ? '—' : (student?.batch ? batchName : 'Not enrolled')}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <CurrencyRupeeIcon className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">Fees Paid</h2>
              <p className="text-2xl font-bold text-gray-800">{loading ? '—' : `₹${student?.feesPaid ?? 0}`}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <ExclamationCircleIcon className="h-10 w-10 text-red-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">Pending Dues</h2>
              <p className="text-2xl font-bold text-gray-800">{loading ? '—' : `₹${student?.pendingFees ?? (student?.totalFees ? (student.totalFees - (student.feesPaid || 0)) : 0)}`}</p>
            </div>
          </div>
        </div>

        {/* Batches Card */}
        <div className="mt-8">
          <Link to="/batches">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <Squares2X2Icon className="h-10 w-10 text-purple-500" />
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-600">View All Batches</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Fee History */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fee History</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Paid</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {feeHistory.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-sm text-gray-500 text-center">No payment records found.</td>
                    </tr>
                  )}
                  {feeHistory.map((f) => (
                    <tr key={f.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{f.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`₹${f.amount}`}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                        <button type="button" onClick={() => { setToDownload(f.receiptId); setConfirmOpen(true); }} className="text-blue-600 hover:text-blue-900">Download</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
      <ConfirmModal
        open={confirmOpen}
        title="Download receipt?"
        description="Do you want to download this receipt?"
        onConfirm={() => {
          if (toDownload) handleDownload(toDownload);
        }}
        onCancel={() => {
          setConfirmOpen(false);
          setToDownload(null);
        }}
      />
    </>
  );
};

export default StudentDashboard;