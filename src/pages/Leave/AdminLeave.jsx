// // // // import React from 'react'
// // // // import { useEffect } from 'react';

// // // // function AdminLeave({setTitle}) {
// // // //   useEffect ( () => {
// // // //   setTitle('Leave Page');
// // // //   },[setTitle])

// // // //   return (
// // // //     <div>
// // // //       Admin Leave
// // // //     </div>
// // // //   )
// // // // }

// // // // export default AdminLeave









// // // // import { useEffect } from "react";

// // // // function AdminLeave({ setTitle }) {
// // // //   useEffect(() => {
// // // //     setTitle("Admin Leave");
// // // //   }, [setTitle]);

// // // //   return (
// // // //     <div className="p-4">
// // // //       <h1 className="text-2xl font-semibold mb-4">Admin Leave Page</h1>
// // // //       <p>Here admin can manage all employee leaves.</p>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default AdminLeave;










// // // import { useEffect, useState } from 'react';
// // // import Select from 'react-select';
// // // import { FaEye, FaCheck, FaTimes, FaFilter } from 'react-icons/fa';
// // // import LeaveDetailModal from './LeaveDetailModal';

// // // // Mock data for leave requests
// // // const mockLeaveData = [
// // //   {
// // //     id: 1,
// // //     employeeId: 1,
// // //     employeeName: "Ali Hamza",
// // //     email: "alihamza@gmail.com",
// // //     leaveType: "Sick Leave",
// // //     startDate: "2026-02-10",
// // //     endDate: "2026-02-12",
// // //     days: 3,
// // //     reason: "Medical treatment required for fever and flu symptoms.",
// // //     status: "Pending",
// // //     appliedDate: "2026-02-03",
// // //     adminComment: ""
// // //   },
// // //   {
// // //     id: 2,
// // //     employeeId: 1,
// // //     employeeName: "Ali Hamza",
// // //     email: "alihamza@gmail.com",
// // //     leaveType: "Annual Leave",
// // //     startDate: "2026-01-15",
// // //     endDate: "2026-01-17",
// // //     days: 3,
// // //     reason: "Family vacation planned.",
// // //     status: "Approved",
// // //     appliedDate: "2026-01-05",
// // //     adminComment: "Approved. Enjoy your vacation!"
// // //   },
// // //   {
// // //     id: 3,
// // //     employeeId: 2,
// // //     employeeName: "Ali Zain",
// // //     email: "alizain@gmail.com",
// // //     leaveType: "Personal Leave",
// // //     startDate: "2026-02-05",
// // //     endDate: "2026-02-05",
// // //     days: 1,
// // //     reason: "Personal errands to attend.",
// // //     status: "Pending",
// // //     appliedDate: "2026-02-01",
// // //     adminComment: ""
// // //   },
// // //   {
// // //     id: 4,
// // //     employeeId: 3,
// // //     employeeName: "Khubaib",
// // //     email: "khubaibhamza@gmail.com",
// // //     leaveType: "Sick Leave",
// // //     startDate: "2026-01-20",
// // //     endDate: "2026-01-21",
// // //     days: 2,
// // //     reason: "Doctor appointment and recovery.",
// // //     status: "Rejected",
// // //     appliedDate: "2026-01-18",
// // //     adminComment: "Please reschedule after project deadline."
// // //   },
// // //   {
// // //     id: 5,
// // //     employeeId: 4,
// // //     employeeName: "Shazain",
// // //     email: "shazain@gmail.com",
// // //     leaveType: "Emergency Leave",
// // //     startDate: "2026-01-28",
// // //     endDate: "2026-01-28",
// // //     days: 1,
// // //     reason: "Family emergency.",
// // //     status: "Approved",
// // //     appliedDate: "2026-01-28",
// // //     adminComment: "Hope everything is okay."
// // //   }
// // // ];

// // // function AdminLeave({ setTitle }) {
// // //   const [leaves, setLeaves] = useState([]);
// // //   const [filteredLeaves, setFilteredLeaves] = useState([]);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [statusFilter, setStatusFilter] = useState(null);
// // //   const [selectedLeave, setSelectedLeave] = useState(null);
// // //   const [showModal, setShowModal] = useState(false);

// // //   // Pagination
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const ITEMS_PER_PAGE = 10;

// // //   useEffect(() => {
// // //     setTitle('Leave Management');
// // //     setLeaves(mockLeaveData);
// // //     setFilteredLeaves(mockLeaveData);
// // //   }, [setTitle]);

// // //   // Filter leaves based on search and status
// // //   useEffect(() => {
// // //     let filtered = [...leaves];

// // //     // Search filter
// // //     if (searchTerm) {
// // //       filtered = filtered.filter(
// // //         (leave) =>
// // //           leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //           leave.email.toLowerCase().includes(searchTerm.toLowerCase())
// // //       );
// // //     }

// // //     // Status filter
// // //     if (statusFilter) {
// // //       filtered = filtered.filter((leave) => leave.status === statusFilter.value);
// // //     }

// // //     setFilteredLeaves(filtered);
// // //     setCurrentPage(1);
// // //   }, [searchTerm, statusFilter, leaves]);

// // //   // Status options for dropdown
// // //   const statusOptions = [
// // //     { value: 'Pending', label: 'Pending' },
// // //     { value: 'Approved', label: 'Approved' },
// // //     { value: 'Rejected', label: 'Rejected' },
// // //   ];

// // //   // Handle status change
// // //   const handleStatusChange = (leaveId, newStatus, adminComment = '') => {
// // //     const updatedLeaves = leaves.map((leave) =>
// // //       leave.id === leaveId
// // //         ? { ...leave, status: newStatus, adminComment }
// // //         : leave
// // //     );
// // //     setLeaves(updatedLeaves);
// // //     setShowModal(false);
// // //   };

// // //   // Quick approve/reject
// // //   const quickAction = (leaveId, action) => {
// // //     const comment = action === 'Approved' 
// // //       ? 'Leave approved by admin' 
// // //       : 'Leave rejected by admin';
// // //     handleStatusChange(leaveId, action, comment);
// // //   };

// // //   // Get status badge color
// // //   const getStatusColor = (status) => {
// // //     switch (status) {
// // //       case 'Approved':
// // //         return 'bg-green-100 text-green-800';
// // //       case 'Rejected':
// // //         return 'bg-red-100 text-red-800';
// // //       case 'Pending':
// // //         return 'bg-yellow-100 text-yellow-800';
// // //       default:
// // //         return 'bg-gray-100 text-gray-800';
// // //     }
// // //   };

// // //   // Pagination
// // //   const totalPages = Math.ceil(filteredLeaves.length / ITEMS_PER_PAGE);
// // //   const paginatedLeaves = filteredLeaves.slice(
// // //     (currentPage - 1) * ITEMS_PER_PAGE,
// // //     currentPage * ITEMS_PER_PAGE
// // //   );

// // //   // View details
// // //   const viewDetails = (leave) => {
// // //     setSelectedLeave(leave);
// // //     setShowModal(true);
// // //   };

// // //   // Get statistics
// // //   const stats = {
// // //     total: leaves.length,
// // //     pending: leaves.filter(l => l.status === 'Pending').length,
// // //     approved: leaves.filter(l => l.status === 'Approved').length,
// // //     rejected: leaves.filter(l => l.status === 'Rejected').length,
// // //   };

// // //   return (
// // //     <div className="min-h-screen p-4 sm:p-6 lg:p-8">
// // //       {/* Header */}
// // //       <div className="mb-6">
// // //         <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
// // //           Leave Management
// // //         </h1>
// // //         <p className="text-gray-600 mt-1">Manage employee leave requests</p>
// // //       </div>

// // //       {/* Statistics Cards */}
// // //       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // //         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
// // //           <p className="text-sm text-gray-600">Total Requests</p>
// // //           <p className="text-2xl font-bold text-[#2C5284]">{stats.total}</p>
// // //         </div>
// // //         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500">
// // //           <p className="text-sm text-gray-600">Pending</p>
// // //           <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
// // //         </div>
// // //         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
// // //           <p className="text-sm text-gray-600">Approved</p>
// // //           <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
// // //         </div>
// // //         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-500">
// // //           <p className="text-sm text-gray-600">Rejected</p>
// // //           <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
// // //         </div>
// // //       </div>

// // //       {/* Filters Section */}
// // //       <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
// // //         <div className="flex items-center gap-2 mb-4">
// // //           <FaFilter className="text-[#2C5284]" />
// // //           <h3 className="font-semibold text-[#2C5284]">Filter Requests</h3>
// // //         </div>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           {/* Search */}
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //               Search Employee
// // //             </label>
// // //             <input
// // //               type="text"
// // //               placeholder="Search by name or email..."
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
// // //                 focus:ring-2 focus:ring-[#365F8D] focus:border-transparent 
// // //                 outline-none transition-all"
// // //             />
// // //           </div>

// // //           {/* Status Filter */}
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //               Filter by Status
// // //             </label>
// // //             <Select
// // //               value={statusFilter}
// // //               onChange={setStatusFilter}
// // //               options={statusOptions}
// // //               isClearable
// // //               placeholder="All Statuses"
// // //               className="react-select-container"
// // //               classNamePrefix="react-select"
// // //               styles={{
// // //                 control: (base) => ({
// // //                   ...base,
// // //                   borderColor: '#d1d5db',
// // //                   '&:hover': { borderColor: '#365F8D' },
// // //                 }),
// // //                 option: (base, state) => ({
// // //                   ...base,
// // //                   backgroundColor: state.isSelected
// // //                     ? '#365F8D'
// // //                     : state.isFocused
// // //                     ? '#f3f4f6'
// // //                     : 'white',
// // //                   color: state.isSelected ? 'white' : '#1f2937',
// // //                 }),
// // //               }}
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="mt-4 text-sm text-gray-600">
// // //           Showing{' '}
// // //           <span className="font-semibold text-gray-900">
// // //             {filteredLeaves.length}
// // //           </span>{' '}
// // //           leave request(s)
// // //         </div>
// // //       </div>

// // //       {/* Desktop Table View */}
// // //       <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full divide-y divide-gray-200">
// // //             <thead className="bg-[#365F8D]">
// // //               <tr>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Employee
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Leave Type
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Duration
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Applied Date
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Status
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Actions
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="bg-white divide-y divide-gray-200">
// // //               {paginatedLeaves.length > 0 ? (
// // //                 paginatedLeaves.map((leave) => (
// // //                   <tr
// // //                     key={leave.id}
// // //                     className="hover:bg-gray-50 transition-colors"
// // //                   >
// // //                     <td className="px-6 py-4 whitespace-nowrap">
// // //                       <div className="text-sm font-medium text-gray-900">
// // //                         {leave.employeeName}
// // //                       </div>
// // //                       <div className="text-sm text-gray-500">{leave.email}</div>
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // //                       {leave.leaveType}
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap">
// // //                       <div className="text-sm text-gray-900">
// // //                         {leave.startDate} to {leave.endDate}
// // //                       </div>
// // //                       <div className="text-sm text-gray-500">
// // //                         {leave.days} day(s)
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // //                       {leave.appliedDate}
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap">
// // //                       <span
// // //                         className={`px-3 py-1 inline-flex text-xs leading-5 
// // //                           font-semibold rounded-full ${getStatusColor(
// // //                             leave.status
// // //                           )}`}
// // //                       >
// // //                         {leave.status}
// // //                       </span>
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm">
// // //                       <div className="flex items-center gap-2">
// // //                         <button
// // //                           onClick={() => viewDetails(leave)}
// // //                           className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg 
// // //                             transition-colors"
// // //                           title="View Details"
// // //                         >
// // //                           <FaEye size={18} />
// // //                         </button>
// // //                         {leave.status === 'Pending' && (
// // //                           <>
// // //                             <button
// // //                               onClick={() => quickAction(leave.id, 'Approved')}
// // //                               className="p-2 text-green-600 hover:bg-green-50 
// // //                                 rounded-lg transition-colors"
// // //                               title="Approve"
// // //                             >
// // //                               <FaCheck size={18} />
// // //                             </button>
// // //                             <button
// // //                               onClick={() => quickAction(leave.id, 'Rejected')}
// // //                               className="p-2 text-red-600 hover:bg-red-50 
// // //                                 rounded-lg transition-colors"
// // //                               title="Reject"
// // //                             >
// // //                               <FaTimes size={18} />
// // //                             </button>
// // //                           </>
// // //                         )}
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 ))
// // //               ) : (
// // //                 <tr>
// // //                   <td colSpan={6} className="px-6 py-12 text-center">
// // //                     <div className="flex flex-col items-center">
// // //                       <p className="font-medium text-gray-900 mb-1">
// // //                         No leave requests found
// // //                       </p>
// // //                       <p className="text-gray-500 text-sm">
// // //                         {searchTerm || statusFilter
// // //                           ? 'Try adjusting your filters'
// // //                           : 'No leave requests available'}
// // //                       </p>
// // //                     </div>
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>

// // //       {/* Mobile/Tablet Card View */}
// // //       <div className="space-y-4 lg:hidden">
// // //         {paginatedLeaves.length > 0 ? (
// // //           paginatedLeaves.map((leave) => (
// // //             <div
// // //               key={leave.id}
// // //               className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md 
// // //                 transition-shadow"
// // //             >
// // //               <div className="flex justify-between items-start mb-3">
// // //                 <div className="flex-1">
// // //                   <h3 className="text-base font-semibold text-gray-900">
// // //                     {leave.employeeName}
// // //                   </h3>
// // //                   <p className="text-sm text-gray-600">{leave.email}</p>
// // //                 </div>
// // //                 <span
// // //                   className={`px-3 py-1 text-xs font-semibold rounded-full 
// // //                     ${getStatusColor(leave.status)}`}
// // //                 >
// // //                   {leave.status}
// // //                 </span>
// // //               </div>

// // //               <div className="space-y-2 mb-4">
// // //                 <div className="flex justify-between text-sm">
// // //                   <span className="text-gray-600">Leave Type:</span>
// // //                   <span className="font-medium text-gray-900">
// // //                     {leave.leaveType}
// // //                   </span>
// // //                 </div>
// // //                 <div className="flex justify-between text-sm">
// // //                   <span className="text-gray-600">Duration:</span>
// // //                   <span className="font-medium text-gray-900">
// // //                     {leave.days} day(s)
// // //                   </span>
// // //                 </div>
// // //                 <div className="flex justify-between text-sm">
// // //                   <span className="text-gray-600">Dates:</span>
// // //                   <span className="font-medium text-gray-900 text-right">
// // //                     {leave.startDate} to {leave.endDate}
// // //                   </span>
// // //                 </div>
// // //                 <div className="flex justify-between text-sm">
// // //                   <span className="text-gray-600">Applied:</span>
// // //                   <span className="font-medium text-gray-900">
// // //                     {leave.appliedDate}
// // //                   </span>
// // //                 </div>
// // //               </div>

// // //               <div className="flex gap-2 pt-3 border-t border-gray-200">
// // //                 <button
// // //                   onClick={() => viewDetails(leave)}
// // //                   className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 
// // //                     rounded-lg font-medium hover:bg-blue-100 transition-colors 
// // //                     flex items-center justify-center gap-2"
// // //                 >
// // //                   <FaEye size={16} />
// // //                   View
// // //                 </button>
// // //                 {leave.status === 'Pending' && (
// // //                   <>
// // //                     <button
// // //                       onClick={() => quickAction(leave.id, 'Approved')}
// // //                       className="px-4 py-2 bg-green-50 text-green-600 rounded-lg 
// // //                         hover:bg-green-100 transition-colors"
// // //                       title="Approve"
// // //                     >
// // //                       <FaCheck size={16} />
// // //                     </button>
// // //                     <button
// // //                       onClick={() => quickAction(leave.id, 'Rejected')}
// // //                       className="px-4 py-2 bg-red-50 text-red-600 rounded-lg 
// // //                         hover:bg-red-100 transition-colors"
// // //                       title="Reject"
// // //                     >
// // //                       <FaTimes size={16} />
// // //                     </button>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <div className="bg-white rounded-xl shadow-sm p-8 text-center">
// // //             <p className="font-medium text-gray-900 mb-2">
// // //               No leave requests found
// // //             </p>
// // //             <p className="text-gray-500 text-sm">
// // //               {searchTerm || statusFilter
// // //                 ? 'Try adjusting your filters'
// // //                 : 'No leave requests available'}
// // //             </p>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Pagination */}
// // //       {totalPages > 1 && (
// // //         <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
// // //           <button
// // //             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
// // //             disabled={currentPage === 1}
// // //             className="px-3 py-2 rounded-md border text-sm font-medium
// // //               disabled:opacity-50 disabled:cursor-not-allowed
// // //               hover:bg-[#2C5284] hover:text-white transition-colors"
// // //           >
// // //             Prev
// // //           </button>

// // //           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
// // //             <button
// // //               key={page}
// // //               onClick={() => setCurrentPage(page)}
// // //               className={`px-3 py-2 rounded-md border text-sm font-medium
// // //                 transition-colors ${
// // //                   currentPage === page
// // //                     ? 'bg-[#2C5284] text-white border-[#2C5284]'
// // //                     : 'hover:bg-gray-100'
// // //                 }`}
// // //             >
// // //               {page}
// // //             </button>
// // //           ))}

// // //           <button
// // //             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
// // //             disabled={currentPage === totalPages}
// // //             className="px-3 py-2 rounded-md border text-sm font-medium
// // //               disabled:opacity-50 disabled:cursor-not-allowed
// // //               hover:bg-[#2C5284] hover:text-white transition-colors"
// // //           >
// // //             Next
// // //           </button>
// // //         </div>
// // //       )}

// // //       {/* Leave Detail Modal */}
// // //       {showModal && selectedLeave && (
// // //         <LeaveDetailModal
// // //           leave={selectedLeave}
// // //           onClose={() => setShowModal(false)}
// // //           onStatusChange={handleStatusChange}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default AdminLeave;













// // // // import { useEffect, useState } from 'react';
// // // // import Select from 'react-select';
// // // // import mockLeaveData from '../../data/mockLeaveData';
// // // // import { FaEye, FaCheck, FaTimes } from 'react-icons/fa';
// // // // import LeaveDetailModal from './LeaveDetailModal';

// // // // function AdminLeave({ setTitle }) {
// // // //   const [leaves, setLeaves] = useState([]);
// // // //   const [filteredLeaves, setFilteredLeaves] = useState([]);
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [statusFilter, setStatusFilter] = useState(null);
// // // //   const [selectedLeave, setSelectedLeave] = useState(null);
// // // //   const [showModal, setShowModal] = useState(false);

// // // //   // Pagination
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const ITEMS_PER_PAGE = 10;

// // // //   useEffect(() => {
// // // //     setTitle('Leave Management');
// // // //     setLeaves(mockLeaveData);
// // // //     setFilteredLeaves(mockLeaveData);
// // // //   }, [setTitle]);

// // // //   // Filter leaves based on search and status
// // // //   useEffect(() => {
// // // //     let filtered = [...leaves];

// // // //     // Search filter
// // // //     if (searchTerm) {
// // // //       filtered = filtered.filter(
// // // //         (leave) =>
// // // //           leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //           leave.email.toLowerCase().includes(searchTerm.toLowerCase())
// // // //       );
// // // //     }

// // // //     // Status filter
// // // //     if (statusFilter) {
// // // //       filtered = filtered.filter((leave) => leave.status === statusFilter.value);
// // // //     }

// // // //     setFilteredLeaves(filtered);
// // // //     setCurrentPage(1); // Reset to first page when filtering
// // // //   }, [searchTerm, statusFilter, leaves]);

// // // //   // Status options for dropdown
// // // //   const statusOptions = [
// // // //     { value: 'Pending', label: 'Pending' },
// // // //     { value: 'Approved', label: 'Approved' },
// // // //     { value: 'Rejected', label: 'Rejected' },
// // // //   ];

// // // //   // Handle status change
// // // //   const handleStatusChange = (leaveId, newStatus, adminComment = '') => {
// // // //     const updatedLeaves = leaves.map((leave) =>
// // // //       leave.id === leaveId
// // // //         ? { ...leave, status: newStatus, adminComment }
// // // //         : leave
// // // //     );
// // // //     setLeaves(updatedLeaves);
// // // //     setShowModal(false);
// // // //   };

// // // //   // Quick approve/reject
// // // //   const quickAction = (leaveId, action) => {
// // // //     const comment = action === 'Approved' 
// // // //       ? 'Leave approved by admin' 
// // // //       : 'Leave rejected by admin';
// // // //     handleStatusChange(leaveId, action, comment);
// // // //   };

// // // //   // Get status badge color
// // // //   const getStatusColor = (status) => {
// // // //     switch (status) {
// // // //       case 'Approved':
// // // //         return 'bg-green-100 text-green-800';
// // // //       case 'Rejected':
// // // //         return 'bg-red-100 text-red-800';
// // // //       case 'Pending':
// // // //         return 'bg-yellow-100 text-yellow-800';
// // // //       default:
// // // //         return 'bg-gray-100 text-gray-800';
// // // //     }
// // // //   };

// // // //   // Pagination
// // // //   const totalPages = Math.ceil(filteredLeaves.length / ITEMS_PER_PAGE);
// // // //   const paginatedLeaves = filteredLeaves.slice(
// // // //     (currentPage - 1) * ITEMS_PER_PAGE,
// // // //     currentPage * ITEMS_PER_PAGE
// // // //   );

// // // //   // View details
// // // //   const viewDetails = (leave) => {
// // // //     setSelectedLeave(leave);
// // // //     setShowModal(true);
// // // //   };

// // // //   return (
// // // //     <div className="max-h-screen p-4 sm:p-6 lg:p-8">
// // // //       <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284] mb-6">
// // // //         Leave Management
// // // //       </h1>

// // // //       {/* Filters Section */}
// // // //       <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //           {/* Search */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //               Search Employee
// // // //             </label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search by name or email..."
// // // //               value={searchTerm}
// // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // //               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
// // // //                 focus:ring-2 focus:ring-[#365F8D] focus:border-transparent 
// // // //                 outline-none transition-all"
// // // //             />
// // // //           </div>

// // // //           {/* Status Filter */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //               Filter by Status
// // // //             </label>
// // // //             <Select
// // // //               value={statusFilter}
// // // //               onChange={setStatusFilter}
// // // //               options={statusOptions}
// // // //               isClearable
// // // //               placeholder="All Statuses"
// // // //               className="react-select-container"
// // // //               classNamePrefix="react-select"
// // // //               styles={{
// // // //                 control: (base) => ({
// // // //                   ...base,
// // // //                   borderColor: '#d1d5db',
// // // //                   '&:hover': { borderColor: '#365F8D' },
// // // //                 }),
// // // //                 option: (base, state) => ({
// // // //                   ...base,
// // // //                   backgroundColor: state.isSelected
// // // //                     ? '#365F8D'
// // // //                     : state.isFocused
// // // //                     ? '#f3f4f6'
// // // //                     : 'white',
// // // //                   color: state.isSelected ? 'white' : '#1f2937',
// // // //                 }),
// // // //               }}
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <div className="mt-4 text-sm text-gray-600">
// // // //           Showing{' '}
// // // //           <span className="font-semibold text-gray-900">
// // // //             {filteredLeaves.length}
// // // //           </span>{' '}
// // // //           leave request(s)
// // // //         </div>
// // // //       </div>

// // // //       {/* Desktop Table View */}
// // // //       <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
// // // //         <div className="overflow-x-auto">
// // // //           <table className="min-w-full divide-y divide-gray-200">
// // // //             <thead className="bg-[#365F8D]">
// // // //               <tr>
// // // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // // //                   Employee
// // // //                 </th>
// // // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // // //                   Leave Type
// // // //                 </th>
// // // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // // //                   Duration
// // // //                 </th>
// // // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // // //                   Applied Date
// // // //                 </th>
// // // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // // //                   Status
// // // //                 </th>
// // // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // // //                   Actions
// // // //                 </th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody className="bg-white divide-y divide-gray-200">
// // // //               {paginatedLeaves.length > 0 ? (
// // // //                 paginatedLeaves.map((leave) => (
// // // //                   <tr
// // // //                     key={leave.id}
// // // //                     className="hover:bg-gray-50 transition-colors"
// // // //                   >
// // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // //                       <div className="text-sm font-medium text-gray-900">
// // // //                         {leave.employeeName}
// // // //                       </div>
// // // //                       <div className="text-sm text-gray-500">{leave.email}</div>
// // // //                     </td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // // //                       {leave.leaveType}
// // // //                     </td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // //                       <div className="text-sm text-gray-900">
// // // //                         {leave.startDate} to {leave.endDate}
// // // //                       </div>
// // // //                       <div className="text-sm text-gray-500">
// // // //                         {leave.days} day(s)
// // // //                       </div>
// // // //                     </td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // // //                       {leave.appliedDate}
// // // //                     </td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // //                       <span
// // // //                         className={`px-3 py-1 inline-flex text-xs leading-5 
// // // //                           font-semibold rounded-full ${getStatusColor(
// // // //                             leave.status
// // // //                           )}`}
// // // //                       >
// // // //                         {leave.status}
// // // //                       </span>
// // // //                     </td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm">
// // // //                       <div className="flex items-center gap-2">
// // // //                         <button
// // // //                           onClick={() => viewDetails(leave)}
// // // //                           className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg 
// // // //                             transition-colors"
// // // //                           title="View Details"
// // // //                         >
// // // //                           <FaEye size={18} />
// // // //                         </button>
// // // //                         {leave.status === 'Pending' && (
// // // //                           <>
// // // //                             <button
// // // //                               onClick={() => quickAction(leave.id, 'Approved')}
// // // //                               className="p-2 text-green-600 hover:bg-green-50 
// // // //                                 rounded-lg transition-colors"
// // // //                               title="Approve"
// // // //                             >
// // // //                               <FaCheck size={18} />
// // // //                             </button>
// // // //                             <button
// // // //                               onClick={() => quickAction(leave.id, 'Rejected')}
// // // //                               className="p-2 text-red-600 hover:bg-red-50 
// // // //                                 rounded-lg transition-colors"
// // // //                               title="Reject"
// // // //                             >
// // // //                               <FaTimes size={18} />
// // // //                             </button>
// // // //                           </>
// // // //                         )}
// // // //                       </div>
// // // //                     </td>
// // // //                   </tr>
// // // //                 ))
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan={6} className="px-6 py-12 text-center">
// // // //                     <div className="flex flex-col items-center">
// // // //                       <p className="font-medium text-gray-900 mb-1">
// // // //                         No leave requests found
// // // //                       </p>
// // // //                       <p className="text-gray-500 text-sm">
// // // //                         {searchTerm || statusFilter
// // // //                           ? 'Try adjusting your filters'
// // // //                           : 'No leave requests available'}
// // // //                       </p>
// // // //                     </div>
// // // //                   </td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile/Tablet Card View */}
// // // //       <div className="space-y-4 lg:hidden">
// // // //         {paginatedLeaves.length > 0 ? (
// // // //           paginatedLeaves.map((leave) => (
// // // //             <div
// // // //               key={leave.id}
// // // //               className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md 
// // // //                 transition-shadow"
// // // //             >
// // // //               <div className="flex justify-between items-start mb-3">
// // // //                 <div>
// // // //                   <h3 className="text-base font-semibold text-gray-900">
// // // //                     {leave.employeeName}
// // // //                   </h3>
// // // //                   <p className="text-sm text-gray-600">{leave.email}</p>
// // // //                 </div>
// // // //                 <span
// // // //                   className={`px-3 py-1 text-xs font-semibold rounded-full 
// // // //                     ${getStatusColor(leave.status)}`}
// // // //                 >
// // // //                   {leave.status}
// // // //                 </span>
// // // //               </div>

// // // //               <div className="space-y-2 mb-4">
// // // //                 <div className="flex justify-between text-sm">
// // // //                   <span className="text-gray-600">Leave Type:</span>
// // // //                   <span className="font-medium text-gray-900">
// // // //                     {leave.leaveType}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div className="flex justify-between text-sm">
// // // //                   <span className="text-gray-600">Duration:</span>
// // // //                   <span className="font-medium text-gray-900">
// // // //                     {leave.days} day(s)
// // // //                   </span>
// // // //                 </div>
// // // //                 <div className="flex justify-between text-sm">
// // // //                   <span className="text-gray-600">Dates:</span>
// // // //                   <span className="font-medium text-gray-900 text-right">
// // // //                     {leave.startDate} to {leave.endDate}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div className="flex justify-between text-sm">
// // // //                   <span className="text-gray-600">Applied:</span>
// // // //                   <span className="font-medium text-gray-900">
// // // //                     {leave.appliedDate}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex gap-2 pt-3 border-t border-gray-200">
// // // //                 <button
// // // //                   onClick={() => viewDetails(leave)}
// // // //                   className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 
// // // //                     rounded-lg font-medium hover:bg-blue-100 transition-colors 
// // // //                     flex items-center justify-center gap-2"
// // // //                 >
// // // //                   <FaEye size={16} />
// // // //                   View Details
// // // //                 </button>
// // // //                 {leave.status === 'Pending' && (
// // // //                   <>
// // // //                     <button
// // // //                       onClick={() => quickAction(leave.id, 'Approved')}
// // // //                       className="px-4 py-2 bg-green-50 text-green-600 rounded-lg 
// // // //                         hover:bg-green-100 transition-colors"
// // // //                       title="Approve"
// // // //                     >
// // // //                       <FaCheck size={16} />
// // // //                     </button>
// // // //                     <button
// // // //                       onClick={() => quickAction(leave.id, 'Rejected')}
// // // //                       className="px-4 py-2 bg-red-50 text-red-600 rounded-lg 
// // // //                         hover:bg-red-100 transition-colors"
// // // //                       title="Reject"
// // // //                     >
// // // //                       <FaTimes size={16} />
// // // //                     </button>
// // // //                   </>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <div className="bg-white rounded-xl shadow-sm p-8 text-center">
// // // //             <p className="font-medium text-gray-900 mb-2">
// // // //               No leave requests found
// // // //             </p>
// // // //             <p className="text-gray-500 text-sm">
// // // //               {searchTerm || statusFilter
// // // //                 ? 'Try adjusting your filters'
// // // //                 : 'No leave requests available'}
// // // //             </p>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Pagination */}
// // // //       {totalPages > 1 && (
// // // //         <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
// // // //           <button
// // // //             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
// // // //             disabled={currentPage === 1}
// // // //             className="px-3 py-2 rounded-md border text-sm font-medium
// // // //               disabled:opacity-50 disabled:cursor-not-allowed
// // // //               hover:bg-[#2C5284] hover:text-white transition-colors"
// // // //           >
// // // //             Prev
// // // //           </button>

// // // //           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
// // // //             <button
// // // //               key={page}
// // // //               onClick={() => setCurrentPage(page)}
// // // //               className={`px-3 py-2 rounded-md border text-sm font-medium
// // // //                 transition-colors ${
// // // //                   currentPage === page
// // // //                     ? 'bg-[#2C5284] text-white border-[#2C5284]'
// // // //                     : 'hover:bg-gray-100'
// // // //                 }`}
// // // //             >
// // // //               {page}
// // // //             </button>
// // // //           ))}

