import React from 'react'
import { useEffect ,useState} from 'react'
import DatePicker from 'react-datepicker'
import mockAttendanceData from '../../data/mockAttendanceData';

function AdminAttendance({setTitle}) {

  const [searchName,setsearchName] = useState('');
  const [selectedDate,setselectedDate] = useState(null);


  const formattedDate = selectedDate ? 
  selectedDate.toISOString().split('T')[0] 
  : null ;

  const filterdata = mockAttendanceData.filter(record =>{
    const nameMatch = record.name.toLowerCase().includes(searchName.toLowerCase())

    if(!formattedDate)
    {
      return nameMatch;
    }

    const dateMatch = record.date === formattedDate;
      return dateMatch && nameMatch;
  })

 useEffect(() => {
    setTitle('Attendance Page')
  }, [setTitle])
  
  return (
    <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
      <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C5284] mb-3'>
      Attendance Management
      </div>


      <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6 mb:p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
          <div className='w-full'>
            <label 
            className='block text-sm font-medium text-black mb-2'>
              Search Employee
            </label>
            <input
            type='text'
            placeholder='Search employee..'
            value={searchName}
            onChange={(e) => setsearchName(e.target.value)}
            className='w-full px-4 py-2.5 sm:py-3 border border-gray-500 
             transition-all duration-200 text-sm sm:text-base'
            />
          </div>

        
        <div className='w-full'>
          <label className='block text-sm font-medium text-black mb-2'>
            Search Date
          </label>
          <DatePicker
          selected={selectedDate}
          onChange={setselectedDate}
          isClearable
          dateFormat="yyyy-MM-dd"
          placeholderText='Search through date(yyyy-MM-dd)..'
          className='w-full px-4 py-2.5 sm:py-3 border border-gray-500 rounded-lg
          transition-all duration-200 text-sm sm:text-base'
          wrapperClassName='w-full'
          />

        </div>
      </div>
      </div>

      <div className="mb-2 text-sm sm:text-base text-gray-600 mt-2">
         Showing 
      <span className="font-semibold text-black ml-1">{filterdata.length}
      </span> record(s)
      </div>
 
       {/* For Desktop View */}

      <div className='hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-[#365F8D]'>
              <tr>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                 Employee Name
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                 Date
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                 Clock In
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                 Clock Out
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                 Status
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                 Work Hours
                </th>
              </tr>
            </thead>

            <tbody className='divide-y bg-white divide-gray-200'>
             {filterdata.length > 0 ? (
              filterdata.map(record => (
                <tr key={record.id} className='hover:bg-gray-50 transition-colors duration-150'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
                   {record.name}
                  </td>
                  <td className='px-6 py-4  text-sm font-medium text-black'>
                   {record.date}
                  </td>
                  <td className='px-6 py-4 text-sm font-medium text-black'>
                   {record.checkIn}
                  </td>
                  <td className='px-6 py-4 text-sm font-medium text-black'>
                   {record.checkOut || '-'}
                  </td>
                  <td className='px-6 py-4 text-sm font-medium text-black'>
                    <span className={`px-3 py-1 inline-flex text-sm leading-5 font-medium
                      rounded-full ${record.status.toLowerCase() === 'present' 
                        ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>{record.status}</span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
                   {record.workHours || '-'}
                  </td>
                </tr>
              ))

             ) : (
             <tr>
                   <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">
                     <div className="flex flex-col items-center">
                       <p className="font-medium text-gray-900 mb-1">No records found</p>
                       <p className="text-gray-500">
                        {searchName || selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
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

      <div className='space-y-4 lg:hidden'>
      {filterdata.length > 0 ? (
        filterdata.map(record => (
        <div key={record.id} className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-200'>
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
             <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mt-2">
            <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No records found</p>
            <p className="text-sm sm:text-base text-gray-500">
              {searchName || selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
            </p>
          </div>
      )}

      </div>
    </div>
  )
}

export default AdminAttendance






// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import mockAttendanceData from '../../data/mockAttendanceData';

// function AdminAttendance() {
//   const [searchName, setSearchName] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);

//   // Safe formatted date
//   const formattedDate = selectedDate 
//     ? selectedDate.toISOString().split('T')[0] 
//     : null;

//   // Filter logic
//   const filteredData = mockAttendanceData.filter(record => {
//     const nameMatch = record.name.toLowerCase().includes(searchName.toLowerCase());

//     if (!formattedDate) {
//       return nameMatch;
//     }

//     const dateMatch = record.date === formattedDate;
//     return nameMatch && dateMatch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       {/* Header */}
//       <div className="mb-6 sm:mb-8">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
//           Attendance Management
//         </h1>
//         <p className="text-sm sm:text-base text-gray-600 mt-1">Admin View</p>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//           {/* Name Search */}
//           <div className="w-full">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Search Employee
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. Ali Hamza"
//               value={searchName}
//               onChange={(e) => setSearchName(e.target.value)}
//               className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//             />
//           </div>

//           {/* Date Picker */}
//           <div className="w-full">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Select Date
//             </label>
//             <DatePicker
//               selected={selectedDate}
//               onChange={setSelectedDate}
//               dateFormat="yyyy-MM-dd"
//               isClearable
//               placeholderText="All dates (click to filter)"
//               className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition-all duration-200 text-sm sm:text-base"
//               wrapperClassName="w-full"
//             />
//           </div>
//         </div>

//         {/* Active Filters Display */}
//         {/* {(searchName || selectedDate) && (
//           <div className="mt-4 flex flex-wrap gap-2">
//             <span className="text-xs sm:text-sm text-gray-600">Active filters:</span>
//             {searchName && (
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800">
//                 Name: {searchName}
//                 <button
//                   onClick={() => setSearchName('')}
//                   className="ml-2 hover:text-blue-900"
//                 >
//                   ×
//                 </button>
//               </span>
//             )}
//             {selectedDate && (
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800">
//                 Date: {formattedDate}
//                 <button
//                   onClick={() => setSelectedDate(null)}
//                   className="ml-2 hover:text-blue-900"
//                 >
//                   ×
//                 </button>
//               </span>
//             )}
//           </div>
//         )} */}
//       </div>

//       {/* Results Count */}
//       <div className="mb-4 text-sm sm:text-base text-gray-600">
//         Showing <span className="font-semibold text-gray-900">{filteredData.length}</span> record(s)
//       </div>

//       {/* Desktop Table View (hidden on mobile) */}
//       <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-[#365F8D]">
//               <tr>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Check-In
//                 </th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Check-Out
//                 </th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Work Hours
//                 </th>
//               </tr>
//             </thead>
            // <tbody className="divide-y divide-gray-200 bg-white">
            //   {filteredData.length > 0 ? (
            //     filteredData.map(record => (
            //       <tr key={record.id} className="hover:bg-gray-50 transition-colors duration-150">
            //         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            //           {record.name}
            //         </td>
            //         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            //           {record.date}
            //         </td>
            //         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            //           {record.checkIn}
            //         </td>
            //         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            //           {record.checkOut || '-'}
            //         </td>
            //         <td className="px-6 py-4 whitespace-nowrap">
            //           <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
            //             record.status.toLowerCase() === 'present' 
            //               ? 'bg-green-100 text-green-800' 
            //               : 'bg-red-100 text-red-800'
            //           }`}>
            //             {record.status}
            //           </span>
            //         </td>
            //         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            //           {record.workHours || '-'}
            //         </td>
            //       </tr>
            //     ))
            //   ) : (
            //     <tr>
            //       <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">
            //         <div className="flex flex-col items-center">
            //           <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            //           </svg>
            //           <p className="font-medium text-gray-900 mb-1">No records found</p>
            //           <p className="text-gray-500">
            //             {searchName || selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
            //           </p>
            //         </div>
            //       </td>
            //     </tr>
            //   )}
            // </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Mobile/Tablet Card View (hidden on desktop) */}
//       <div className="lg:hidden space-y-4">
//         {filteredData.length > 0 ? (
//           filteredData.map(record => (
//             <div key={record.id} className="bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-200">
//               {/* Header Row */}
//               <div className="flex justify-between items-start mb-3">
//                 <div>
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-900">
//                     {record.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-gray-500 mt-1">{record.date}</p>
//                 </div>
//                 <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${
//                   record.status.toLowerCase() === 'present' 
//                     ? 'bg-green-100 text-green-800' 
//                     : 'bg-red-100 text-red-800'
//                 }`}>
//                   {record.status}
//                 </span>
//               </div>

//               {/* Details Grid */}
//               <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Check-In</p>
//                   <p className="text-sm sm:text-base font-medium text-gray-900">{record.checkIn}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Check-Out</p>
//                   <p className="text-sm sm:text-base font-medium text-gray-900">{record.checkOut || '-'}</p>
//                 </div>
//                 <div className="col-span-2">
//                   <p className="text-xs text-gray-500 mb-1">Work Hours</p>
//                   <p className="text-sm sm:text-base font-medium text-gray-900">{record.workHours || '-'}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
          // <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center">
          //   <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          //   </svg>
          //   <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No records found</p>
          //   <p className="text-sm sm:text-base text-gray-500">
          //     {searchName || selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
          //   </p>
          // </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminAttendance;
