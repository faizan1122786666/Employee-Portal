// // Mock Leave Data
// const mockLeaveData = [
//   {
//     id: 1,
//     employeeId: 1,
//     employeeName: "Ali Hamza",
//     email: "alihamza@gmail.com",
//     leaveType: "Sick Leave",
//     startDate: "2026-02-10",
//     endDate: "2026-02-12",
//     days: 3,
//     reason: "Medical treatment required for fever and flu symptoms.",
//     status: "Pending",
//     appliedDate: "2026-02-03",
//     adminComment: ""
//   },
//   {
//     id: 2,
//     employeeId: 1,
//     employeeName: "Ali Hamza",
//     email: "alihamza@gmail.com",
//     leaveType: "Annual Leave",
//     startDate: "2026-01-15",
//     endDate: "2026-01-17",
//     days: 3,
//     reason: "Family vacation planned.",
//     status: "Approved",
//     appliedDate: "2026-01-05",
//     adminComment: "Approved. Enjoy your vacation!"
//   },
//   {
//     id: 3,
//     employeeId: 2,
//     employeeName: "Ali Zain",
//     email: "alizain@gmail.com",
//     leaveType: "Personal Leave",
//     startDate: "2026-02-05",
//     endDate: "2026-02-05",
//     days: 1,
//     reason: "Personal errands to attend.",
//     status: "Pending",
//     appliedDate: "2026-02-01",
//     adminComment: ""
//   },
//   {
//     id: 4,
//     employeeId: 3,
//     employeeName: "Khubaib",
//     email: "khubaibhamza@gmail.com",
//     leaveType: "Sick Leave",
//     startDate: "2026-01-20",
//     endDate: "2026-01-21",
//     days: 2,
//     reason: "Doctor appointment and recovery.",
//     status: "Rejected",
//     appliedDate: "2026-01-18",
//     adminComment: "Please reschedule after project deadline."
//   },
//   {
//     id: 5,
//     employeeId: 4,
//     employeeName: "Shazain",
//     email: "shazain@gmail.com",
//     leaveType: "Emergency Leave",
//     startDate: "2026-01-28",
//     endDate: "2026-01-28",
//     days: 1,
//     reason: "Family emergency.",
//     status: "Approved",
//     appliedDate: "2026-01-28",
//     adminComment: "Hope everything is okay."
//   }
// ];

// // Helper function to get leave requests by employee ID
// export const getEmployeeLeaves = (employeeId) => {
//   return mockLeaveData.filter(leave => leave.employeeId === employeeId);
// };

// // Helper function to get all pending leaves (for admin)
// export const getPendingLeaves = () => {
//   return mockLeaveData.filter(leave => leave.status === "Pending");
// };

// // Helper function to get all leaves (for admin)
// export const getAllLeaves = () => {
//   return mockLeaveData;
// };

// // Leave type options
// export const leaveTypes = [
//   { value: "Sick Leave", label: "Sick Leave" },
//   { value: "Annual Leave", label: "Annual Leave" },
//   { value: "Personal Leave", label: "Personal Leave" },
//   { value: "Emergency Leave", label: "Emergency Leave" },
//   { value: "Maternity Leave", label: "Maternity Leave" },
//   { value: "Paternity Leave", label: "Paternity Leave" }
// ];

// export default mockLeaveData;










import { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customModalStyles = {
  content: {
    inset: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '16px',
    padding: '0',
    width: '94%',
    maxWidth: '560px',
    maxHeight: '92vh',
    overflowY: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(44, 82, 132, 0.75)',
    zIndex: 50,
  },
};

// Mock data
const mockLeaveData = [
  {
    id: 1,
    employeeId: 1,
    leaveType: 'Sick Leave',
    startDate: '2026-02-10',
    endDate: '2026-02-12',
    days: 3,
    reason: 'Medical treatment required for fever and flu symptoms.',
    status: 'Pending',
    appliedDate: '2026-02-03',
  },
  {
    id: 2,
    employeeId: 1,
    leaveType: 'Annual Leave',
    startDate: '2026-01-15',
    endDate: '2026-01-17',
    days: 3,
    reason: 'Family vacation planned.',
    status: 'Approved',
    appliedDate: '2026-01-05',
  },
];

const getEmployeeLeaves = (id) =>
  mockLeaveData.filter((l) => l.employeeId === id);

function UserLeave() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [daysRequested, setDaysRequested] = useState(0);
  const [submitMessage, setSubmitMessage] = useState(null);

  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const leaveRequests = getEmployeeLeaves(1);

  useEffect(() => {
    if (!formData.startDate || !formData.endDate) return setDaysRequested(0);
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    if (end < start) return setDaysRequested(0);
    setDaysRequested(
      Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1
    );
  }, [formData.startDate, formData.endDate]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage({ type: 'success', text: 'Leave request submitted!' });
    setTimeout(() => {
      setModalIsOpen(false);
      setSubmitMessage(null);
      setFormData({ leaveType: '', startDate: '', endDate: '', reason: '' });
    }, 1500);
  };

  const statusClass = (s) =>
    s === 'Approved'
      ? 'bg-green-100 text-green-700'
      : s === 'Pending'
      ? 'bg-yellow-100 text-yellow-700'
      : 'bg-red-100 text-red-700';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-[#2C5284]">
            My Leave Requests
          </h1>
          <button
            onClick={() => setModalIsOpen(true)}
            className="bg-[#2C5284] text-white px-5 py-2.5 rounded-lg hover:bg-[#1e3a5f]"
          >
            Apply for Leave
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-xl shadow border">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                {['Type', 'Start', 'End', 'Days', 'Reason', 'Status'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((r) => (
                <tr key={r.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{r.leaveType}</td>
                  <td className="px-4 py-3">{r.startDate}</td>
                  <td className="px-4 py-3">{r.endDate}</td>
                  <td className="px-4 py-3 font-semibold">{r.days}</td>
                  <td className="px-4 py-3 max-w-xs truncate">
                    {r.reason}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${statusClass(
                        r.status
                      )}`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          {leaveRequests.map((r) => (
            <div
              key={r.id}
              className="bg-white p-4 rounded-xl shadow border"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{r.leaveType}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${statusClass(
                    r.status
                  )}`}
                >
                  {r.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {r.startDate} → {r.endDate}
              </p>
              <p className="text-sm mt-2">{r.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customModalStyles}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#2C5284] mb-4">
            Apply for Leave
          </h2>

          {submitMessage && (
            <div className="mb-4 text-center bg-green-100 text-green-700 p-3 rounded-lg">
              {submitMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Select Leave Type</option>
              <option>Sick Leave</option>
              <option>Annual Leave</option>
              <option>Personal Leave</option>
            </select>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="date" name="startDate" onChange={handleChange} required className="p-3 border rounded-lg" />
              <input type="date" name="endDate" onChange={handleChange} required className="p-3 border rounded-lg" />
            </div>

            {daysRequested > 0 && (
              <p className="text-sm font-medium text-[#2C5284]">
                Days Requested: {daysRequested}
              </p>
            )}

            <textarea
              name="reason"
              rows="3"
              onChange={handleChange}
              placeholder="Reason"
              className="w-full p-3 border rounded-lg"
              required
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setModalIsOpen(false)}
                className="flex-1 border p-3 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#2C5284] text-white p-3 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default UserLeave;
