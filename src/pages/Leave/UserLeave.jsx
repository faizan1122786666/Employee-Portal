// import { useState, useEffect } from 'react';
// import Modal from 'react-modal';

// // Required for accessibility
// Modal.setAppElement('#root');

// const customModalStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     border: 'none',
//     borderRadius: '12px',
//     padding: '0',
//     maxWidth: '520px',
//     width: '90%',
//     maxHeight: '90vh',
//     overflowY: 'auto',
//     boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
//   },
//   overlay: {
//     backgroundColor: '#2C5284',
//     zIndex: 1000,
//   },
// };

// function UserLeave() {
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     leaveType: '',
//     startDate: '',
//     endDate: '',
//     reason: '',
//   });

//   const [daysRequested, setDaysRequested] = useState(0);
//   const [submitMessage, setSubmitMessage] = useState(null);

//   // Calculate number of days
//   useEffect(() => {
//     if (formData.startDate && formData.endDate) {
//       const start = new Date(formData.startDate);
//       const end = new Date(formData.endDate);
//       if (end >= start) {
//         const diffTime = Math.abs(end - start);
//         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
//         setDaysRequested(diffDays);
//       } else {
//         setDaysRequested(0);
//       }
//     } else {
//       setDaysRequested(0);
//     }
//   }, [formData.startDate, formData.endDate]);

//   const openModal = () => {
//     setIsOpen(true);
//     setSubmitMessage(null); // reset message when opening
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.leaveType) {
//       setSubmitMessage({ type: 'error', text: 'Please select leave type' });
//       return;
//     }
//     if (!formData.startDate || !formData.endDate) {
//       setSubmitMessage({ type: 'error', text: 'Please select both dates' });
//       return;
//     }
//     if (daysRequested <= 0) {
//       setSubmitMessage({ type: 'error', text: 'End date must be after start date' });
//       return;
//     }
//     if (!formData.reason.trim()) {
//       setSubmitMessage({ type: 'error', text: 'Please enter reason for leave' });
//       return;
//     }

//     // Simulate successful submission
//     setSubmitMessage({
//       type: 'success',
//       text: 'Leave request submitted successfully!',
//     });

//     // Reset form & close modal after 2 seconds
//     setTimeout(() => {
//       setFormData({
//         leaveType: '',
//         startDate: '',
//         endDate: '',
//         reason: '',
//       });
//       setIsOpen(false);
//       setSubmitMessage(null);
//     }, 1800);
//   };

//   return (
//     <div className="max-h-screen p-4 sm:p-6 lg:p-8">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//         <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
//           Leave Request
//         </h1>

//         <button
//           onClick={openModal}
//           className="bg-[#2C5284] hover:bg-[#23416a] text-white px-8 py-4 rounded-lg font-medium shadow-md transition-colors duration-200 text-lg cursor-pointer"
//         >
//           Apply for Leave
//         </button>
//       </div>


//       {/* Table */}
      

// <div className="bg-neutral-primary-soft shadow-xs rounded-base border border-default">

//   <div className='relative overflow-x-auto overflow-y-hidden'>
//   <table className="w-full text-sm text-left rtl:text-right text-body">

//         <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
//             <tr>
//                 <th scope="col" className="px-6 py-3 font-medium">
//                     Product name
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium">
//                     Color
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium">
//                     Category
//                 </th>
//                 <th scope="col" className
//                 ="px-6 py-3 font-medium">
//                     Price
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium">
//                     <span class="sr-only">Edit</span>
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
//                 <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
//                     Apple MacBook Pro 17"
//                 </th>
//                 <td className="px-6 py-4">
//                     Silver
//                 </td>
//                 <td className="px-6 py-4">
//                     Laptop
//                 </td>
//                 <td className="px-6 py-4">
//                     $2999
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                     <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
//                 <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
//                     Microsoft Surface Pro
//                 </th>
//                 <td className="px-6 py-4">
//                     White
//                 </td>
//                 <td className="px-6 py-4">
//                     Laptop PC
//                 </td>
//                 <td className="px-6 py-4">
//                     $1999
//                 </td>
//                 <td class="px-6 py-4 text-right">
//                     <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
//                 <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
//                     Magic Mouse 2
//                 </th>
//                 <td class="px-6 py-4">
//                     Black
//                 </td>
//                 <td class="px-6 py-4">
//                     Accessories
//                 </td>
//                 <td class="px-6 py-4">
//                     $99
//                 </td>
//                 <td class="px-6 py-4 text-right">
//                     <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
//     </div>
// </div>


      
























//       {/* Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customModalStyles}
//         contentLabel="Apply for Leave"
//       >
//         <div className="p-6 md:p-8">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#2C5284]">
//               Apply for Leave
//             </h2>
//             <button
//               onClick={closeModal}
//               className="text-gray-600 hover:text-gray-900 text-3xl leading-none cursor-pointer"
//             >
//               ×
//             </button>
//           </div>

//           {/* Status Message */}
//           {submitMessage && (
//             <div
//               className={`mb-6 p-4 rounded-lg text-center font-medium ${
//                 submitMessage.type === 'success'
//                   ? 'bg-green-100 text-green-800'
//                   : 'bg-red-100 text-red-800'
//               }`}
//             >
//               {submitMessage.text}
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Leave Type */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Leave Type <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="leaveType"
//                 value={formData.leaveType}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5284] focus:border-[#2C5284]"
//                 required
//               >
//                 <option value="">Select leave type</option>
//                 <option value="casual">Casual Leave</option>
//                 <option value="sick">Sick Leave</option>
//                 <option value="annual">Annual/Earned Leave</option>
//                 <option value="emergency">Emergency Leave</option>
//                 <option value="unpaid">Unpaid Leave</option>
//               </select>
//             </div>

//             {/* Dates */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Start Date <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5284]"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   End Date <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={formData.endDate}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5284]"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Days Info */}
//             {daysRequested > 0 && (
//               <div className="text-gray-700 font-medium">
//                 Number of days: <span className="text-[#2C5284]">{daysRequested}</span>
//               </div>
//             )}

//             {/* Reason */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Reason for Leave <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 name="reason"
//                 value={formData.reason}
//                 onChange={handleChange}
//                 rows={4}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5284] resize-y"
//                 placeholder="Please explain the reason for your leave..."
//                 required
//               />
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-end gap-4 mt-8">
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-[#2C5284] hover:bg-[#23416a] text-white rounded-lg font-medium transition cursor-pointer"
//               >
//                 Submit Request
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default UserLeave;






























import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import mockLeaveData from '../../data/mockLeaveData';

// Required for accessibility
Modal.setAppElement('#root');

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '12px',
    padding: '0',
    maxWidth: '520px',
    width: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
  },
  overlay: {
    backgroundColor: '#2C5284',
    zIndex: 1000,
  },
};

