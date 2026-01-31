// import React from 'react'
// import { useEffect, useState } from 'react'
// import DatePicker from 'react-datepicker'
// import mockAttendanceData from '../../data/mockAttendanceData';


// function UserAttendance({setTitle}) {

//   const [selectedDate,setSelectedDate] = useState(null);
//   const current_user_name = "Ali Hamza";

//   const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : null;

//   const userRecords = mockAttendanceData.filter(record =>
//     record.name.toLowerCase() === current_user_name.toLowerCase()
//   );

//   const filteredRecords = formattedDate ? userRecords.filter(record => record.date === formattedDate) : userRecords;


//  useEffect(() => {
//     setTitle('Attendance Page')
//   }, [setTitle])
  
//   return (
//     <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
//       <h1 className='text-2xl sm:text-3xl lg:text-3xl font-bold text-[#2C5284] mb-6'>My Attendance</h1>

//       <div className='mb-4'>
//       <label className='block text-sm font-medium text-black mb-1 '>
//         Search Through Date
//       </label>
//       <DatePicker
//       selected={selectedDate}
//       onChange={setSelectedDate}
//       dateFormat="yyyy-MM-dd"
//       isClearable
//       placeholderText='Search...'
//       className='cursor-pointer w-full max-w-sm px-4 py-2.5
//       border border-gray-500 rounded-lg mt-1 '
//       />
//       </div>
    
//       {/* For Desktop View */}
//       <div className='bg-white rounded-xl shadow-sm lg:block hidden 
//       overflow-hidden'>
//       <div className='overflow-x-auto'>
//        <table className='min-w-full divide-y divide-gray-200'>
//         <thead className='bg-[#365F8D]'>
//           <tr>
//             <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Employee Name</th>
//             <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Date</th>
//             <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Clock In</th>
//             <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Clock Out</th>
//             <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Status</th>
//             <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Work Hours</th>
//           </tr>
//         </thead>
//         <tbody className='divide-y bg-white divide-gray-200'>
//           {filteredRecords.length > 0 ? (
//           filteredRecords.map((record) => (
//             <tr key={record.id} className='hover:bg-gray-50 transition-colors duration-150'>
//               <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
//               {record.name}</td>
//               <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.date}</td>
//               <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.checkIn}</td>
//               <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.checkOut || '-'}</td>
//               <td className='px-6 py-4 text-sm font-medium text-black'>
//                     <span className={`px-3 py-1 inline-flex text-sm leading-5 font-medium
//                       rounded-full ${record.status.toLowerCase() === 'present' 
//                         ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                       }`}>{record.status}</span>
//                   </td>
//               <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.workHours || '-'}</td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">
//                <div className="flex flex-col items-center">
//                   <p className="font-medium text-gray-900 mb-1">No records found</p>
//                   <p className="text-gray-500">
//                   {selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
//                   </p>
//                   </div>
//            </td>
//           </tr>
//         )}
//           </tbody>
//           </table>
//           </div>
          
//     </div>

//    {/* For Mobile and Tablet View */}
//     <div className='space-y-4 lg:hidden mt-6'>
//       {filteredRecords.length > 0 ? (
//         filteredRecords.map((record) => (
//           <div key={record.id} className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow '>
//             <div className='flex justify-between items-start mb-3'>
//             <div>
//               <h3 className='text-base sm:text-lg font-semibold text-black'>{record.name}</h3>
//               <p className='text-black text-sm mt-1'>{record.date}</p>
//             </div>
//              <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${record.status.toLowerCase() === 'present' 
//               ? 'text-green-800 bg-green-100' : 'bg-red-100 text-red-800'
//             }`}>{record.status}</span>
//             </div>

//             <div className='grid grid-cols-2 gap-3 sm:gap-4'>
//             <div>
//               <p className='text-black mb-1 text-sm'>Check-In</p>
//               <p className='text-sm sm:text-base font-medium text-black'>{record.checkIn}</p>
//             </div>
//             <div>
//             <p className='text-black mb-1 text-sm'>Check-Out</p>
//               <p className='text-sm sm:text-base font-medium
//               text-black'>{record.checkOut || '-'}</p>
//             </div>
//             <div className='col-span-2'>
//               <p className='text-sm text-black mb-1
//               '>Work Hours</p>
//               <p className='text-sm sm:text-base font-medium text-black'>{record.workHours || '-'}</p>
//             </div>
//             </div>
//           </div>
//         ))
//       ) : (
//          <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mt-2 items-center">
//             <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No records found</p>
//             <p className="text-sm sm:text-base text-gray-500">
//               {selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
//             </p>
//           </div>
//       )}
//     </div>
//   </div>
//   )
// }

// export default UserAttendance















// import React, { useEffect, useState } from 'react';
// import { getEmployeeRecords } from '../../data/mockAttendanceData';
// import { FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

// function UserAttendance({ setTitle }) {
//   // In real app, get this from auth context
//   const currentUserId = 1; // Ali Hamza
  
//   const [records, setRecords] = useState([]);
//   const [filteredRecords, setFilteredRecords] = useState([]);
  
//   // Dropdown states
//   const [selectedYear, setSelectedYear] = useState(2026);
//   const [selectedMonth, setSelectedMonth] = useState(1);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showYearDropdown, setShowYearDropdown] = useState(false);
//   const [showMonthDropdown, setShowMonthDropdown] = useState(false);
//   const [showDateDropdown, setShowDateDropdown] = useState(false);

//   const years = [2024, 2025, 2026];
//   const months = [
//     { value: 1, label: 'January' },
//     { value: 2, label: 'February' },
//     { value: 3, label: 'March' },
//     { value: 4, label: 'April' },
//     { value: 5, label: 'May' },
//     { value: 6, label: 'June' },
//     { value: 7, label: 'July' },
//     { value: 8, label: 'August' },
//     { value: 9, label: 'September' },
//     { value: 10, label: 'October' },
//     { value: 11, label: 'November' },
//     { value: 12, label: 'December' }
//   ];

//   useEffect(() => {
//     setTitle('My Attendance');
//     const userRecords = getEmployeeRecords(currentUserId);
//     setRecords(userRecords);
//     filterRecords(userRecords, selectedYear, selectedMonth, selectedDate);
//   }, [setTitle]);

//   useEffect(() => {
//     filterRecords(records, selectedYear, selectedMonth, selectedDate);
//   }, [selectedYear, selectedMonth, selectedDate, records]);

//   const filterRecords = (allRecords, year, month, date) => {
//     let filtered = allRecords.filter(record => {
//       const recordDate = new Date(record.date);
//       const recordYear = recordDate.getFullYear();
//       const recordMonth = recordDate.getMonth() + 1;
      
//       if (year && recordYear !== year) return false;
//       if (month && recordMonth !== month) return false;
//       if (date && recordDate.getDate() !== date) return false;
      
//       return true;
//     });
    
//     setFilteredRecords(filtered);
//   };

//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month, 0).getDate();
//   };

//   const getStatusIcon = (status) => {
//     if (status === 'Present') {
//       return <FaCheckCircle className='text-green-600' size={20} />;
//     } else if (status === 'Leave') {
//       return <FaCalendarAlt className='text-yellow-600' size={20} />;
//     } else {
//       return <FaTimesCircle className='text-red-600' size={20} />;
//     }
//   };

//   const getStatusForDate = (date) => {
//     const dateStr = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
//     const record = records.find(r => r.date === dateStr);
//     return record ? record.status : null;
//   };

//   return (
//     <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
//       <h1 className='text-2xl sm:text-3xl font-bold text-[#2C5284] mb-6'>My Attendance</h1>

//       {/* Filter Section */}
//       <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6'>
//         <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
//           {/* Year Dropdown */}
//           <div className='relative'>
//             <label className='block text-sm font-medium text-black mb-2'>Year</label>
//             <button
//               onClick={() => {
//                 setShowYearDropdown(!showYearDropdown);
//                 setShowMonthDropdown(false);
//                 setShowDateDropdown(false);
//               }}
//               className='w-full px-4 py-2.5 border border-gray-500 rounded-lg text-left flex justify-between items-center hover:border-[#365F8D] transition-colors'
//             >
//               <span>{selectedYear}</span>
//               <FaChevronDown size={12} />
//             </button>
//             {showYearDropdown && (
//               <div className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto'>
//                 {years.map(year => (
//                   <button
//                     key={year}
//                     onClick={() => {
//                       setSelectedYear(year);
//                       setShowYearDropdown(false);
//                       setSelectedDate(null);
//                     }}
//                     className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
//                       selectedYear === year ? 'bg-[#365F8D] text-white hover:bg-[#2C5284]' : ''
//                     }`}
//                   >
//                     {year}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Month Dropdown */}
//           <div className='relative'>
//             <label className='block text-sm font-medium text-black mb-2'>Month</label>
//             <button
//               onClick={() => {
//                 setShowMonthDropdown(!showMonthDropdown);
//                 setShowYearDropdown(false);
//                 setShowDateDropdown(false);
//               }}
//               className='w-full px-4 py-2.5 border border-gray-500 rounded-lg text-left flex justify-between items-center hover:border-[#365F8D] transition-colors'
//             >
//               <span>{months.find(m => m.value === selectedMonth)?.label}</span>
//               <FaChevronDown size={12} />
//             </button>
//             {showMonthDropdown && (
//               <div className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
//                 {months.map(month => (
//                   <button
//                     key={month.value}
//                     onClick={() => {
//                       setSelectedMonth(month.value);
//                       setShowMonthDropdown(false);
//                       setSelectedDate(null);
//                     }}
//                     className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
//                       selectedMonth === month.value ? 'bg-[#365F8D] text-white hover:bg-[#2C5284]' : ''
//                     }`}
//                   >
//                     {month.label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Date Dropdown */}
//           <div className='relative'>
//             <label className='block text-sm font-medium text-black mb-2'>Date (Optional)</label>
//             <button
//               onClick={() => {
//                 setShowDateDropdown(!showDateDropdown);
//                 setShowYearDropdown(false);
//                 setShowMonthDropdown(false);
//               }}
//               className='w-full px-4 py-2.5 border border-gray-500 rounded-lg text-left flex justify-between items-center hover:border-[#365F8D] transition-colors'
//             >
//               <span>{selectedDate || 'All Dates'}</span>
//               <FaChevronDown size={12} />
//             </button>
//             {showDateDropdown && (
//               <div className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
//                 <button
//                   onClick={() => {
//                     setSelectedDate(null);
//                     setShowDateDropdown(false);
//                   }}
//                   className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
//                     !selectedDate ? 'bg-[#365F8D] text-white hover:bg-[#2C5284]' : ''
//                   }`}
//                 >
//                   All Dates
//                 </button>
//                 {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, i) => i + 1).map(date => (
//                   <button
//                     key={date}
//                     onClick={() => {
//                       setSelectedDate(date);
//                       setShowDateDropdown(false);
//                     }}
//                     className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
//                       selectedDate === date ? 'bg-[#365F8D] text-white hover:bg-[#2C5284]' : ''
//                     }`}
//                   >
//                     {date}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Icon Legend */}
//       <div className='bg-white rounded-xl shadow-sm p-4 mb-6'>
//         <h3 className='text-sm font-semibold text-black mb-3'>Status Legend</h3>
//         <div className='flex flex-wrap gap-4'>
//           <div className='flex items-center gap-2'>
//             <FaCheckCircle className='text-green-600' size={16} />
//             <span className='text-sm text-gray-700'>Present</span>
//           </div>
//           <div className='flex items-center gap-2'>
//             <FaCalendarAlt className='text-yellow-600' size={16} />
//             <span className='text-sm text-gray-700'>Leave</span>
//           </div>
//           <div className='flex items-center gap-2'>
//             <FaTimesCircle className='text-red-600' size={16} />
//             <span className='text-sm text-gray-700'>Absent</span>
//           </div>
//         </div>
//       </div>

//       {/* Month View - Show all dates when no specific date selected */}
//       {!selectedDate && (
//         <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6'>
//           <h3 className='text-lg font-bold text-[#2C5284] mb-4'>
//             {months.find(m => m.value === selectedMonth)?.label} {selectedYear} - Full Month View
//           </h3>
//           <div className='grid grid-cols-7 gap-2'>
//             {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, i) => i + 1).map(date => {
//               const status = getStatusForDate(date);
//               return (
//                 <div
//                   key={date}
//                   className='flex flex-col items-center p-3 border rounded-lg hover:shadow-md transition-shadow'
//                 >
//                   <span className='text-sm font-semibold text-gray-700 mb-2'>{date}</span>
//                   {status ? (
//                     <div className='flex items-center justify-center'>
//                       {getStatusIcon(status)}
//                     </div>
//                   ) : (
//                     <div className='text-gray-400 text-xs'>No Data</div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Desktop Table View */}
//       <div className='bg-white rounded-xl shadow-sm lg:block hidden overflow-hidden'>
//         <div className='overflow-x-auto'>
//           <table className='min-w-full divide-y divide-gray-200'>
//             <thead className='bg-[#365F8D]'>
//               <tr>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Date</th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Clock In</th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Clock Out</th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Work Hours</th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Status</th>
//               </tr>
//             </thead>
//             <tbody className='divide-y bg-white divide-gray-200'>
//               {filteredRecords.length > 0 ? (
//                 filteredRecords.map((record) => (
//                   <tr key={record.id} className='hover:bg-gray-50 transition-colors duration-150'>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
//                       {record.date}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.checkIn}</td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.checkOut || '-'}</td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.workHours || '-'}</td>
//                     <td className='px-6 py-4 text-sm font-medium text-black'>
//                       <div className='flex items-center gap-2'>
//                         {getStatusIcon(record.status)}
//                         <span className={`px-3 py-1 inline-flex text-sm leading-5 font-medium
//                           rounded-full ${record.status === 'Present' 
//                             ? 'bg-green-100 text-green-800' 
//                             : record.status === 'Leave'
//                             ? 'bg-yellow-100 text-yellow-800'
//                             : 'bg-red-100 text-red-800'
//                           }`}>{record.status}</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-500">
//                     <div className="flex flex-col items-center">
//                       <p className="font-medium text-gray-900 mb-1">No records found</p>
//                       <p className="text-gray-500">
//                         No attendance data available for the selected period
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Mobile and Tablet Card View */}
//       <div className='space-y-4 lg:hidden mt-6'>
//         {filteredRecords.length > 0 ? (
//           filteredRecords.map((record) => (
//             <div key={record.id} className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow'>
//               <div className='flex justify-between items-start mb-3'>
//                 <div>
//                   <p className='text-black text-sm mt-1 font-semibold'>{record.date}</p>
//                 </div>
//                 <div className='flex items-center gap-2'>
//                   {getStatusIcon(record.status)}
//                   <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${
//                     record.status === 'Present' 
//                       ? 'text-green-800 bg-green-100' 
//                       : record.status === 'Leave'
//                       ? 'bg-yellow-100 text-yellow-800'
//                       : 'bg-red-100 text-red-800'
//                   }`}>{record.status}</span>
//                 </div>
//               </div>

//               <div className='grid grid-cols-2 gap-3 sm:gap-4'>
//                 <div>
//                   <p className='text-black mb-1 text-sm'>Check-In</p>
//                   <p className='text-sm sm:text-base font-medium text-black'>{record.checkIn}</p>
//                 </div>
//                 <div>
//                   <p className='text-black mb-1 text-sm'>Check-Out</p>
//                   <p className='text-sm sm:text-base font-medium text-black'>{record.checkOut || '-'}</p>
//                 </div>
//                 <div className='col-span-2'>
//                   <p className='text-sm text-black mb-1'>Work Hours</p>
//                   <p className='text-sm sm:text-base font-medium text-black'>{record.workHours || '-'}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mt-2 items-center">
//             <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No records found</p>
//             <p className="text-sm sm:text-base text-gray-500">
//               No attendance data available for the selected period
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UserAttendance;
















// import React, { useEffect, useState } from 'react';
// import { getEmployeeRecords } from '../../data/mockAttendanceData';
// import { FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// function UserAttendance({ setTitle }) {
//   // In real app, get this from auth context
//   const currentUserId = 1; // Ali Hamza
  
//   const [records, setRecords] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState(1);
//   const [selectedYear, setSelectedYear] = useState(2026);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
  
//   const recordsPerPage = 10;

//   const months = [
//     { value: 1, label: 'January', short: 'Jan' },
//     { value: 2, label: 'February', short: 'Feb' },
//     { value: 3, label: 'March', short: 'Mar' },
//     { value: 4, label: 'April', short: 'Apr' },
//     { value: 5, label: 'May', short: 'May' },
//     { value: 6, label: 'June', short: 'Jun' },
//     { value: 7, label: 'July', short: 'Jul' },
//     { value: 8, label: 'August', short: 'Aug' },
//     { value: 9, label: 'September', short: 'Sep' },
//     { value: 10, label: 'October', short: 'Oct' },
//     { value: 11, label: 'November', short: 'Nov' },
//     { value: 12, label: 'December', short: 'Dec' }
//   ];

//   useEffect(() => {
//     setTitle('My Attendance');
//     const userRecords = getEmployeeRecords(currentUserId);
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setRecords(userRecords);
//   }, [setTitle]);

//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month, 0).getDate();
//   };

//   const getRecordForDate = (date) => {
//     const dateStr = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
//     return records.find(r => r.date === dateStr);
//   };

//   const getDayName = (date) => {
//     const dateObj = new Date(selectedYear, selectedMonth - 1, date);
//     return dateObj.toLocaleDateString('en-US', { weekday: 'short' });
//   };

//   const getStatusIcon = (status) => {
//     if (status === 'Present') return '✓';
//     if (status === 'Leave') return '●';
//     if (status === 'Absent') return '×';
//     return '';
//   };

//   const getStatusIconComponent = (status) => {
//     if (status === 'Present') {
//       return <FaCheckCircle className='text-green-600' size={18} />;
//     } else if (status === 'Leave') {
//       return <FaCalendarAlt className='text-yellow-600' size={18} />;
//     } else {
//       return <FaTimesCircle className='text-red-600' size={18} />;
//     }
//   };

//   const selectedRecord = selectedDate ? getRecordForDate(selectedDate) : null;

//   // Filter records by selected month/year
//   const filteredRecords = records.filter(record => {
//     const recordDate = new Date(record.date);
//     const recordYear = recordDate.getFullYear();
//     const recordMonth = recordDate.getMonth() + 1;
    
//     return recordYear === selectedYear && recordMonth === selectedMonth;
//   });

//   // Pagination for table
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
//   const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   // Calculate work hours in hours and minutes
//   const calculateWorkDuration = (workHours) => {
//     if (!workHours || workHours === '------') return null;
//     const match = workHours.match(/(\d+)h\s*(\d+)?m?/);
//     if (match) {
//       const hours = parseInt(match[1]);
//       const minutes = match[2] ? parseInt(match[2]) : 0;
//       return { hours, minutes, total: hours + minutes / 60 };
//     }
//     return null;
//   };

//   const workDuration = selectedRecord ? calculateWorkDuration(selectedRecord.workHours) : null;

//   return (
//     <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
//       <h1 className='text-2xl sm:text-3xl font-bold text-[#2C5284] mb-6'>My Attendance</h1>

//       {/* Month/Year Selector */}
//       <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
//           <div>
//             <label className='block text-sm font-medium text-gray-700 mb-2'>Month</label>
//             <select
//               value={selectedMonth}
//               onChange={(e) => {
//                 setSelectedMonth(parseInt(e.target.value));
//                 setSelectedDate(null);
//                 setCurrentPage(1);
//               }}
//               className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#365F8D] focus:border-transparent'
//             >
//               {months.map(month => (
//                 <option key={month.value} value={month.value}>
//                   {month.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className='block text-sm font-medium text-gray-700 mb-2'>Year</label>
//             <select
//               value={selectedYear}
//               onChange={(e) => {
//                 setSelectedYear(parseInt(e.target.value));
//                 setSelectedDate(null);
//                 setCurrentPage(1);
//               }}
//               className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#365F8D] focus:border-transparent'
//             >
//               <option value={2024}>2024</option>
//               <option value={2025}>2025</option>
//               <option value={2026}>2026</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className='px-6 py-4 bg-white rounded-xl shadow-sm mb-6'>
//         <div className='flex flex-wrap gap-6 text-sm'>
//           <div className='flex items-center gap-2'>
//             <span className='font-bold'>Note:</span>
//           </div>
//           <div className='flex items-center gap-2'>
//             <span className='text-green-600 font-bold'>✓</span>
//             <span>→ Present</span>
//           </div>
//           <div className='flex items-center gap-2'>
//             <span className='text-yellow-600 font-bold'>●</span>
//             <span>→ Late / Leave</span>
//           </div>
//           <div className='flex items-center gap-2'>
//             <span className='text-red-600 font-bold'>×</span>
//             <span>→ Absent</span>
//           </div>
//         </div>
//       </div>

//       {/* Horizontal Calendar */}
//       <div className='bg-white rounded-xl shadow-sm p-6 mb-6 overflow-x-auto'>
//         <h3 className='text-lg font-bold text-[#2C5284] mb-4'>
//           {months.find(m => m.value === selectedMonth)?.label} {selectedYear} - Full Month View
//         </h3>
//         <div className='inline-flex gap-1 min-w-full'>
//           {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, i) => i + 1).map(date => {
//             const record = getRecordForDate(date);
//             const dayName = getDayName(date);
//             const isSelected = selectedDate === date;
            
//             return (
//               <button
//                 key={date}
//                 onClick={() => setSelectedDate(date)}
//                 className={`flex flex-col items-center px-3 py-2 border rounded-lg transition-all min-w-[60px] ${
//                   isSelected 
//                     ? 'bg-[#365F8D] text-white border-[#365F8D]' 
//                     : 'bg-white hover:bg-gray-50 border-gray-300'
//                 }`}
//               >
//                 <span className='text-xs font-medium mb-1'>{date}</span>
//                 <span className='text-[10px] mb-1 opacity-70'>{dayName}</span>
//                 {record ? (
//                   <span className={`text-lg font-bold ${
//                     isSelected 
//                       ? 'text-white' 
//                       : record.status === 'Present' 
//                         ? 'text-green-600' 
//                         : record.status === 'Leave'
//                         ? 'text-yellow-600'
//                         : 'text-red-600'
//                   }`}>
//                     {getStatusIcon(record.status)}
//                   </span>
//                 ) : (
//                   <span className='text-gray-300 text-xs'>-</span>
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Details Section when date selected */}
//       {selectedRecord ? (
//         <div className='bg-white rounded-xl shadow-sm p-6 mb-6'>
//           <h3 className='text-lg font-bold text-[#2C5284] mb-6'>
//             Details for {selectedDate}-{String(selectedMonth).padStart(2, '0')}-{selectedYear}
//           </h3>
          
//           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//             {/* Left Side */}
//             <div className='space-y-6'>
//               <div>
//                 <p className='text-sm text-gray-600 mb-1'>Clock In</p>
//                 <p className='text-2xl font-bold text-gray-900'>{selectedRecord.checkIn}</p>
//               </div>

//               {/* Circular Progress */}
//               {workDuration && (
//                 <div className='flex justify-center'>
//                   <div className='relative w-48 h-48'>
//                     <svg className='w-full h-full transform -rotate-90'>
//                       <circle
//                         cx='96'
//                         cy='96'
//                         r='88'
//                         stroke='#e5e7eb'
//                         strokeWidth='8'
//                         fill='none'
//                       />
//                       <circle
//                         cx='96'
//                         cy='96'
//                         r='88'
//                         stroke='#365F8D'
//                         strokeWidth='8'
//                         fill='none'
//                         strokeDasharray={`${(workDuration.total / 24) * 552.92} 552.92`}
//                         strokeLinecap='round'
//                       />
//                     </svg>
//                     <div className='absolute inset-0 flex items-center justify-center'>
//                       <span className='text-2xl font-bold text-gray-900'>
//                         {selectedRecord.workHours}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div>
//                 <p className='text-sm text-gray-600 mb-1'>Clock Out</p>
//                 <p className='text-xl font-bold text-gray-900'>
//                   {selectedRecord.checkOut === '------' 
//                     ? '00:00 pm (Did not clock out)' 
//                     : selectedRecord.checkOut}
//                 </p>
//               </div>
//             </div>

//             {/* Right Side - Activity */}
//             <div>
//               <h4 className='text-lg font-bold text-gray-900 mb-4'>Activity</h4>
//               <div className='space-y-4'>
//                 <div className='flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200'>
//                   <div className='mt-1'>
//                     {getStatusIconComponent(selectedRecord.status)}
//                   </div>
//                   <div className='flex-1'>
//                     <div className='flex items-center gap-2 mb-1'>
//                       <p className='font-semibold text-gray-900'>Clock In</p>
//                       <span className='px-2 py-0.5 bg-green-600 text-white text-xs rounded-full'>
//                         General Shift
//                       </span>
//                     </div>
//                     <p className='text-sm text-gray-600'>
//                       ⏰ {selectedDate}-01-{selectedYear} {selectedRecord.checkIn}
//                     </p>
//                     {selectedRecord.status === 'Present' && (
//                       <div className='flex items-center gap-1 text-sm text-gray-600 mt-1'>
//                         <FaMapMarkerAlt size={12} />
//                         <span>Lahore, Punjab</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {selectedRecord.checkOut !== '------' && (
//                   <div className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200'>
//                     <div className='mt-1'>
//                       <FaTimesCircle className='text-gray-600' size={18} />
//                     </div>
//                     <div className='flex-1'>
//                       <p className='font-semibold text-gray-900 mb-1'>Clock Out</p>
//                       <p className='text-sm text-gray-600'>
//                         ⏰ {selectedDate}-01-{selectedYear} {selectedRecord.checkOut}
//                       </p>
//                       <div className='flex items-center gap-1 text-sm text-gray-600 mt-1'>
//                         <FaMapMarkerAlt size={12} />
//                         <span>Lahore, Punjab</span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : null}

//       {/* Records Table */}
//       <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
//         <div className='p-4 bg-[#365F8D] flex justify-between items-center'>
//           <h3 className='text-lg font-bold text-white'>Monthly Records</h3>
//           {totalPages > 1 && (
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={handlePrevPage}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded-lg ${
//                   currentPage === 1
//                     ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
//                     : 'bg-white text-[#365F8D] hover:bg-gray-100'
//                 }`}
//               >
//                 <FaChevronLeft size={14} />
//               </button>
//               <span className="text-white text-sm">
//                 {currentPage} / {totalPages}
//               </span>
//               <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//                 className={`p-2 rounded-lg ${
//                   currentPage === totalPages
//                     ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
//                     : 'bg-white text-[#365F8D] hover:bg-gray-100'
//                 }`}
//               >
//                 <FaChevronRight size={14} />
//               </button>
//             </div>
//           )}
//         </div>
        
//         <div className='overflow-x-auto'>
//           <table className='min-w-full divide-y divide-gray-200'>
//             <thead className='bg-gray-50'>
//               <tr>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Date
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Clock In
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Clock Out
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Work Hours
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className='bg-white divide-y divide-gray-200'>
//               {currentRecords.length > 0 ? (
//                 currentRecords.map((record) => (
//                   <tr key={record.id} className='hover:bg-gray-50'>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
//                       {record.date}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
//                       {record.checkIn}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
//                       {record.checkOut}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
//                       {record.workHours}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap'>
//                       <div className='flex items-center gap-2'>
//                         {getStatusIconComponent(record.status)}
//                         <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           record.status === 'Present' 
//                             ? 'bg-green-100 text-green-800' 
//                             : record.status === 'Leave'
//                             ? 'bg-yellow-100 text-yellow-800'
//                             : 'bg-red-100 text-red-800'
//                         }`}>
//                           {record.status}
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={5} className='px-6 py-8 text-center text-sm text-gray-500'>
//                     No records found for this month
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserAttendance;







// import React, { useEffect, useState } from 'react';
// import { FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// // Mock function – replace with real API / context later
// const getEmployeeRecords = (userId) => {
//   // This is just example – in real app fetch from API or context
//   return [
//     { id: 1, date: '2026-01-01', checkIn: '09:02 AM', checkOut: '06:15 PM', workHours: '9h 13m', status: 'Present' },
//     { id: 2, date: '2026-01-02', checkIn: '09:10 AM', checkOut: '------', workHours: '------', status: 'Absent' },
//     { id: 3, date: '2026-01-03', checkIn: '08:55 AM', checkOut: '05:48 PM', workHours: '8h 53m', status: 'Present' },
//     // ... add more for testing
//   ];
// };

// function UserAttendance({ setTitle }) {
//   const currentUserId = 1; // Replace with real user ID from AuthContext

//   const [records, setRecords] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);

//   const recordsPerPage = 10;

//   const months = [
//     { value: 1, label: 'January', short: 'Jan' },
//     { value: 2, label: 'February', short: 'Feb' },
//     { value: 3, label: 'March', short: 'Mar' },
//     { value: 4, label: 'April', short: 'Apr' },
//     { value: 5, label: 'May', short: 'May' },
//     { value: 6, label: 'June', short: 'Jun' },
//     { value: 7, label: 'July', short: 'Jul' },
//     { value: 8, label: 'August', short: 'Aug' },
//     { value: 9, label: 'September', short: 'Sep' },
//     { value: 10, label: 'October', short: 'Oct' },
//     { value: 11, label: 'November', short: 'Nov' },
//     { value: 12, label: 'December', short: 'Dec' },
//   ];

//   useEffect(() => {
//     setTitle('My Attendance');
//     const userRecords = getEmployeeRecords(currentUserId);
//     setRecords(userRecords || []);
//   }, [setTitle]);

//   // Days in selected month
//   const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

//   const getRecordForDate = (day) => {
//     const dateStr = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//     return records.find(r => r.date === dateStr);
//   };

//   const getDayName = (day) => {
//     const dateObj = new Date(selectedYear, selectedMonth - 1, day);
//     return dateObj.toLocaleDateString('en-US', { weekday: 'short' });
//   };

//   const getStatusIcon = (status) => {
//     switch (status?.toLowerCase()) {
//       case 'present': return <FaCheckCircle className="text-green-600" size={20} />;
//       case 'leave': return <FaCalendarAlt className="text-amber-600" size={20} />;
//       case 'absent': return <FaTimesCircle className="text-red-600" size={20} />;
//       default: return <span className="text-gray-400">-</span>;
//     }
//   };

//   const selectedRecord = selectedDate ? getRecordForDate(selectedDate) : null;

//   // Filter for table
//   const filteredRecords = records.filter(r => {
//     const d = new Date(r.date);
//     return d.getFullYear() === selectedYear && (d.getMonth() + 1) === selectedMonth;
//   });

//   // Pagination
//   const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);
//   const indexOfLast = currentPage * recordsPerPage;
//   const indexOfFirst = indexOfLast - recordsPerPage;
//   const currentRecords = filteredRecords.slice(indexOfFirst, indexOfLast);

//   const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
//   const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

//   // Calculate duration for circular progress
//   const calculateDuration = (hoursStr) => {
//     if (!hoursStr || hoursStr === '------') return 0;
//     const [h, m] = hoursStr.split('h').map(s => parseFloat(s.trim().replace('m', '')) || 0);
//     return (h || 0) + (m || 0) / 60;
//   };

//   const durationHours = selectedRecord ? calculateDuration(selectedRecord.workHours) : 0;

//   return (
//     <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
//       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C5284] mb-6">
//         My Attendance
//       </h1>

//       {/* Month & Year Selector */}
//       <div className="bg-white rounded-xl shadow p-5 sm:p-6 mb-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
//             <select
//               value={selectedMonth}
//               onChange={(e) => {
//                 setSelectedMonth(Number(e.target.value));
//                 setSelectedDate(null);
//                 setCurrentPage(1);
//               }}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#365F8D] focus:border-[#365F8D] text-sm sm:text-base"
//             >
//               {months.map(m => (
//                 <option key={m.value} value={m.value}>{m.label}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
//             <select
//               value={selectedYear}
//               onChange={(e) => {
//                 setSelectedYear(Number(e.target.value));
//                 setSelectedDate(null);
//                 setCurrentPage(1);
//               }}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#365F8D] focus:border-[#365F8D] text-sm sm:text-base"
//             >
//               <option value={2024}>2024</option>
//               <option value={2025}>2025</option>
//               <option value={2026}>2026</option>
//               <option value={2027}>2027</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="bg-white rounded-xl shadow p-4 sm:p-5 mb-6">
//         <div className="flex flex-wrap gap-5 sm:gap-8 text-sm">
//           <div className="flex items-center gap-2">
//             <FaCheckCircle className="text-green-600" size={18} /> Present
//           </div>
//           <div className="flex items-center gap-2">
//             <FaCalendarAlt className="text-amber-600" size={18} /> Leave
//           </div>
//           <div className="flex items-center gap-2">
//             <FaTimesCircle className="text-red-600" size={18} /> Absent
//           </div>
//         </div>
//       </div>

//       {/* Horizontal Calendar */}
//       <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-8 overflow-x-auto">
//         <h2 className="text-lg sm:text-xl font-bold text-[#2C5284] mb-4">
//           {months.find(m => m.value === selectedMonth)?.label} {selectedYear}
//         </h2>

//         <div className="flex gap-2 pb-2 min-w-[max-content]">
//           {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
//             const record = getRecordForDate(day);
//             const isSelected = selectedDate === day;

//             return (
//               <button
//                 key={day}
//                 onClick={() => setSelectedDate(day)}
//                 className={`flex flex-col items-center min-w-[60px] sm:min-w-[70px] p-2 sm:p-3 border rounded-lg transition-all ${
//                   isSelected
//                     ? 'bg-[#365F8D] text-white border-[#365F8D] shadow-md'
//                     : 'hover:bg-gray-50 border-gray-200'
//                 }`}
//               >
//                 <span className="text-xs sm:text-sm font-medium">{day}</span>
//                 <span className="text-[10px] sm:text-xs opacity-70 mb-1">
//                   {new Date(selectedYear, selectedMonth - 1, day).toLocaleDateString('en-US', { weekday: 'short' })}
//                 </span>
//                 <div className="mt-1">{getStatusIcon(record?.status)}</div>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Selected Date Details */}
//       {selectedRecord && (
//         <div className="bg-white rounded-xl shadow p-5 sm:p-6 mb-8">
//           <h3 className="text-lg sm:text-xl font-bold text-[#2C5284] mb-6">
//             Details for {selectedDate} {months.find(m => m.value === selectedMonth)?.short} {selectedYear}
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
//             {/* Left - Times & Progress */}
//             <div className="space-y-8">
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-sm text-gray-600 mb-1">Clock In</p>
//                   <p className="text-xl sm:text-2xl font-bold text-gray-900">{selectedRecord.checkIn || '—'}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-600 mb-1">Clock Out</p>
//                   <p className="text-xl sm:text-2xl font-bold text-gray-900">
//                     {selectedRecord.checkOut === '------' ? 'Not Clocked Out' : selectedRecord.checkOut}
//                   </p>
//                 </div>
//               </div>

//               {durationHours > 0 && (
//                 <div className="flex justify-center">
//                   <div className="relative w-44 h-44 sm:w-52 sm:h-52">
//                     <svg className="w-full h-full -rotate-90">
//                       <circle cx="50%" cy="50%" r="42%" stroke="#e5e7eb" strokeWidth="12" fill="none" />
//                       <circle
//                         cx="50%"
//                         cy="50%"
//                         r="42%"
//                         stroke="#365F8D"
//                         strokeWidth="12"
//                         fill="none"
//                         strokeDasharray={`${(durationHours / 12) * 263} 263`}
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                     <div className="absolute inset-0 flex flex-col items-center justify-center">
//                       <span className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedRecord.workHours}</span>
//                       <span className="text-xs sm:text-sm text-gray-500">Hours</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Right - Activity Log */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Activity Log</h4>
//               <div className="space-y-4">
//                 <div className="p-4 bg-green-50 rounded-lg border border-green-200">
//                   <div className="flex items-start gap-3">
//                     <FaCheckCircle className="text-green-600 mt-1" size={20} />
//                     <div>
//                       <p className="font-medium text-gray-900">Clocked In</p>
//                       <p className="text-sm text-gray-600">
//                         {selectedRecord.checkIn} • {selectedRecord.date}
//                       </p>
//                       <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
//                         <FaMapMarkerAlt size={14} />
//                         <span>Lahore, Punjab</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {selectedRecord.checkOut !== '------' && (
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                     <div className="flex items-start gap-3">
//                       <FaTimesCircle className="text-gray-600 mt-1" size={20} />
//                       <div>
//                         <p className="font-medium text-gray-900">Clocked Out</p>
//                         <p className="text-sm text-gray-600">
//                           {selectedRecord.checkOut} • {selectedRecord.date}
//                         </p>
//                         <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
//                           <FaMapMarkerAlt size={14} />
//                           <span>Lahore, Punjab</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Monthly Table with Pagination */}
//       <div className="bg-white rounded-xl shadow overflow-hidden">
//         <div className="p-4 sm:p-5 bg-[#365F8D] flex flex-col sm:flex-row justify-between items-center gap-4">
//           <h3 className="text-lg sm:text-xl font-bold text-white">Monthly Records</h3>

//           {totalPages > 1 && (
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={handlePrevPage}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
//               >
//                 <FaChevronLeft className="text-[#365F8D]" size={16} />
//               </button>
//               <span className="text-white font-medium">
//                 {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//                 className={`p-2 rounded ${currentPage === totalPages ? 'bg-gray-500 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
//               >
//                 <FaChevronRight className="text-[#365F8D]" size={16} />
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock In</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock Out</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {currentRecords.length > 0 ? (
//                 currentRecords.map(record => (
//                   <tr key={record.id} className="hover:bg-gray-50 transition-colors">
//                     <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{record.checkIn || '—'}</td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{record.checkOut || '—'}</td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{record.workHours || '—'}</td>
//                     <td className="px-4 py-4 whitespace-nowrap">
//                       <div className="flex items-center gap-2">
//                         {getStatusIcon(record.status)}
//                         <span
//                           className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${
//                             record.status === 'Present' ? 'bg-green-100 text-green-800' :
//                             record.status === 'Leave' ? 'bg-amber-100 text-amber-800' :
//                             'bg-red-100 text-red-800'
//                           }`}
//                         >
//                           {record.status}
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
//                     No attendance records found for {months.find(m => m.value === selectedMonth)?.label} {selectedYear}
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserAttendance;











// import React, { useEffect, useState } from 'react'
// import {
//   FaCheckCircle,
//   FaTimesCircle,
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaChevronLeft,
//   FaChevronRight,
// } from 'react-icons/fa'

// // Mock data (replace with API / context later)
// const getEmployeeRecords = () => [
//   {
//     id: 1,
//     date: '2026-01-01',
//     checkIn: '09:02 AM',
//     checkOut: '06:15 PM',
//     workHours: '9h 13m',
//     status: 'Present',
//   },
//   {
//     id: 2,
//     date: '2026-01-02',
//     checkIn: '------',
//     checkOut: '------',
//     workHours: '------',
//     status: 'Absent',
//   },
//   {
//     id: 3,
//     date: '2026-01-03',
//     checkIn: '08:55 AM',
//     checkOut: '05:48 PM',
//     workHours: '8h 53m',
//     status: 'Present',
//   },
// ]

// function UserAttendance({ setTitle }) {
//   const [records, setRecords] = useState([])
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
//   const [selectedDate, setSelectedDate] = useState(null)
//   const [currentPage, setCurrentPage] = useState(1)

//   const recordsPerPage = 10

//   const months = [
//     { value: 1, label: 'January', short: 'Jan' },
//     { value: 2, label: 'February', short: 'Feb' },
//     { value: 3, label: 'March', short: 'Mar' },
//     { value: 4, label: 'April', short: 'Apr' },
//     { value: 5, label: 'May', short: 'May' },
//     { value: 6, label: 'June', short: 'Jun' },
//     { value: 7, label: 'July', short: 'Jul' },
//     { value: 8, label: 'August', short: 'Aug' },
//     { value: 9, label: 'September', short: 'Sep' },
//     { value: 10, label: 'October', short: 'Oct' },
//     { value: 11, label: 'November', short: 'Nov' },
//     { value: 12, label: 'December', short: 'Dec' },
//   ]

//   useEffect(() => {
//     setTitle?.('My Attendance')
//     setRecords(getEmployeeRecords())
//   }, [setTitle])

//   const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate()

//   const getRecordForDate = (day) => {
//     const dateStr = `${selectedYear}-${String(selectedMonth).padStart(
//       2,
//       '0'
//     )}-${String(day).padStart(2, '0')}`
//     return records.find((r) => r.date === dateStr)
//   }

//   const getStatusIcon = (status) => {
//     if (status === 'Present')
//       return <FaCheckCircle className="text-green-600" />
//     if (status === 'Leave')
//       return <FaCalendarAlt className="text-amber-600" />
//     if (status === 'Absent')
//       return <FaTimesCircle className="text-red-600" />
//     return <span>-</span>
//   }

//   const selectedRecord = selectedDate
//     ? getRecordForDate(selectedDate)
//     : null

//   const filteredRecords = records.filter((r) => {
//     const d = new Date(r.date)
//     return (
//       d.getFullYear() === selectedYear &&
//       d.getMonth() + 1 === selectedMonth
//     )
//   })

//   const totalPages = Math.ceil(filteredRecords.length / recordsPerPage)
//   const indexOfLast = currentPage * recordsPerPage
//   const indexOfFirst = indexOfLast - recordsPerPage
//   const currentRecords = filteredRecords.slice(indexOfFirst, indexOfLast)

//   return (
//     <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
//       <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284] mb-6">
//         My Attendance
//       </h1>

//       {/* Month / Year */}
//       <div className="bg-white p-5 rounded-xl shadow mb-6 grid sm:grid-cols-2 gap-4">
//         <select
//           value={selectedMonth}
//           onChange={(e) => {
//             setSelectedMonth(Number(e.target.value))
//             setSelectedDate(null)
//             setCurrentPage(1)
//           }}
//           className="border p-3 rounded-lg"
//         >
//           {months.map((m) => (
//             <option key={m.value} value={m.value}>
//               {m.label}
//             </option>
//           ))}
//         </select>

//         <select
//           value={selectedYear}
//           onChange={(e) => {
//             setSelectedYear(Number(e.target.value))
//             setSelectedDate(null)
//             setCurrentPage(1)
//           }}
//           className="border p-3 rounded-lg"
//         >
//           {[2024, 2025, 2026, 2027].map((y) => (
//             <option key={y} value={y}>
//               {y}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Calendar */}
//       <div className="bg-white p-4 rounded-xl shadow mb-8 overflow-x-auto">
//         <div className="flex gap-2 min-w-max">
//           {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
//             const record = getRecordForDate(day)
//             return (
//               <button
//                 key={day}
//                 onClick={() => setSelectedDate(day)}
//                 className={`min-w-[64px] p-2 border rounded-lg ${
//                   selectedDate === day
//                     ? 'bg-[#365F8D] text-white'
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 <p className="text-sm font-medium">{day}</p>
//                 <div className="mt-1">
//                   {getStatusIcon(record?.status)}
//                 </div>
//               </button>
//             )
//           })}
//         </div>
//       </div>

//       {/* Selected Day Details */}
//       {selectedRecord && (
//         <div className="bg-white p-5 rounded-xl shadow mb-8">
//           <h3 className="font-bold text-lg mb-4 text-[#2C5284]">
//             {selectedRecord.date}
//           </h3>

//           <div className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <p className="text-gray-500 text-sm">Clock In</p>
//               <p className="font-semibold">
//                 {selectedRecord.checkIn}
//               </p>
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Clock Out</p>
//               <p className="font-semibold">
//                 {selectedRecord.checkOut}
//               </p>
//             </div>
//           </div>

//           <div className="mt-4 p-4 bg-green-50 rounded-lg">
//             <div className="flex items-center gap-2">
//               <FaMapMarkerAlt />
//               <span className="text-sm">Lahore, Punjab</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Monthly Records */}
//       <div className="bg-white rounded-xl shadow overflow-hidden">
//         <div className="bg-[#365F8D] p-4 text-white flex justify-between">
//           <h3 className="font-bold">Monthly Records</h3>
//           <div className="flex gap-2">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((p) => p - 1)}
//             >
//               <FaChevronLeft />
//             </button>
//             <span>
//               {currentPage}/{totalPages || 1}
//             </span>
//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((p) => p + 1)}
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* MOBILE */}
//         <div className="md:hidden divide-y">
//           {currentRecords.map((r) => (
//             <div key={r.id} className="p-4 space-y-2">
//               <div className="flex justify-between">
//                 <p className="font-semibold">{r.date}</p>
//                 {getStatusIcon(r.status)}
//               </div>
//               <p className="text-sm">In: {r.checkIn}</p>
//               <p className="text-sm">Out: {r.checkOut}</p>
//               <p className="text-sm">Hours: {r.workHours}</p>
//             </div>
//           ))}
//         </div>

//         {/* DESKTOP */}
//         <div className="hidden md:block overflow-x-auto">
//           <table className="min-w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="p-3 text-left">Date</th>
//                 <th className="p-3 text-left">In</th>
//                 <th className="p-3 text-left">Out</th>
//                 <th className="p-3 text-left">Hours</th>
//                 <th className="p-3 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentRecords.map((r) => (
//                 <tr key={r.id} className="border-t">
//                   <td className="p-3">{r.date}</td>
//                   <td className="p-3">{r.checkIn}</td>
//                   <td className="p-3">{r.checkOut}</td>
//                   <td className="p-3">{r.workHours}</td>
//                   <td className="p-3">{getStatusIcon(r.status)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserAttendance









import React, { useEffect, useState } from 'react';
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { getEmployeeRecords } from '../../data/mockAttendanceData'; // your helper function

function UserAttendance({ setTitle }) {
  // Replace with real user ID from AuthContext later
  const currentUserEmployeeId = 1; // Ali Hamza (employeeId: 1)

  const [records, setRecords] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;

  const months = [
    { value: 1, label: 'January', short: 'Jan' },
    { value: 2, label: 'February', short: 'Feb' },
    { value: 3, label: 'March', short: 'Mar' },
    { value: 4, label: 'April', short: 'Apr' },
    { value: 5, label: 'May', short: 'May' },
    { value: 6, label: 'June', short: 'Jun' },
    { value: 7, label: 'July', short: 'Jul' },
    { value: 8, label: 'August', short: 'Aug' },
    { value: 9, label: 'September', short: 'Sep' },
    { value: 10, label: 'October', short: 'Oct' },
    { value: 11, label: 'November', short: 'Nov' },
    { value: 12, label: 'December', short: 'Dec' },
  ];

  useEffect(() => {
    setTitle('My Attendance');
    // Fetch only current user's records
    const userRecords = getEmployeeRecords(currentUserEmployeeId);
    setRecords(userRecords || []);
  }, [setTitle]);

  // Days in the selected month
  const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  // Get record for a specific day in the selected month/year
  const getRecordForDate = (day) => {
    const dateStr = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return records.find(r => r.date === dateStr);
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'present':
        return <FaCheckCircle className="text-green-600" size={20} />;
      case 'leave':
        return <FaCalendarAlt className="text-amber-600" size={20} />;
      case 'absent':
        return <FaTimesCircle className="text-red-600" size={20} />;
      default:
        return <span className="text-gray-400 text-lg">-</span>;
    }
  };

  // Selected day's record
  const selectedRecord = selectedDate ? getRecordForDate(selectedDate) : null;

  // All records for the selected month/year (for the table)
  const filteredRecords = records.filter(r => {
    const d = new Date(r.date);
    return d.getFullYear() === selectedYear && (d.getMonth() + 1) === selectedMonth;
  });

  // Pagination
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);
  const currentRecords = filteredRecords.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C5284] mb-6">
        My Attendance
      </h1>

      {/* Month & Year Selector */}
      <div className="bg-white rounded-xl shadow p-5 sm:p-6 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
          <select
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(Number(e.target.value));
              setSelectedDate(null);
              setCurrentPage(1);
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#365F8D] focus:border-[#365F8D] text-sm sm:text-base"
          >
            {months.map(m => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(Number(e.target.value));
              setSelectedDate(null);
              setCurrentPage(1);
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#365F8D] focus:border-[#365F8D] text-sm sm:text-base"
          >
            {[2024, 2025, 2026, 2027].map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-5 mb-6">
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" size={18} /> Present
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-amber-600" size={18} /> Leave
          </div>
          <div className="flex items-center gap-2">
            <FaTimesCircle className="text-red-600" size={18} /> Absent
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Calendar */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-8 overflow-x-auto">
        <h2 className="text-lg sm:text-xl font-bold text-[#2C5284] mb-4">
          {months.find(m => m.value === selectedMonth)?.label} {selectedYear}
        </h2>

        <div className="flex gap-2 pb-4 min-w-max">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
            const record = getRecordForDate(day);
            const isSelected = selectedDate === day;

            return (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`min-w-[64px] sm:min-w-[70px] flex flex-col items-center p-2 sm:p-3 border rounded-lg transition-all ${
                  isSelected
                    ? 'bg-[#365F8D] text-white border-[#365F8D] shadow-md'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-medium">{day}</span>
                <span className="text-[10px] sm:text-xs opacity-70 mb-1">
                  {new Date(selectedYear, selectedMonth - 1, day).toLocaleString('en-US', { weekday: 'short' })}
                </span>
                <div className="mt-1">{getStatusIcon(record?.status)}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Date Details */}
      {selectedRecord && (
        <div className="bg-white rounded-xl shadow p-5 sm:p-6 mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#2C5284] mb-4">
            Details — {selectedDate} {months.find(m => m.value === selectedMonth)?.short} {selectedYear}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Clock In</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{selectedRecord.checkIn || '—'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Clock Out</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {selectedRecord.checkOut || 'Not Clocked Out'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaMapMarkerAlt className="text-gray-500" />
                <span>Lahore, Punjab</span>
              </div>

              {selectedRecord.workHours && selectedRecord.workHours !== '------' && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Work Hours</p>
                  <p className="text-xl font-bold text-gray-900">{selectedRecord.workHours}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Monthly Records Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="bg-[#365F8D] p-4 sm:p-5 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3 className="text-lg sm:text-xl font-bold">Monthly Records</h3>

          {totalPages > 1 && (
            <div className="flex items-center gap-3">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className={`p-2 rounded-lg ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-white text-[#365F8D] hover:bg-gray-100'}`}
              >
                <FaChevronLeft size={14} />
              </button>
              <span className="font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className={`p-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-500 cursor-not-allowed' : 'bg-white text-[#365F8D] hover:bg-gray-100'}`}
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock In</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock Out</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentRecords.length > 0 ? (
                currentRecords.map(record => (
                  <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{record.checkIn || '—'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{record.checkOut || '—'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{record.workHours || '—'}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.status)}
                        <span
                          className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${
                            record.status === 'Present' ? 'bg-green-100 text-green-800' :
                            record.status === 'Leave' ? 'bg-amber-100 text-amber-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          {record.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                    No attendance records found for {months.find(m => m.value === selectedMonth)?.label} {selectedYear}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserAttendance;