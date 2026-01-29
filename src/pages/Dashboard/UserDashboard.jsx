import React from 'react'

function UserDashboard() {
  return (
    <div>
      User Dashboard
    </div>
  )
}

export default UserDashboard



// import { useEffect, useState } from 'react';
// import { FaClock, FaSignInAlt, FaSignOutAlt, FaHistory } from 'react-icons/fa';
// import { format } from 'date-fns';

// const mockRecentAttendance = [
//   { date: '2025-01-27', clockIn: '09:02 AM', clockOut: '06:15 PM', duration: '9h 13m', status: 'present' },
//   { date: '2025-01-26', clockIn: '08:55 AM', clockOut: '05:48 PM', duration: '8h 53m', status: 'present' },
//   { date: '2025-01-25', clockIn: '09:10 AM', clockOut: '-', duration: '-', status: 'active' },
// ];

// function UserDashboard({ setTitle }) {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isClockedIn, setIsClockedIn] = useState(false);
//   const [clockInTime, setClockInTime] = useState(null);
//   const [todayStatus, setTodayStatus] = useState('Not yet clocked in');

//   useEffect(() => {
//     setTitle('Dashboard Page');

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [setTitle]);

//   // Simple mock persistence check (replace with real API / context later)
//   useEffect(() => {
//     const saved = localStorage.getItem('clockInTime');
//     if (saved) {
//       const parsed = new Date(saved);
//       if (parsed.toDateString() === new Date().toDateString()) {
//         // eslint-disable-next-line react-hooks/set-state-in-effect
//         setClockInTime(parsed);
//         setIsClockedIn(true);
//         setTodayStatus('Clocked In');
//       }
//     }
//   }, []);

//   const handleClockIn = () => {
//     const now = new Date();
//     setClockInTime(now);
//     setIsClockedIn(true);
//     setTodayStatus('Clocked In');
//     localStorage.setItem('clockInTime', now.toISOString());
//     // In real app: send to backend
//   };

//   const handleClockOut = () => {
//     setIsClockedIn(false);
//     setTodayStatus('Clocked Out');
//     localStorage.removeItem('clockInTime');
//     // In real app: send to backend
//   };

//   return (
//     <>
//       <div className="mt-5 text-center">
//         <h1 className="text-3xl sm:text-4xl font-bold text-[#365F8D]">
//           {format(currentTime, 'hh:mm:ss a')}
//         </h1>
//         <p className="text-gray-600 mt-2 text-base sm:text-lg">
//           {format(currentTime, 'EEEE, MMMM d, yyyy')}
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//         {/* Main Clock Card */}
//         <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl border-l-4 border-[#2C5284] shadow hover:shadow-xl transform transition duration-300 ease-in-out flex flex-col items-center">
//           <div className="bg-[#365F8D] w-16 h-16 rounded-full flex items-center justify-center mb-6">
//             <FaClock size={32} className="text-white" />
//           </div>

//           <h2 className="text-xl sm:text-2xl font-bold text-[#2C5284] mb-4">
//             Today's Attendance
//           </h2>

//           <p className="text-lg font-semibold mb-6">
//             Status:{' '}
//             <span
//               className={
//                 isClockedIn
//                   ? 'text-green-600 font-bold'
//                   : 'text-gray-700 font-medium'
//               }
//             >
//               {todayStatus}
//             </span>
//           </p>

//           {clockInTime && (
//             <p className="text-base sm:text-lg mb-8">
//               Clocked in at:{' '}
//               <span className="font-bold text-[#365F8D]">
//                 {format(clockInTime, 'hh:mm a')}
//               </span>
//             </p>
//           )}

//           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//             <button
//               onClick={handleClockIn}
//               disabled={isClockedIn}
//               className={`flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-medium text-base transition w-full sm:w-48
//                 ${
//                   isClockedIn
//                     ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     : 'bg-[#365F8D] text-white hover:bg-[#2C5284]'
//                 }`}
//             >
//               <FaSignInAlt size={20} />
//               Clock In
//             </button>

//             <button
//               onClick={handleClockOut}
//               disabled={!isClockedIn}
//               className={`flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-medium text-base transition w-full sm:w-48
//                 ${
//                   !isClockedIn
//                     ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     : 'bg-red-600 text-white hover:bg-red-700'
//                 }`}
//             >
//               <FaSignOutAlt size={20} />
//               Clock Out
//             </button>
//           </div>
//         </div>

//         {/* Quick Info Cards */}
//         <div className="bg-white p-6 rounded-xl border-l-4 border-[#2C5284] shadow hover:shadow-xl transform transition duration-300 ease-in-out">
//           <h3 className="text-lg font-bold text-[#2C5284] mb-4">
//             This Month
//           </h3>
//           <p className="text-4xl font-bold text-[#365F8D]">19</p>
//           <p className="text-gray-600 mt-1">Present Days</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl border-l-4 border-[#2C5284] shadow hover:shadow-xl transform transition duration-300 ease-in-out">
//           <h3 className="text-lg font-bold text-[#2C5284] mb-4">
//             Pending Leaves
//           </h3>
//           <p className="text-4xl font-bold text-amber-600">1</p>
//           <p className="text-gray-600 mt-1">Requests</p>
//         </div>
//       </div>

//       {/* Recent Attendance */}
//       {/* <div className="mt-10 bg-white p-6 rounded-xl border-l-4 border-[#2C5284] shadow hover:shadow-xl transform transition duration-300 ease-in-out">
//         <h2 className="text-lg font-bold text-[#2C5284] mb-5 flex items-center gap-2">
//           <FaHistory size={20} />
//           Recent Attendance
//         </h2>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left">
//             <thead>
//               <tr className="border-b text-gray-600">
//                 <th className="pb-3 font-medium">Date</th>
//                 <th className="pb-3 font-medium">Clock In</th>
//                 <th className="pb-3 font-medium">Clock Out</th>
//                 <th className="pb-3 font-medium">Duration</th>
//                 <th className="pb-3 font-medium">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {mockRecentAttendance.map((record, index) => (
//                 <tr key={index} className="border-b last:border-0">
//                   <td className="py-4">
//                     {format(new Date(record.date), 'MMM dd, yyyy')}
//                   </td>
//                   <td className="py-4">{record.clockIn}</td>
//                   <td className="py-4">{record.clockOut}</td>
//                   <td className="py-4">{record.duration}</td>
//                   <td className="py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         record.status === 'present'
//                           ? 'bg-green-100 text-green-700'
//                           : record.status === 'active'
//                           ? 'bg-blue-100 text-blue-700'
//                           : 'bg-gray-100 text-gray-600'
//                       }`}
//                     >
//                       {record.status === 'present'
//                         ? 'Present'
//                         : record.status === 'active'
//                         ? 'Active'
//                         : 'Absent'}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div> */}
//     </>
//   );
// }

// export default UserDashboard;












