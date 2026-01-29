import React from 'react'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import mockAttendanceData from '../../data/mockAttendanceData';


function UserAttendance({setTitle}) {

  const [selectedDate,setSelectedDate] = useState(null);
  const current_user_name = "Ali Hamza";

  const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : null;

  const userRecords = mockAttendanceData.filter(record =>
    record.name.toLowerCase() === current_user_name.toLowerCase()
  );

  const filteredRecords = formattedDate ? userRecords.filter(record => record.date === formattedDate) : userRecords;


 useEffect(() => {
    setTitle('Attendance Page')
  }, [setTitle])
  
  return (
    <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C5284] mb-6'>My Attendance</h1>

      <div className='mb-4'>
      <label className='block text-sm font-medium text-black mb-1 '>
        Search Through Date
      </label>
      <DatePicker
      selected={selectedDate}
      onChange={setSelectedDate}
      dateFormat="yyyy-MM-dd"
      isClearable
      placeholderText='Search through date(yyyy-MM-dd)..'
      className='cursor-pointer w-full max-w-sm px-4 py-2.5
      border border-gray-500 rounded-lg mt-1 '
      />
      </div>
    
      {/* For Desktop View */}
      <div className='bg-white rounded-xl shadow-sm lg:block hidden 
      overflow-hidden'>
      <div className='overflow-x-auto'>
       <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-[#365F8D]'>
          <tr>
            <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Employee Name</th>
            <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Date</th>
            <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Clock In</th>
            <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Clock Out</th>
            <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Status</th>
            <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Work Hours</th>
          </tr>
        </thead>
        <tbody className='divide-y bg-white divide-gray-200'>
          {filteredRecords.length > 0 ? (
          filteredRecords.map((record) => (
            <tr key={record.id} className='hover:bg-gray-50 transition-colors duration-150'>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
              {record.name}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.date}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.checkIn}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.checkOut || '-'}</td>
              <td className='px-6 py-4 text-sm font-medium text-black'>
                    <span className={`px-3 py-1 inline-flex text-sm leading-5 font-medium
                      rounded-full ${record.status.toLowerCase() === 'present' 
                        ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>{record.status}</span>
                  </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.workHours || '-'}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">
               <div className="flex flex-col items-center">
                  <p className="font-medium text-gray-900 mb-1">No records found</p>
                  <p className="text-gray-500">
                  {selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
                  </p>
                  </div>
           </td>
          </tr>
        )}
          </tbody>
          </table>
          </div>
          
    </div>

   {/* For Mobile and Tablet View */}
    <div className='space-y-4 lg:hidden mt-6'>
      {filteredRecords.length > 0 ? (
        filteredRecords.map((record) => (
          <div key={record.id} className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow '>
            <div className='flex justify-between items-start mb-3'>
            <div>
              <h3 className='text-base sm:text-lg font-semibold text-black'>{record.name}</h3>
              <p className='text-black text-sm mt-1'>{record.date}</p>
            </div>
             <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${record.status.toLowerCase() === 'present' 
              ? 'text-green-800 bg-green-100' : 'bg-red-100 text-red-800'
            }`}>{record.status}</span>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:gap-4'>
            <div>
              <p className='text-black mb-1 text-sm'>Check-In</p>
              <p className='text-sm sm:text-base font-medium text-black'>{record.checkIn}</p>
            </div>
            <div>
            <p className='text-black mb-1 text-sm'>Check-Out</p>
              <p className='text-sm sm:text-base font-medium
              text-black'>{record.checkOut || '-'}</p>
            </div>
            <div className='col-span-2'>
              <p className='text-sm text-black mb-1
              '>Work Hours</p>
              <p className='text-sm sm:text-base font-medium text-black'>{record.workHours || '-'}</p>
            </div>
            </div>
          </div>
        ))
      ) : (
         <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mt-2 items-center">
            <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No records found</p>
            <p className="text-sm sm:text-base text-gray-500">
              {selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
            </p>
          </div>
      )}
    </div>
  </div>
  )
}