// function UserLeave() {
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     leaveType: '',
//     startDate: '',
//     endDate: '',
//     reason: '',
//   });

//   const [daysRequested, setDaysRequested] = useState(0);
//   const [submitMessage, setSubmitMessage] = useState(null);

//   // Calculate number of days
//   useEffect(() => {
//     if (formData.startDate && formData.endDate) {
//       const start = new Date(formData.startDate);
//       const end = new Date(formData.endDate);
//       if (end >= start) {
//         const diffTime = Math.abs(end - start);
//         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
//         setDaysRequested(diffDays);
//       } else {
//         setDaysRequested(0);
//       }
//     } else {
//       setDaysRequested(0);
//     }
//   }, [formData.startDate, formData.endDate]);

//   const openModal = () => {
//     setIsOpen(true);
//     setSubmitMessage(null);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.leaveType) {
//       setSubmitMessage({ type: 'error', text: 'Please select leave type' });
//       return;
//     }
//     if (!formData.startDate || !formData.endDate) {
//       setSubmitMessage({ type: 'error', text: 'Please select both dates' });
//       return;
//     }
//     if (daysRequested <= 0) {
//       setSubmitMessage({ type: 'error', text: 'End date must be after start date' });
//       return;
//     }
//     if (!formData.reason.trim()) {
//       setSubmitMessage({ type: 'error', text: 'Please enter reason for leave' });
//       return;
//     }

//     setSubmitMessage({
//       type: 'success',
//       text: 'Leave request submitted successfully!',
//     });

//     setTimeout(() => {
//       setFormData({
//         leaveType: '',
//         startDate: '',
//         endDate: '',
//         reason: '',
//       });
//       setIsOpen(false);
//       setSubmitMessage(null);
//     }, 1800);
//   };

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case 'approved':
//         return 'bg-green-100 text-green-800';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'rejected':
//         return 'bg-red-100 text-red-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="max-h-screen p-4 sm:p-6 lg:p-8">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//         <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
//           Leave Request
//         </h1>

//         <button
//           onClick={openModal}
//           className="bg-[#2C5284] hover:bg-[#23416a] text-white px-8 py-4 rounded-lg font-medium shadow-md transition-colors duration-200 text-lg cursor-pointer"
//         >
//           Apply for Leave
//         </button>
//       </div>

//       {/* Table Container with Overflow */}
//       <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
//         <div className="p-4 bg-[#2C5284] border-b border-white">
//           <h3 className="text-lg font-semibold text-white">
//             Leave Request History
//           </h3>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-[#2C5284]">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
//                   ID
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
//                   Leave Type
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
//                   Start Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
//                   End Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
//                   Days
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
//                   Reason
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
//                   Applied On
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {leaveRequests.map((request, index) => (
//                 <tr
//                   key={request.id}
//                   className={`hover:bg-gray-50 transition-colors ${
//                     index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
//                   }`}
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
//                     {request.id}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
//                     {request.leaveType}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
//                     {new Date(request.startDate).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'short',
//                       day: 'numeric',
//                     })}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
//                     {new Date(request.endDate).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'short',
//                       day: 'numeric',
//                     })}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
//                     {request.days}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-black max-w-xs">
//                     <div className="truncate" title={request.reason}>
//                       {request.reason}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm">
//                     <span
//                       className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
//                         request.status
//                       )}`}
//                     >
//                       {request.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
//                     {new Date(request.appliedOn).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'short',
//                       day: 'numeric',
//                     })}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customModalStyles}
//         contentLabel="Apply for Leave"
//       >
//         <div className="p-6 md:p-8">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#2C5284]">
//               Apply for Leave
//             </h2>
//             <button
//               onClick={closeModal}
//               className="text-gray-600 hover:text-gray-900 text-3xl leading-none cursor-pointer"
//             >
//               ×
//             </button>
//           </div>

//           {/* Status Message */}
//           {submitMessage && (
//             <div
//               className={`mb-6 p-4 rounded-lg text-center font-medium ${
//                 submitMessage.type === 'success'
//                   ? 'bg-green-100 text-green-800'
//                   : 'bg-red-100 text-red-800'
//               }`}
//             >
//               {submitMessage.text}
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Leave Type */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Leave Type <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="leaveType"
//                 value={formData.leaveType}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5284] focus:border-[#2C5284]"
//                 required
//               >
//                 <option value="">Select leave type</option>
//                 <option value="casual">Casual Leave</option>
//                 <option value="sick">Sick Leave</option>
//                 <option value="annual">Annual/Earned Leave</option>
//                 <option value="emergency">Emergency Leave</option>
//                 <option value="unpaid">Unpaid Leave</option>
//               </select>
//             </div>

//             {/* Dates */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Start Date <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5284]"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   End Date <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={formData.endDate}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5284]"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Days Info */}
//             {daysRequested > 0 && (
//               <div className="text-gray-700 font-medium">
//                 Number of days: <span className="text-[#2C5284]">{daysRequested}</span>
//               </div>
//             )}

//             {/* Reason */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Reason for Leave <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 name="reason"
//                 value={formData.reason}
//                 onChange={handleChange}
//                 rows={4}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5284] resize-y"
//                 placeholder="Please explain the reason for your leave..."
//                 required
//               />
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-end gap-4 mt-8">
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-[#2C5284] hover:bg-[#23416a] text-white rounded-lg font-medium transition cursor-pointer"
//               >
//                 Submit Request
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default UserLeave;