// // // //           <button
// // // //             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
// // // //             disabled={currentPage === totalPages}
// // // //             className="px-3 py-2 rounded-md border text-sm font-medium
// // // //               disabled:opacity-50 disabled:cursor-not-allowed
// // // //               hover:bg-[#2C5284] hover:text-white transition-colors"
// // // //           >
// // // //             Next
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       {/* Leave Detail Modal */}
// // // //       {showModal && selectedLeave && (
// // // //         <LeaveDetailModal
// // // //           leave={selectedLeave}
// // // //           onClose={() => setShowModal(false)}
// // // //           onStatusChange={handleStatusChange}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default AdminLeave;














// // // import { useEffect, useState } from 'react';
// // // import Select from 'react-select';
// // // import { FaEye, FaCheck, FaTimes, FaSearch, FaFilter } from 'react-icons/fa';
// // // import LeaveDetailModal from './LeaveDetailModal';

// // // // Mock data for leave requests
// // // const mockLeaveData = [
// // //   {
// // //     id: 1,
// // //     employeeId: 1,
// // //     employeeName: "Ali Hamza",
// // //     email: "alihamza@gmail.com",
// // //     leaveType: "Sick Leave",
// // //     startDate: "2026-02-10",
// // //     endDate: "2026-02-12",
// // //     days: 3,
// // //     reason: "Medical treatment required for fever and flu symptoms.",
// // //     status: "Pending",
// // //     appliedDate: "2026-02-03",
// // //     adminComment: ""
// // //   },
// // //   {
// // //     id: 2,
// // //     employeeId: 1,
// // //     employeeName: "Ali Hamza",
// // //     email: "alihamza@gmail.com",
// // //     leaveType: "Annual Leave",
// // //     startDate: "2026-01-15",
// // //     endDate: "2026-01-17",
// // //     days: 3,
// // //     reason: "Family vacation planned.",
// // //     status: "Approved",
// // //     appliedDate: "2026-01-05",
// // //     adminComment: "Approved. Enjoy your vacation!"
// // //   },
// // //   {
// // //     id: 3,
// // //     employeeId: 2,
// // //     employeeName: "Ali Zain",
// // //     email: "alizain@gmail.com",
// // //     leaveType: "Personal Leave",
// // //     startDate: "2026-02-05",
// // //     endDate: "2026-02-05",
// // //     days: 1,
// // //     reason: "Personal errands to attend.",
// // //     status: "Pending",
// // //     appliedDate: "2026-02-01",
// // //     adminComment: ""
// // //   },
// // //   {
// // //     id: 4,
// // //     employeeId: 3,
// // //     employeeName: "Khubaib",
// // //     email: "khubaibhamza@gmail.com",
// // //     leaveType: "Sick Leave",
// // //     startDate: "2026-01-20",
// // //     endDate: "2026-01-21",
// // //     days: 2,
// // //     reason: "Doctor appointment and recovery.",
// // //     status: "Rejected",
// // //     appliedDate: "2026-01-18",
// // //     adminComment: "Please reschedule after project deadline."
// // //   },
// // //   {
// // //     id: 5,
// // //     employeeId: 4,
// // //     employeeName: "Shazain",
// // //     email: "shazain@gmail.com",
// // //     leaveType: "Emergency Leave",
// // //     startDate: "2026-01-28",
// // //     endDate: "2026-01-28",
// // //     days: 1,
// // //     reason: "Family emergency.",
// // //     status: "Approved",
// // //     appliedDate: "2026-01-28",
// // //     adminComment: "Hope everything is okay."
// // //   }
// // // ];

// // // function AdminLeave({ setTitle }) {
// // //   const [leaves, setLeaves] = useState(mockLeaveData);
// // //   const [filteredLeaves, setFilteredLeaves] = useState(mockLeaveData);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [statusFilter, setStatusFilter] = useState(null);
// // //   const [selectedLeave, setSelectedLeave] = useState(null);
// // //   const [showModal, setShowModal] = useState(false);

// // //   // Pagination
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const ITEMS_PER_PAGE = 10;

// // //   useEffect(() => {
// // //     setTitle('Leave Management');
// // //   }, [setTitle]);

// // //   // Filter leaves
// // //   useEffect(() => {
// // //     let filtered = [...leaves];

// // //     if (searchTerm) {
// // //       filtered = filtered.filter(
// // //         (leave) =>
// // //           leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //           leave.email.toLowerCase().includes(searchTerm.toLowerCase())
// // //       );
// // //     }

// // //     if (statusFilter) {
// // //       filtered = filtered.filter((leave) => leave.status === statusFilter.value);
// // //     }

// // //     setFilteredLeaves(filtered);
// // //     setCurrentPage(1);
// // //   }, [searchTerm, statusFilter, leaves]);

// // //   const statusOptions = [
// // //     { value: 'Pending', label: 'Pending' },
// // //     { value: 'Approved', label: 'Approved' },
// // //     { value: 'Rejected', label: 'Rejected' },
// // //   ];

// // //   const handleStatusChange = (leaveId, newStatus, adminComment = '') => {
// // //     const updatedLeaves = leaves.map((leave) =>
// // //       leave.id === leaveId
// // //         ? { ...leave, status: newStatus, adminComment }
// // //         : leave
// // //     );
// // //     setLeaves(updatedLeaves);
// // //     setShowModal(false);
// // //   };

// // //   const quickAction = (leaveId, action) => {
// // //     const comment = action === 'Approved' 
// // //       ? 'Leave approved by admin' 
// // //       : 'Leave rejected by admin';
// // //     handleStatusChange(leaveId, action, comment);
// // //   };

// // //   const getStatusColor = (status) => {
// // //     switch (status) {
// // //       case 'Approved':
// // //         return 'bg-green-100 text-green-800';
// // //       case 'Rejected':
// // //         return 'bg-red-100 text-red-800';
// // //       case 'Pending':
// // //         return 'bg-yellow-100 text-yellow-800';
// // //       default:
// // //         return 'bg-gray-100 text-gray-800';
// // //     }
// // //   };

// // //   const totalPages = Math.ceil(filteredLeaves.length / ITEMS_PER_PAGE);
// // //   const paginatedLeaves = filteredLeaves.slice(
// // //     (currentPage - 1) * ITEMS_PER_PAGE,
// // //     currentPage * ITEMS_PER_PAGE
// // //   );

// // //   const viewDetails = (leave) => {
// // //     setSelectedLeave(leave);
// // //     setShowModal(true);
// // //   };

// // //   return (
// // //     <div className="min-h-screen p-4 sm:p-6 lg:p-8">
// // //       <div className="mb-6">
// // //         <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284] mb-2">
// // //           Leave Management
// // //         </h1>
// // //         <p className="text-sm sm:text-base text-gray-600">
// // //           Review and manage employee leave requests
// // //         </p>
// // //       </div>

// // //       <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //               <FaSearch className="inline mr-2" />
// // //               Search Employee
// // //             </label>
// // //             <input
// // //               type="text"
// // //               placeholder="Search by name or email..."
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
// // //                 focus:ring-2 focus:ring-[#365F8D] focus:border-transparent 
// // //                 outline-none transition-all"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //               <FaFilter className="inline mr-2" />
// // //               Filter by Status
// // //             </label>
// // //             <Select
// // //               value={statusFilter}
// // //               onChange={setStatusFilter}
// // //               options={statusOptions}
// // //               isClearable
// // //               placeholder="All Statuses"
// // //               className="react-select-container"
// // //               classNamePrefix="react-select"
// // //               styles={{
// // //                 control: (base) => ({
// // //                   ...base,
// // //                   borderColor: '#d1d5db',
// // //                   minHeight: '42px',
// // //                   '&:hover': { borderColor: '#365F8D' },
// // //                 }),
// // //                 option: (base, state) => ({
// // //                   ...base,
// // //                   backgroundColor: state.isSelected
// // //                     ? '#365F8D'
// // //                     : state.isFocused
// // //                     ? '#f3f4f6'
// // //                     : 'white',
// // //                   color: state.isSelected ? 'white' : '#1f2937',
// // //                 }),
// // //               }}
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="mt-4 text-sm text-gray-600">
// // //           Showing{' '}
// // //           <span className="font-semibold text-gray-900">
// // //             {filteredLeaves.length}
// // //           </span>{' '}
// // //           leave request(s)
// // //         </div>
// // //       </div>

// // //       {/* Desktop Table */}
// // //       <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden mb-6">
// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full divide-y divide-gray-200">
// // //             <thead className="bg-[#365F8D]">
// // //               <tr>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Employee
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Leave Type
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Duration
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Applied Date
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Status
// // //                 </th>
// // //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// // //                   Actions
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="bg-white divide-y divide-gray-200">
// // //               {paginatedLeaves.length > 0 ? (
// // //                 paginatedLeaves.map((leave) => (
// // //                   <tr key={leave.id} className="hover:bg-gray-50 transition-colors">
// // //                     <td className="px-6 py-4 whitespace-nowrap">
// // //                       <div className="text-sm font-medium text-gray-900">
// // //                         {leave.employeeName}
// // //                       </div>
// // //                       <div className="text-sm text-gray-500">{leave.email}</div>
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // //                       {leave.leaveType}
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap">
// // //                       <div className="text-sm text-gray-900">
// // //                         {leave.startDate} to {leave.endDate}
// // //                       </div>
// // //                       <div className="text-sm text-gray-500">
// // //                         {leave.days} day(s)
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // //                       {leave.appliedDate}
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap">
// // //                       <span className={`px-3 py-1 inline-flex text-xs leading-5 
// // //                           font-semibold rounded-full ${getStatusColor(leave.status)}`}>
// // //                         {leave.status}
// // //                       </span>
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm">
// // //                       <div className="flex items-center gap-2">
// // //                         <button
// // //                           onClick={() => viewDetails(leave)}
// // //                           className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg 
// // //                             transition-colors"
// // //                           title="View Details"
// // //                         >
// // //                           <FaEye size={18} />
// // //                         </button>
// // //                         {leave.status === 'Pending' && (
// // //                           <>
// // //                             <button
// // //                               onClick={() => quickAction(leave.id, 'Approved')}
// // //                               className="p-2 text-green-600 hover:bg-green-50 
// // //                                 rounded-lg transition-colors"
// // //                               title="Approve"
// // //                             >
// // //                               <FaCheck size={18} />
// // //                             </button>
// // //                             <button
// // //                               onClick={() => quickAction(leave.id, 'Rejected')}
// // //                               className="p-2 text-red-600 hover:bg-red-50 
// // //                                 rounded-lg transition-colors"
// // //                               title="Reject"
// // //                             >
// // //                               <FaTimes size={18} />
// // //                             </button>
// // //                           </>
// // //                         )}
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 ))
// // //               ) : (
// // //                 <tr>
// // //                   <td colSpan={6} className="px-6 py-12 text-center">
// // //                     <div className="flex flex-col items-center">
// // //                       <p className="font-medium text-gray-900 mb-1">
// // //                         No leave requests found
// // //                       </p>
// // //                       <p className="text-gray-500 text-sm">
// // //                         {searchTerm || statusFilter
// // //                           ? 'Try adjusting your filters'
// // //                           : 'No leave requests available'}
// // //                       </p>
// // //                     </div>
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Card View */}
// // //       <div className="space-y-4 lg:hidden mb-6">
// // //         {paginatedLeaves.length > 0 ? (
// // //           paginatedLeaves.map((leave) => (
// // //             <div key={leave.id} className="bg-white rounded-xl shadow-sm p-4 sm:p-5 
// // //                 hover:shadow-md transition-shadow">
// // //               <div className="flex justify-between items-start mb-3">
// // //                 <div className="flex-1">
// // //                   <h3 className="text-base sm:text-lg font-semibold text-gray-900">
// // //                     {leave.employeeName}
// // //                   </h3>
// // //                   <p className="text-sm text-gray-600">{leave.email}</p>
// // //                 </div>
// // //                 <span className={`px-3 py-1 text-xs font-semibold rounded-full 
// // //                     ${getStatusColor(leave.status)}`}>
// // //                   {leave.status}
// // //                 </span>
// // //               </div>

// // //               <div className="space-y-2 mb-4">
// // //                 <div className="flex justify-between text-sm">
// // //                   <span className="text-gray-600">Leave Type:</span>
// // //                   <span className="font-medium text-gray-900">
// // //                     {leave.leaveType}
// // //                   </span>
// // //                 </div>
// // //                 <div className="flex justify-between text-sm">
// // //                   <span className="text-gray-600">Duration:</span>
// // //                   <span className="font-medium text-gray-900">
// // //                     {leave.days} day(s)
// // //                   </span>
// // //                 </div>
// // //                 <div className="flex justify-between text-sm">
// // //                   <span className="text-gray-600">Dates:</span>
// // //                   <span className="font-medium text-gray-900 text-right">
// // //                     {leave.startDate} to {leave.endDate}
// // //                   </span>
// // //                 </div>
// // //                 <div className="flex justify-between text-sm">
// // //                   <span className="text-gray-600">Applied:</span>
// // //                   <span className="font-medium text-gray-900">
// // //                     {leave.appliedDate}
// // //                   </span>
// // //                 </div>
// // //               </div>

// // //               <div className="flex gap-2 pt-3 border-t border-gray-200">
// // //                 <button
// // //                   onClick={() => viewDetails(leave)}
// // //                   className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 
// // //                     rounded-lg font-medium hover:bg-blue-100 transition-colors 
// // //                     flex items-center justify-center gap-2"
// // //                 >
// // //                   <FaEye size={16} />
// // //                   View Details
// // //                 </button>
// // //                 {leave.status === 'Pending' && (
// // //                   <>
// // //                     <button
// // //                       onClick={() => quickAction(leave.id, 'Approved')}
// // //                       className="px-4 py-2 bg-green-50 text-green-600 rounded-lg 
// // //                         hover:bg-green-100 transition-colors"
// // //                       title="Approve"
// // //                     >
// // //                       <FaCheck size={16} />
// // //                     </button>
// // //                     <button
// // //                       onClick={() => quickAction(leave.id, 'Rejected')}
// // //                       className="px-4 py-2 bg-red-50 text-red-600 rounded-lg 
// // //                         hover:bg-red-100 transition-colors"
// // //                       title="Reject"
// // //                     >
// // //                       <FaTimes size={16} />
// // //                     </button>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <div className="bg-white rounded-xl shadow-sm p-8 text-center">
// // //             <p className="font-medium text-gray-900 mb-2">
// // //               No leave requests found
// // //             </p>
// // //             <p className="text-gray-500 text-sm">
// // //               {searchTerm || statusFilter
// // //                 ? 'Try adjusting your filters'
// // //                 : 'No leave requests available'}
// // //             </p>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Pagination */}
// // //       {totalPages > 1 && (
// // //         <div className="flex justify-center items-center gap-2 flex-wrap">
// // //           <button
// // //             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
// // //             disabled={currentPage === 1}
// // //             className="px-3 py-2 rounded-md border text-sm font-medium
// // //               disabled:opacity-50 disabled:cursor-not-allowed
// // //               hover:bg-[#2C5284] hover:text-white transition-colors"
// // //           >
// // //             Prev
// // //           </button>

// // //           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
// // //             <button
// // //               key={page}
// // //               onClick={() => setCurrentPage(page)}
// // //               className={`px-3 py-2 rounded-md border text-sm font-medium
// // //                 transition-colors ${
// // //                   currentPage === page
// // //                     ? 'bg-[#2C5284] text-white border-[#2C5284]'
// // //                     : 'hover:bg-gray-100'
// // //                 }`}
// // //             >
// // //               {page}
// // //             </button>
// // //           ))}

// // //           <button
// // //             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
// // //             disabled={currentPage === totalPages}
// // //             className="px-3 py-2 rounded-md border text-sm font-medium
// // //               disabled:opacity-50 disabled:cursor-not-allowed
// // //               hover:bg-[#2C5284] hover:text-white transition-colors"
// // //           >
// // //             Next
// // //           </button>
// // //         </div>
// // //       )}

// // //       {showModal && selectedLeave && (
// // //         <LeaveDetailModal
// // //           leave={selectedLeave}
// // //           onClose={() => setShowModal(false)}
// // //           onStatusChange={handleStatusChange}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default AdminLeave;















// // import { useEffect, useState } from 'react';
// // import Select from 'react-select';
// // import { FaEye, FaCheck, FaTimes, FaFilter } from 'react-icons/fa';
// // import LeaveDetailModal from './LeaveDetailModal';
// // import mockLeaveData from '../../data/mockAttendanceData';


// // function AdminLeave({ setTitle }) {
// //   const [leaves, setLeaves] = useState([]);
// //   const [filteredLeaves, setFilteredLeaves] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [statusFilter, setStatusFilter] = useState(null);
// //   const [selectedLeave, setSelectedLeave] = useState(null);
// //   const [showModal, setShowModal] = useState(false);

// //   // Pagination
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const ITEMS_PER_PAGE = 10;

// //   useEffect(() => {
// //     setTitle('Leave Management');
// //     setLeaves(mockLeaveData);
// //     setFilteredLeaves(mockLeaveData);
// //   }, [setTitle]);

// //   // Filter leaves based on search and status
// //   useEffect(() => {
// //     let filtered = [...leaves];

// //     // Search filter
// //     if (searchTerm) {
// //       filtered = filtered.filter(
// //         (leave) =>
// //           leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //           leave.email.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //     }

// //     // Status filter
// //     if (statusFilter) {
// //       filtered = filtered.filter((leave) => leave.status === statusFilter.value);
// //     }

// //     setFilteredLeaves(filtered);
// //     setCurrentPage(1);
// //   }, [searchTerm, statusFilter, leaves]);

// //   // Status options for dropdown
// //   const statusOptions = [
// //     { value: 'Pending', label: 'Pending' },
// //     { value: 'Approved', label: 'Approved' },
// //     { value: 'Rejected', label: 'Rejected' },
// //   ];

// //   // Handle status change
// //   const handleStatusChange = (leaveId, newStatus, adminComment = '') => {
// //     const updatedLeaves = leaves.map((leave) =>
// //       leave.id === leaveId
// //         ? { ...leave, status: newStatus, adminComment }
// //         : leave
// //     );
// //     setLeaves(updatedLeaves);
// //     setShowModal(false);
// //   };

// //   // Quick approve/reject
// //   const quickAction = (leaveId, action) => {
// //     const comment = action === 'Approved' 
// //       ? 'Leave approved by admin' 
// //       : 'Leave rejected by admin';
// //     handleStatusChange(leaveId, action, comment);
// //   };

// //   // Get status badge color
// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case 'Approved':
// //         return 'bg-green-100 text-green-800';
// //       case 'Rejected':
// //         return 'bg-red-100 text-red-800';
// //       case 'Pending':
// //         return 'bg-yellow-100 text-yellow-800';
// //       default:
// //         return 'bg-gray-100 text-gray-800';
// //     }
// //   };

// //   // Pagination
// //   const totalPages = Math.ceil(filteredLeaves.length / ITEMS_PER_PAGE);
// //   const paginatedLeaves = filteredLeaves.slice(
// //     (currentPage - 1) * ITEMS_PER_PAGE,
// //     currentPage * ITEMS_PER_PAGE
// //   );

// //   // View details
// //   const viewDetails = (leave) => {
// //     setSelectedLeave(leave);
// //     setShowModal(true);
// //   };

// //   // Get statistics
// //   const stats = {
// //     total: leaves.length,
// //     pending: leaves.filter(l => l.status === 'Pending').length,
// //     approved: leaves.filter(l => l.status === 'Approved').length,
// //     rejected: leaves.filter(l => l.status === 'Rejected').length,
// //   };

// //   return (
// //     <div className="min-h-screen p-4 sm:p-6 lg:p-8">
// //       {/* Header */}
// //       <div className="mb-6">
// //         <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
// //           Leave Management
// //         </h1>
// //         <p className="text-gray-600 mt-1">Manage employee leave requests</p>
// //       </div>

// //       {/* Statistics Cards
// //       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// //         <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
// //           <p className="text-sm text-gray-600">Total Requests</p>
// //           <p className="text-2xl font-bold text-[#2C5284]">{stats.total}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500">
// //           <p className="text-sm text-gray-600">Pending</p>
// //           <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
// //           <p className="text-sm text-gray-600">Approved</p>
// //           <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-500">
// //           <p className="text-sm text-gray-600">Rejected</p>
// //           <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
// //         </div>
// //       </div> */}

// //       {/* Filters Section */}
// //       <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
// //         <div className="flex items-center gap-2 mb-4">
// //           <FaFilter className="text-[#2C5284]" />
// //           <h3 className="font-semibold text-[#2C5284]">Filter Requests</h3>
// //         </div>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {/* Search */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-2">
// //               Search Employee
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="Search by name or email..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
// //                 focus:ring-2 focus:ring-[#365F8D] focus:border-transparent 
// //                 outline-none transition-all"
// //             />
// //           </div>

// //           {/* Status Filter */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-2">
// //               Filter by Status
// //             </label>
// //             <Select
// //               value={statusFilter}
// //               onChange={setStatusFilter}
// //               options={statusOptions}
// //               isClearable
// //               placeholder="All Statuses"
// //               className="react-select-container"
// //               classNamePrefix="react-select"
// //               styles={{
// //                 control: (base) => ({
// //                   ...base,
// //                   borderColor: '#d1d5db',
// //                   '&:hover': { borderColor: '#365F8D' },
// //                 }),
// //                 option: (base, state) => ({
// //                   ...base,
// //                   backgroundColor: state.isSelected
// //                     ? '#365F8D'
// //                     : state.isFocused
// //                     ? '#f3f4f6'
// //                     : 'white',
// //                   color: state.isSelected ? 'white' : '#1f2937',
// //                 }),
// //               }}
// //             />
// //           </div>
// //         </div>

// //         <div className="mt-4 text-sm text-gray-600">
// //           Showing{' '}
// //           <span className="font-semibold text-gray-900">
// //             {filteredLeaves.length}
// //           </span>{' '}
// //           leave request(s)
// //         </div>
// //       </div>

// //       {/* Desktop Table View */}
// //       <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead className="bg-[#365F8D]">
// //               <tr>
// //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// //                   Employee
// //                 </th>
// //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// //                   Leave Type
// //                 </th>
// //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// //                   Duration
// //                 </th>
// //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// //                   Applied Date
// //                 </th>
// //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// //                   Status
// //                 </th>
// //                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
// //                   Actions
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {paginatedLeaves.length > 0 ? (
// //                 paginatedLeaves.map((leave) => (
// //                   <tr
// //                     key={leave.id}
// //                     className="hover:bg-gray-50 transition-colors"
// //                   >
// //                     <td className="px-6 py-4 whitespace-nowrap">
// //                       <div className="text-sm font-medium text-black">
// //                         {leave.employeeName}
// //                       </div>
// //                       <div className="text-sm text-black">{leave.email}</div>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
// //                       {leave.leaveType}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap">
// //                       <div className="text-sm text-black">
// //                         {leave.startDate} to {leave.endDate}
// //                       </div>
// //                       <div className="text-sm text-black">
// //                         {leave.days} day(s)
// //                       </div>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
// //                       {leave.appliedDate}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap">
// //                       <span
// //                         className={`px-3 py-1 inline-flex text-xs leading-5 
// //                           font-semibold rounded-full ${getStatusColor(
// //                             leave.status
// //                           )}`}
// //                       >
// //                         {leave.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                       <div className="flex items-center gap-2">
// //                         <button
// //                           onClick={() => viewDetails(leave)}
// //                           className="p-2 text-[#2C5284] cursor-pointer rounded-lg 
// //                             transition-colors"
// //                           title="View Details"
// //                         >
// //                           <FaEye size={18} />
// //                         </button>
// //                         {leave.status === 'Pending' && (
// //                           <>
// //                             <button
// //                               onClick={() => quickAction(leave.id, 'Approved')}
// //                               className="p-2 text-[#2C5284] cursor-pointer
// //                                 rounded-lg transition-colors"
// //                               title="Approve"
// //                             >
// //                               <FaCheck size={18} />
// //                             </button>
// //                             <button
// //                               onClick={() => quickAction(leave.id, 'Rejected')}
// //                               className="p-2 text-[#2C5284] cursor-pointer 
// //                                 rounded-lg transition-colors"
// //                               title="Reject"
// //                             >
// //                               <FaTimes size={18} />
// //                             </button>
// //                           </>
// //                         )}
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))
// //               ) : (
// //                 <tr>
// //                   <td colSpan={6} className="px-6 py-12 text-center">
// //                     <div className="flex flex-col items-center">
// //                       <p className="font-medium text-gray-900 mb-1">
// //                         No leave requests found
// //                       </p>
// //                       <p className="text-gray-500 text-sm">
// //                         {searchTerm || statusFilter
// //                           ? 'Try adjusting your filters'
// //                           : 'No leave requests available'}
// //                       </p>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {/* Mobile/Tablet Card View */}
// //       <div className="space-y-4 lg:hidden">
// //         {paginatedLeaves.length > 0 ? (
// //           paginatedLeaves.map((leave) => (
// //             <div
// //               key={leave.id}
// //               className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md 
// //                 transition-shadow"
// //             >
// //               <div className="flex justify-between items-start mb-3">
// //                 <div className="flex-1">
// //                   <h3 className="text-base font-semibold text-gray-900">
// //                     {leave.employeeName}
// //                   </h3>
// //                   <p className="text-sm text-gray-600">{leave.email}</p>
// //                 </div>
// //                 <span
// //                   className={`px-3 py-1 text-xs font-semibold rounded-full 
// //                     ${getStatusColor(leave.status)}`}
// //                 >
// //                   {leave.status}
// //                 </span>
// //               </div>

// //               <div className="space-y-2 mb-4">
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-600">Leave Type:</span>
// //                   <span className="font-medium text-gray-900">
// //                     {leave.leaveType}
// //                   </span>
// //                 </div>
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-600">Duration:</span>
// //                   <span className="font-medium text-gray-900">
// //                     {leave.days} day(s)
// //                   </span>
// //                 </div>
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-600">Dates:</span>
// //                   <span className="font-medium text-gray-900 text-right">
// //                     {leave.startDate} to {leave.endDate}
// //                   </span>
// //                 </div>
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-600">Applied:</span>
// //                   <span className="font-medium text-gray-900">
// //                     {leave.appliedDate}
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="flex gap-2 pt-3 border-t border-gray-200">
// //                 <button
// //                   onClick={() => viewDetails(leave)}
// //                   className="flex-1 px-4 py-2 bg-blue-50 text-[#2C5284]
// //                     rounded-lg font-medium  transition-colors 
// //                     flex items-center justify-center gap-2"
// //                 >
// //                   <FaEye size={16} />
// //                   View
// //                 </button>
// //                 {leave.status === 'Pending' && (
// //                   <>
// //                     <button
// //                       onClick={() => quickAction(leave.id, 'Approved')}
// //                       className="px-4 py-2  text-[#2C5284] rounded-lg 
// //                         cursor-pointer transition-colors"
// //                       title="Approve"
// //                     >
// //                       <FaCheck size={16} />
// //                     </button>
// //                     <button
// //                       onClick={() => quickAction(leave.id, 'Rejected')}
// //                       className="px-4 py-2  text-[#2C5284] rounded-lg 
// //                         cursor-pointer transition-colors"
// //                       title="Reject"
// //                     >
// //                       <FaTimes size={16} />
// //                     </button>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <div className="bg-white rounded-xl shadow-sm p-8 text-center">
// //             <p className="font-medium text-gray-900 mb-2">
// //               No leave requests found
// //             </p>
// //             <p className="text-gray-500 text-sm">
// //               {searchTerm || statusFilter
// //                 ? 'Try adjusting your filters'
// //                 : 'No leave requests available'}
// //             </p>
// //           </div>
// //         )}
// //       </div>

// //       {/* Pagination */}
// //       {totalPages > 1 && (
// //        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
// //       {/* Previous */}
// //       <button
// //       onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
// //       disabled={currentPage === 1}
// //       className="px-3 py-2 rounded-md border text-sm font-medium
// //         disabled:opacity-50 disabled:cursor-not-allowed
// //         hover:bg-[#2C5284] hover:text-white"
// //       >
// //       Prev
// //       </button>

// //           {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
// //       <button
// //         key={page}
// //         onClick={() => setCurrentPage(page)}
// //         className={`px-3 py-2 rounded-md border text-sm font-medium
// //           ${
// //             currentPage === page
// //               ? 'bg-[#2C5284] text-white border-[#2C5284]'
// //               : 'hover:bg-gray-100'
// //           }`}>
            
// //         {page}
// //       </button>
// //       ))}

// //       {/* Next */}
// //       <button
// //       onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
// //       disabled={currentPage === totalPages}
// //       className="px-3 py-2 rounded-md border text-sm font-medium
// //         disabled:opacity-50 disabled:cursor-not-allowed
// //         hover:bg-[#2C5284] hover:text-white"
// //       >
// //       Next
// //       </button>
// //         </div>
// //       )}

// //       {/* Leave Detail Modal */}
// //       {showModal && selectedLeave && (
// //         <LeaveDetailModal
// //           leave={selectedLeave}
// //           onClose={() => setShowModal(false)}
// //           onStatusChange={handleStatusChange}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // export default AdminLeave;




// import { useEffect, useState } from 'react';
// import Select from 'react-select';
// import { FaEye, FaCheck, FaTimes, FaFilter } from 'react-icons/fa';
// import LeaveDetailModal from './LeaveDetailModal';

// // Mock data for leave requests
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

// function AdminLeave({ setTitle }) {
//   const [leaves, setLeaves] = useState([]);
//   const [filteredLeaves, setFilteredLeaves] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState(null);
//   const [selectedLeave, setSelectedLeave] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const ITEMS_PER_PAGE = 10;

//   useEffect(() => {
//     setTitle('Leave Management');
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setLeaves(mockLeaveData);
//     setFilteredLeaves(mockLeaveData);
//   }, [setTitle]);

//   // Filter leaves based on search and status
//   useEffect(() => {
//     let filtered = [...leaves];

//     // Search filter
//     if (searchTerm) {
//       filtered = filtered.filter(
//         (leave) =>
//           leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           leave.email.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Status filter
//     if (statusFilter) {
//       filtered = filtered.filter((leave) => leave.status === statusFilter.value);
//     }

//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setFilteredLeaves(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, statusFilter, leaves]);

//   // Status options for dropdown
//   const statusOptions = [
//     { value: 'Pending', label: 'Pending' },
//     { value: 'Approved', label: 'Approved' },
//     { value: 'Rejected', label: 'Rejected' },
//   ];

//   // Handle status change
//   const handleStatusChange = (leaveId, newStatus, adminComment = '') => {
//     const updatedLeaves = leaves.map((leave) =>
//       leave.id === leaveId
//         ? { ...leave, status: newStatus, adminComment }
//         : leave
//     );
//     setLeaves(updatedLeaves);
//     setShowModal(false);
//   };

//   // Quick approve/reject
//   const quickAction = (leaveId, action) => {
//     const comment = action === 'Approved' 
//       ? 'Leave approved by admin' 
//       : 'Leave rejected by admin';
//     handleStatusChange(leaveId, action, comment);
//   };

//   // Get status badge color
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-100 text-green-800';
//       case 'Rejected':
//         return 'bg-red-100 text-red-800';
//       case 'Pending':
//         return 'bg-yellow-100 text-yellow-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   // Pagination
//   const totalPages = Math.ceil(filteredLeaves.length / ITEMS_PER_PAGE);
//   const paginatedLeaves = filteredLeaves.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   // View details
//   const viewDetails = (leave) => {
//     setSelectedLeave(leave);
//     setShowModal(true);
//   };

//   // Get statistics
//   const stats = {
//     total: leaves.length,
//     pending: leaves.filter(l => l.status === 'Pending').length,
//     approved: leaves.filter(l => l.status === 'Approved').length,
//     rejected: leaves.filter(l => l.status === 'Rejected').length,
//   };

//   return (
//     <div className="min-h-screen p-4 sm:p-6 lg:p-8">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
//           Leave Management
//         </h1>
//         <p className="text-gray-600 mt-1">Manage employee leave requests</p>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
//           <p className="text-sm text-gray-600">Total Requests</p>
//           <p className="text-2xl font-bold text-[#2C5284]">{stats.total}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500">
//           <p className="text-sm text-gray-600">Pending</p>
//           <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
//           <p className="text-sm text-gray-600">Approved</p>
//           <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-500">
//           <p className="text-sm text-gray-600">Rejected</p>
//           <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
//         </div>
//       </div>

//       {/* Filters Section */}
//       <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
//         <div className="flex items-center gap-2 mb-4">
//           <FaFilter className="text-[#2C5284]" />
//           <h3 className="font-semibold text-[#2C5284]">Filter Requests</h3>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Search */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Search Employee
//             </label>
//             <input
//               type="text"
//               placeholder="Search by name or email..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
//                 focus:ring-2 focus:ring-[#365F8D] focus:border-transparent 
//                 outline-none transition-all"
//             />
//           </div>

//           {/* Status Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Filter by Status
//             </label>
//             <Select
//               value={statusFilter}
//               onChange={setStatusFilter}
//               options={statusOptions}
//               isClearable
//               placeholder="All Statuses"
//               className="react-select-container"
//               classNamePrefix="react-select"
//               styles={{
//                 control: (base) => ({
//                   ...base,
//                   borderColor: '#d1d5db',
//                   '&:hover': { borderColor: '#365F8D' },
//                 }),
//                 option: (base, state) => ({
//                   ...base,
//                   backgroundColor: state.isSelected
//                     ? '#365F8D'
//                     : state.isFocused
//                     ? '#f3f4f6'
//                     : 'white',
//                   color: state.isSelected ? 'white' : '#1f2937',
//                 }),
//               }}
//             />
//           </div>
//         </div>

//         <div className="mt-4 text-sm text-gray-600">
//           Showing{' '}
//           <span className="font-semibold text-gray-900">
//             {filteredLeaves.length}
//           </span>{' '}
//           leave request(s)
//         </div>
//       </div>

//       {/* Desktop Table View */}
//       <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-[#365F8D]">
//               <tr>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
//                   Employee
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
//                   Leave Type
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
//                   Duration
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
//                   Applied Date
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
//                   Status
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-white">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {paginatedLeaves.length > 0 ? (
//                 paginatedLeaves.map((leave) => (
//                   <tr
//                     key={leave.id}
//                     className="hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">
//                         {leave.employeeName}
//                       </div>
//                       <div className="text-sm text-gray-500">{leave.email}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {leave.leaveType}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">
//                         {leave.startDate} to {leave.endDate}
//                       </div>
//                       <div className="text-sm text-gray-500">
//                         {leave.days} day(s)
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {leave.appliedDate}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-3 py-1 inline-flex text-xs leading-5 
//                           font-semibold rounded-full ${getStatusColor(
//                             leave.status
//                           )}`}
//                       >
//                         {leave.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => viewDetails(leave)}
//                           className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg 
//                             transition-colors"
//                           title="View Details"
//                         >
//                           <FaEye size={18} />
//                         </button>
//                         {leave.status === 'Pending' && (
//                           <>
//                             <button
//                               onClick={() => quickAction(leave.id, 'Approved')}
//                               className="p-2 text-green-600 hover:bg-green-50 
//                                 rounded-lg transition-colors"
//                               title="Approve"
//                             >
//                               <FaCheck size={18} />
//                             </button>
//                             <button
//                               onClick={() => quickAction(leave.id, 'Rejected')}
//                               className="p-2 text-red-600 hover:bg-red-50 
//                                 rounded-lg transition-colors"
//                               title="Reject"
//                             >
//                               <FaTimes size={18} />
//                             </button>
//                           </>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={6} className="px-6 py-12 text-center">
//                     <div className="flex flex-col items-center">
//                       <p className="font-medium text-gray-900 mb-1">
//                         No leave requests found
//                       </p>
//                       <p className="text-gray-500 text-sm">
//                         {searchTerm || statusFilter
//                           ? 'Try adjusting your filters'
//                           : 'No leave requests available'}
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Mobile/Tablet Card View */}
//       <div className="space-y-4 lg:hidden">
//         {paginatedLeaves.length > 0 ? (
//           paginatedLeaves.map((leave) => (
//             <div
//               key={leave.id}
//               className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md 
//                 transition-shadow"
//             >
//               <div className="flex justify-between items-start mb-3">
//                 <div className="flex-1">
//                   <h3 className="text-base font-semibold text-gray-900">
//                     {leave.employeeName}
//                   </h3>
//                   <p className="text-sm text-gray-600">{leave.email}</p>
//                 </div>
//                 <span
//                   className={`px-3 py-1 text-xs font-semibold rounded-full 
//                     ${getStatusColor(leave.status)}`}
//                 >
//                   {leave.status}
//                 </span>
//               </div>

//               <div className="space-y-2 mb-4">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Leave Type:</span>
//                   <span className="font-medium text-gray-900">
//                     {leave.leaveType}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Duration:</span>
//                   <span className="font-medium text-gray-900">
//                     {leave.days} day(s)
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Dates:</span>
//                   <span className="font-medium text-gray-900 text-right">
//                     {leave.startDate} to {leave.endDate}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Applied:</span>
//                   <span className="font-medium text-gray-900">
//                     {leave.appliedDate}
//                   </span>
//                 </div>
//               </div>

//               <div className="flex gap-2 pt-3 border-t border-gray-200">
//                 <button
//                   onClick={() => viewDetails(leave)}
//                   className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 
//                     rounded-lg font-medium hover:bg-blue-100 transition-colors 
//                     flex items-center justify-center gap-2"
//                 >
//                   <FaEye size={16} />
//                   View
//                 </button>
//                 {leave.status === 'Pending' && (
//                   <>
//                     <button
//                       onClick={() => quickAction(leave.id, 'Approved')}
//                       className="px-4 py-2 bg-green-50 text-green-600 rounded-lg 
//                         hover:bg-green-100 transition-colors"
//                       title="Approve"
//                     >
//                       <FaCheck size={16} />
//                     </button>
//                     <button
//                       onClick={() => quickAction(leave.id, 'Rejected')}
//                       className="px-4 py-2 bg-red-50 text-red-600 rounded-lg 
//                         hover:bg-red-100 transition-colors"
//                       title="Reject"
//                     >
//                       <FaTimes size={16} />
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="bg-white rounded-xl shadow-sm p-8 text-center">
//             <p className="font-medium text-gray-900 mb-2">
//               No leave requests found
//             </p>
//             <p className="text-gray-500 text-sm">
//               {searchTerm || statusFilter
//                 ? 'Try adjusting your filters'
//                 : 'No leave requests available'}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-2 rounded-md border text-sm font-medium
//               disabled:opacity-50 disabled:cursor-not-allowed
//               hover:bg-[#2C5284] hover:text-white transition-colors"
//           >
//             Prev
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => setCurrentPage(page)}
//               className={`px-3 py-2 rounded-md border text-sm font-medium
//                 transition-colors ${
//                   currentPage === page
//                     ? 'bg-[#2C5284] text-white border-[#2C5284]'
//                     : 'hover:bg-gray-100'
//                 }`}
//             >
//               {page}
//             </button>
//           ))}

//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-2 rounded-md border text-sm font-medium
//               disabled:opacity-50 disabled:cursor-not-allowed
//               hover:bg-[#2C5284] hover:text-white transition-colors"
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* Leave Detail Modal */}
//       {showModal && selectedLeave && (
//         <LeaveDetailModal
//           leave={selectedLeave}
//           onClose={() => setShowModal(false)}
//           onStatusChange={handleStatusChange}
//         />
//       )}
//     </div>
//   );
// }

// export default AdminLeave;

















import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FaEye, FaCheck, FaTimes, FaFilter } from 'react-icons/fa';
import LeaveDetailModal from './LeaveDetailModal';
import { MdOutlinePendingActions } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { MdApproval } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
// Mock data for leave requests
const mockLeaveData = [
  {
    id: 1,
    employeeId: 1,
    employeeName: "Ali Hamza",
    email: "alihamza@gmail.com",
    leaveType: "Sick Leave",
    startDate: "2026-02-10",
    endDate: "2026-02-12",
    days: 3,
    reason: "Medical treatment required for fever and flu symptoms.",
    status: "Pending",
    appliedDate: "2026-02-03",
    adminComment: ""
  },
  {
    id: 2,
    employeeId: 1,
    employeeName: "Ali Hamza",
    email: "alihamza@gmail.com",
    leaveType: "Annual Leave",
    startDate: "2026-01-15",
    endDate: "2026-01-17",
    days: 3,
    reason: "Family vacation planned.",
    status: "Approved",
    appliedDate: "2026-01-05",
    adminComment: "Approved. Enjoy your vacation!"
  },
  {
    id: 3,
    employeeId: 2,
    employeeName: "Ali Zain",
    email: "alizain@gmail.com",
    leaveType: "Personal Leave",
    startDate: "2026-02-05",
    endDate: "2026-02-05",
    days: 1,
    reason: "Personal errands to attend.",
    status: "Pending",
    appliedDate: "2026-02-01",
    adminComment: ""
  },
  {
    id: 4,
    employeeId: 3,
    employeeName: "Khubaib",
    email: "khubaibhamza@gmail.com",
    leaveType: "Sick Leave",
    startDate: "2026-01-20",
    endDate: "2026-01-21",
    days: 2,
    reason: "Doctor appointment and recovery.",
    status: "Rejected",
    appliedDate: "2026-01-18",
    adminComment: "Please reschedule after project deadline."
  },
  {
    id: 5,
    employeeId: 4,
    employeeName: "Shazain",
    email: "shazain@gmail.com",
    leaveType: "Emergency Leave",
    startDate: "2026-01-28",
    endDate: "2026-01-28",
    days: 1,
    reason: "Family emergency.",
    status: "Approved",
    appliedDate: "2026-01-28",
    adminComment: "Hope everything is okay."
  }
];

function AdminLeave({ setTitle }) {
  const [leaves, setLeaves] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
   const ITEMS_PER_PAGE = 10;
  


  useEffect(() => {
    setTitle('Leave Management');
    setLeaves(mockLeaveData);
    setFilteredLeaves(mockLeaveData);
  }, [setTitle]);

  // Filter leaves based on search and status
  useEffect(() => {
    let filtered = [...leaves];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (leave) =>
          leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          leave.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter) {
      filtered = filtered.filter((leave) => leave.status === statusFilter.value);
    }

    setFilteredLeaves(filtered);
    setCurrentPage(1);
  }, [searchTerm, statusFilter, leaves]);

  const statusOptions = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Rejected', label: 'Rejected' },
  ];

  const handleStatusChange = (leaveId, newStatus, adminComment = '') => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === leaveId
        ? { ...leave, status: newStatus, adminComment }
        : leave
    );
    setLeaves(updatedLeaves);
    setShowModal(false);
  };

  const quickAction = (leaveId, action) => {
    const comment = action === 'Approved' 
      ? 'Leave approved by admin' 
      : 'Leave rejected by admin';
    handleStatusChange(leaveId, action, comment);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalPages = Math.ceil(filteredLeaves.length / ITEMS_PER_PAGE);
  const paginatedLeaves = filteredLeaves.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const viewDetails = (leave) => {
    setSelectedLeave(leave);
    setShowModal(true);
  };

  const stats = {
    total: leaves.length,
    pending: leaves.filter(l => l.status === 'Pending').length,
    approved: leaves.filter(l => l.status === 'Approved').length,
    rejected: leaves.filter(l => l.status === 'Rejected').length,
  };

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C5284]">
          Leave Management
        </h1>
        
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
       <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
          <div>
                  <p className="text-sm sm:text-base text-[#2C5284]">
                    Total Requests
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#365F8D]">
                    {stats.total}
                  </h1>
          </div>
           <div className="bg-[#365F8D] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <VscRequestChanges size={24} className="text-white" />
            </div>
        
        </div>

        <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
                <div>
                  <p className="text-sm sm:text-base text-[#2C5284]">
                    Pending
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#365F8D]">
                    {stats.pending}
                  </h1>
                </div>
        
                <div className="bg-[#365F8D] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <MdOutlinePendingActions size={24} className="text-white" />
                </div>
              </div>

         <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
                <div>
                  <p className="text-sm sm:text-base text-[#2C5284]">
                    Approved
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#365F8D]">
                    {stats.approved}
                  </h1>
                </div>
        
                <div className="bg-[#365F8D] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <MdApproval size={24} className="text-white" />
                </div>
              </div>



       <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
                <div>
                  <p className="text-sm sm:text-base text-[#2C5284]">
                    Rejected
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#365F8D]">
                    {stats.rejected}
                  </h1>
                </div>
        
                <div className="bg-[#365F8D] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <RxCrossCircled size={24} className="text-white" />
                </div>
          </div>
          </div>

      {/* Filters Section */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <FaFilter className="text-[#2C5284] text-sm sm:text-base" />
          <h3 className="text-sm sm:text-base font-semibold text-[#2C5284]">Filter Requests</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Search */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Search Employee
            </label>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-[#2C5284] focus:border-transparent 
                outline-none transition-all"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Filter by Status
            </label>
            <Select
              value={statusFilter}
              onChange={setStatusFilter}
              options={statusOptions}
              isClearable
              placeholder="All Statuses"
              className="react-select-container text-sm sm:text-base"
              classNamePrefix="react-select"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: '#d1d5db',
                  minHeight: window.innerWidth < 640 ? '38px' : '42px',
                  '&:hover': { borderColor: '#365F8D' },
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isSelected
                    ? '#365F8D'
                    : state.isFocused
                    ? '#f3f4f6'
                    : 'white',
                  color: state.isSelected ? 'white' : '#1f2937',
                }),
              }}
            />
          </div>
        </div>

      
      </div>

        {/* <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 mb-3">
          Showing{' '}
          <span className="font-semibold text-gray-900">
            {filteredLeaves.length}
          </span>{' '}
          leave request(s)
        </div> */}

        <div className="mb-2 text-sm sm:text-base text-gray-600">
        Showing <span className="font-semibold text-black">{filteredLeaves.length}</span> leave request(s)
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#365F8D]">
              <tr>
                <th className="px-4 xl:px-6 py-3 xl:py-4 text-left text-xs xl:text-sm font-semibold text-white">
                  Employee
                </th>
                <th className="px-4 xl:px-6 py-3 xl:py-4 text-left text-xs xl:text-sm font-semibold text-white">
                  Leave Type
                </th>
                <th className="px-4 xl:px-6 py-3 xl:py-4 text-left text-xs xl:text-sm font-semibold text-white">
                  Duration
                </th>
                <th className="px-4 xl:px-6 py-3 xl:py-4 text-left text-xs xl:text-sm font-semibold text-white">
                  Applied Date
                </th>
                <th className="px-4 xl:px-6 py-3 xl:py-4 text-left text-xs xl:text-sm font-semibold text-white">
                  Status
                </th>
                <th className="px-4 xl:px-6 py-3 xl:py-4 text-left text-xs xl:text-sm font-semibold text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedLeaves.length > 0 ? (
                paginatedLeaves.map((leave) => (
                  <tr
                    key={leave.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 xl:px-6 py-3 xl:py-4 whitespace-nowrap">
                      <div className="text-xs xl:text-sm font-medium text-gray-900">
                        {leave.employeeName}
                      </div>
                      <div className="text-xs xl:text-sm text-gray-500">{leave.email}</div>
                    </td>
                    <td className="px-4 xl:px-6 py-3 xl:py-4 whitespace-nowrap text-xs xl:text-sm text-black">
                      {leave.leaveType}
                    </td>
                    <td className="px-4 xl:px-6 py-3 xl:py-4 whitespace-nowrap">
                      <div className="text-xs xl:text-sm text-black">
                        {leave.startDate} to {leave.endDate}
                      </div>
                      <div className="text-xs xl:text-sm text-gray-500">
                        {leave.days} day(s)
                      </div>
                    </td>
                    <td className="px-4 xl:px-6 py-3 xl:py-4 whitespace-nowrap text-xs xl:text-sm text-black">
                      {leave.appliedDate}
                    </td>
                    <td className="px-4 xl:px-6 py-3 xl:py-4 whitespace-nowrap">
                      <span
                        className={`px-2 xl:px-3 py-1 inline-flex text-xs leading-5 
                          font-semibold rounded-full ${getStatusColor(
                            leave.status
                          )}`}
                      >
                        {leave.status}
                      </span>
                    </td>
                    <td className="px-4 xl:px-6 py-3 xl:py-4 whitespace-nowrap text-xs xl:text-sm">
                      <div className="flex items-center gap-1 xl:gap-2">
                        <button
                          onClick={() => viewDetails(leave)}
                          className="p-1.5 xl:p-2 text-[#2C5284] cursor-pointer rounded-lg 
                            transition-colors"
                          title="View Details"
                        >
                          <FaEye size={16} className="xl:w-[18px] xl:h-[18px]" />
                        </button>
                        {leave.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => quickAction(leave.id, 'Approved')}
                              className="p-1.5 xl:p-2 text-[#2C5284] cursor-pointer
                                rounded-lg transition-colors"
                              title="Approve"
                            >
                              <FaCheck size={16} className="xl:w-[18px] xl:h-[18px]" />
                            </button>
                            <button
                              onClick={() => quickAction(leave.id, 'Rejected')}
                              className="p-1.5 xl:p-2 text-[#2C5284] cursor-pointer 
                                rounded-lg transition-colors"
                              title="Reject"
                            >
                              <FaTimes size={16} className="xl:w-[18px] xl:h-[18px]" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center">
                      <p className="font-medium text-gray-900 mb-1">
                        No leave requests found
                      </p>
                      <p className="text-gray-500 text-sm">
                        {searchTerm || statusFilter
                          ? 'Try adjusting your filters'
                          : 'No leave requests available'}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="space-y-3 sm:space-y-4 lg:hidden">
        {paginatedLeaves.length > 0 ? (
          paginatedLeaves.map((leave) => (
            <div
              key={leave.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4 hover:shadow-md 
                transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 min-w-0 pr-2">
                  <h3 className="text-sm sm:text-base font-semibold text-black truncate">
                    {leave.employeeName}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{leave.email}</p>
                </div>
                <span
                  className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap
                    ${getStatusColor(leave.status)}`}
                >
                  {leave.status}
                </span>
              </div>

              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Leave Type:</span>
                  <span className="font-medium text-black text-right">
                    {leave.leaveType}
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-black">
                    {leave.days} day(s)
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Dates:</span>
                  <span className="font-medium text-gray-900 text-right">
                    {leave.startDate} to {leave.endDate}
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Applied:</span>
                  <span className="font-medium text-black">
                    {leave.appliedDate}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-3 border-t border-gray-200">
                <button
                  onClick={() => viewDetails(leave)}
                  className="flex-1 px-3 sm:px-4 py-2 bg-blue-50 text-[#2C5284]
                    rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-100 transition-colors 
                    flex items-center justify-center gap-1 sm:gap-2"
                >
                  <FaEye size={14} className="sm:w-4 sm:h-4" />
                  <span>View</span>
                </button>
                {leave.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => quickAction(leave.id, 'Approved')}
                      className="px-3 sm:px-4 py-2 cursor-pointer text-[#2C5284] rounded-lg 
                         transition-colors"
                      title="Approve"
                    >
                      <FaCheck size={14} className="sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={() => quickAction(leave.id, 'Rejected')}
                      className="px-3 sm:px-4 py-2 cursor-pointer text-[#2C5284] rounded-lg 
                         transition-colors"
                      title="Reject"
                    >
                      <FaTimes size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-6 sm:p-8 text-center">
            <p className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
              No leave requests found
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              {searchTerm || statusFilter
                ? 'Try adjusting your filters'
                : 'No leave requests available'}
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
         <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
    
      {/* Previous */}
      <button
      onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
      className="px-3 py-2 rounded-md border text-sm font-medium
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:bg-[#2C5284] hover:text-white"
      >
      Prev
      </button>

         {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`px-3 py-2 rounded-md border text-sm font-medium
          ${
            currentPage === page
              ? 'bg-[#2C5284] text-white border-[#2C5284]'
              : 'hover:bg-gray-100'
          }`}>
            
        {page}
      </button>
      ))}

      {/* Next */}
      <button
      onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-3 py-2 rounded-md border text-sm font-medium
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:bg-[#2C5284] hover:text-white"
      >
      Next
      </button>
        </div>
       )}

      {/* Leave Detail Modal */}
      {showModal && selectedLeave && (
        <LeaveDetailModal
          leave={selectedLeave}
          onClose={() => setShowModal(false)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}

export default AdminLeave;

