export default UserAttendance











// import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import mockAttendanceData from '../../data/mockAttendanceData';

// function UserAttendance({ setTitle }) {
//   const [selectedDate, setSelectedDate] = useState(null);

  
//   const current_user_name = "Ali Hamza";

//   useEffect(() => {
//     setTitle('Attendance Page');
//   }, [setTitle]);

//   const formattedDate = selectedDate
//     ? selectedDate.toISOString().split('T')[0]
//     : null;

//   // Filter only current user's records + optional date filter
//   const filteredRecords = mockAttendanceData.filter((record) => {
//     // Only this user's records
//     const nameMatch = record.name.toLowerCase() === current_user_name.toLowerCase();

    
//     if (!formattedDate) {
//       return nameMatch;
//     }

//     // If date selected → match both name & date
//     const dateMatch = record.date === formattedDate;
//     return nameMatch && dateMatch;
//   });

//   return (
//     <div className="max-h-screen p-4 sm:p-6 lg:p-8">
//       <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C5284] mb-3">
//         My Attendance
//       </div>

//       <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//           <div className="w-full">
//             <label className="block text-sm font-medium text-black mb-2">
//               Search Date
//             </label>
//             <DatePicker
//               selected={selectedDate}
//               onChange={setSelectedDate}
//               isClearable
//               dateFormat="yyyy-MM-dd"
//               placeholderText="Search through date (yyyy-MM-dd)..."
//               className="w-full px-4 py-2.5 sm:py-3 border border-gray-500 rounded-lg transition-all duration-200 text-sm sm:text-base"
//               wrapperClassName="w-full"
//             />
//           </div>
//         </div>
//       </div>

    
//       {/* Desktop Table View */}
//       <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-[#365F8D]">
//               <tr>
//                 <th className="px-6 py-4 text-white text-sm text-left font-semibold">
//                   Date
//                 </th>
//                 <th className="px-6 py-4 text-white text-sm text-left font-semibold">
//                   Clock In
//                 </th>
//                 <th className="px-6 py-4 text-white text-sm text-left font-semibold">
//                   Clock Out
//                 </th>
//                 <th className="px-6 py-4 text-white text-sm text-left font-semibold">
//                   Status
//                 </th>
//                 <th className="px-6 py-4 text-white text-sm text-left font-semibold">
//                   Work Hours
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y bg-white divide-gray-200">
//               {filteredRecords.length > 0 ? (
//                 filteredRecords.map((record) => (
//                   <tr
//                     key={record.id}
//                     className="hover:bg-gray-50 transition-colors duration-150"
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
//                       {record.date}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
//                       {record.checkIn || '-'}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
//                       {record.checkOut || '-'}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
//                       <span
//                         className={`px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-full ${
//                           record.status?.toLowerCase() === 'present'
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-red-100 text-red-800'
//                         }`}
//                       >
//                         {record.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
//                       {record.workHours || '-'}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={5}
//                     className="px-6 py-12 text-center text-sm text-gray-500"
//                   >
//                     <div className="flex flex-col items-center">
//                       <p className="font-medium text-gray-900 mb-1">
//                         No records found
//                       </p>
//                       <p className="text-gray-500">
//                         {selectedDate
//                           ? 'Try adjusting your date filter'
//                           : 'No attendance data available yet'}
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Mobile & Tablet Card View */}
//       <div className="space-y-4 lg:hidden">
//         {filteredRecords.length > 0 ? (
//           filteredRecords.map((record) => (
//             <div
//               key={record.id}
//               className="bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-200"
//             >
//               <div className="flex justify-between items-start mb-3">
//                 <div>
//                   <p className="text-black text-sm mt-1">{record.date}</p>
//                 </div>
//                 <span
//                   className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${
//                     record.status?.toLowerCase() === 'present'
//                       ? 'bg-green-100 text-green-800'
//                       : 'bg-red-100 text-red-800'
//                   }`}
//                 >
//                   {record.status}
//                 </span>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                 <div>
//                   <p className="text-black mb-1 text-sm">Check-In</p>
//                   <p className="text-sm sm:text-base font-medium text-black">
//                     {record.checkIn || '-'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-black mb-1 text-sm">Check-Out</p>
//                   <p className="text-sm sm:text-base font-medium text-black">
//                     {record.checkOut || '-'}
//                   </p>
//                 </div>
//                 <div className="col-span-2">
//                   <p className="text-sm text-black mb-1">Work Hours</p>
//                   <p className="text-sm sm:text-base font-medium text-black">
//                     {record.workHours || '-'}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mt-2">
//             <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">
//               No records found
//             </p>
//             <p className="text-sm sm:text-base text-gray-500">
//               {selectedDate
//                 ? 'Try adjusting your date filter'
//                 : 'No attendance data available yet'}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UserAttendance;







// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import mockAttendanceData from '../../data/mockAttendanceData'; // same data file

// // Assume we have the current user's name/ID from auth context, localStorage, etc.
// // For this example we hardcode it — in real app replace with real user data
// const CURRENT_USER_NAME = "Ali Hamza"; // ← yeh real app mein auth se aayega

// function UserAttendance() {
//   const [selectedDate, setSelectedDate] = useState(null); // null = show all

//   const formattedDate = selectedDate
//     ? selectedDate.toISOString().split('T')[0]
//     : null;

//   // Filter only THIS user's records
//   const userRecords = mockAttendanceData.filter(record => 
//     record.name.toLowerCase() === CURRENT_USER_NAME.toLowerCase()
//   );

//   // Then apply date filter if selected
//   const filteredRecords = formattedDate
//     ? userRecords.filter(record => record.date === formattedDate)
//     : userRecords;

//   // Sort by date (newest first) – optional but nice for user
//   filteredRecords.sort((a, b) => new Date(b.date) - new Date(a.date));

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto">
//       <h1 className="text-2xl font-bold text-gray-800 mb-2">My Attendance</h1>
//       <p className="text-gray-600 mb-6">Welcome back, {CURRENT_USER_NAME}</p>

//       {/* Optional Date Filter */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Filter by Date (leave blank to see all)
//         </label>
//         <DatePicker
//           selected={selectedDate}
//           onChange={setSelectedDate}
//           dateFormat="yyyy-MM-dd"
//           isClearable
//           placeholderText="Select date"
//           className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
//         />
//       </div>

//       {/* Attendance Table / List */}
//       <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
//         {filteredRecords.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Date
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Check-In
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Check-Out
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
//                     Work Hours
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredRecords.map(record => (
//                   <tr key={record.id} className="hover:bg-gray-50">
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
//                       {record.date}
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
//                       {record.checkIn || '—'}
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
//                       {record.checkOut || '—'}
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2.5 py-1 inline-flex text-xs leading-none font-semibold rounded-full ${
//                           record.status?.toLowerCase() === 'present'
//                             ? 'bg-green-100 text-green-800'
//                             : record.status?.toLowerCase() === 'absent'
//                             ? 'bg-red-100 text-red-800'
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}
//                       >
//                         {record.status || '—'}
//                       </span>
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell">
//                       {record.workHours || '—'}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div className="p-8 text-center">
//             <p className="text-gray-500 text-sm">
//               {selectedDate 
//                 ? "No attendance records found for the selected date." 
//                 : "No attendance records found yet."}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Optional summary stats – nice touch */}
//       {filteredRecords.length > 0 && (
//         <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
//           <div className="bg-white p-4 rounded-lg shadow-sm border">
//             <p className="text-2xl font-bold text-green-600">
//               {filteredRecords.filter(r => r.status?.toLowerCase() === 'present').length}
//             </p>
//             <p className="text-xs text-gray-500 mt-1">Present Days</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-sm border">
//             <p className="text-2xl font-bold text-red-600">
//               {filteredRecords.filter(r => r.status?.toLowerCase() === 'absent').length}
//             </p>
//             <p className="text-xs text-gray-500 mt-1">Absent Days</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserAttendance;