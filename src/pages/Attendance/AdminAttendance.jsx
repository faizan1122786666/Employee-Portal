// import React from 'react'
// import { useEffect ,useState} from 'react'
// import DatePicker from 'react-datepicker'
// import mockAttendanceData from '../../data/mockAttendanceData';

// function AdminAttendance({setTitle}) {

//   const [searchName,setsearchName] = useState('');
//   const [selectedDate,setselectedDate] = useState(null);


//   const formattedDate = selectedDate ? 
//   selectedDate.toISOString().split('T')[0] 
//   : null ;

//   const filterdata = mockAttendanceData.filter(record =>{
//     const nameMatch = record.name.toLowerCase().includes(searchName.toLowerCase())

//     if(!formattedDate)
//     {
//       return nameMatch;
//     }

//     const dateMatch = record.date === formattedDate;
//       return dateMatch && nameMatch;
//   })

//  useEffect(() => {
//     setTitle('Attendance Page')
//   }, [setTitle])
  
//   return (
//     <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
//       <div className='text-2xl sm:text-3xl lg:text-3xl font-bold text-[#2C5284] mb-3'>
//       Attendance Management
//       </div>


//       <div className='bg-white rounded-xl hover:shadow-lg p-4 sm:p-6 mb:p-6'>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
//           <div className='w-full'>
//             <label 
//             className='block text-sm font-medium text-black mb-2'>
//               Search Employee
//             </label>
//             <input
//             type='text'
//             placeholder='Search employee..'
//             value={searchName}
//             onChange={(e) => setsearchName(e.target.value)}
//             className='w-full px-4 py-2.5 sm:py-3 border border-gray-500 rounded-lg
//              transition-all duration-200 text-sm sm:text-base'
//             />
//           </div>

        
//         <div className='w-full'>
//           <label className='block text-sm font-medium text-black mb-2'>
//             Search Date
//           </label>
//           <DatePicker
//           selected={selectedDate}
//           onChange={setselectedDate}
//           isClearable
//           dateFormat="yyyy-MM-dd"
//           placeholderText='Search...'
//           className='w-full px-4 py-2.5 sm:py-3 border border-gray-500 rounded-lg
//           transition-all duration-200 text-sm sm:text-base'
//           wrapperClassName='w-full'
//           />

//         </div>
//       </div>
//       </div>

//       <div className="mb-2 text-sm sm:text-base text-gray-600 mt-2">
//          Showing 
//       <span className="font-semibold text-black ml-1">{filterdata.length}
//       </span> record(s)
//       </div>
 
//        {/* For Desktop View */}

//       <div className='hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden'>
//         <div className='overflow-x-auto'>
//           <table className='min-w-full divide-y divide-gray-200'>
//             <thead className='bg-[#365F8D]'>
//               <tr>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                  Employee Name
//                 </th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                  Date
//                 </th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                  Clock In
//                 </th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                  Clock Out
//                 </th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                  Status
//                 </th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                  Work Hours
//                 </th>
//               </tr>
//             </thead>

//             <tbody className='divide-y bg-white divide-gray-200'>
//              {filterdata.length > 0 ? (
//               filterdata.map(record => (
//                 <tr key={record.id} className='hover:bg-gray-50 transition-colors duration-150'>
//                   <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
//                    {record.name}
//                   </td>
//                   <td className='px-6 py-4  text-sm font-medium text-black'>
//                    {record.date}
//                   </td>
//                   <td className='px-6 py-4 text-sm font-medium text-black'>
//                    {record.checkIn}
//                   </td>
//                   <td className='px-6 py-4 text-sm font-medium text-black'>
//                    {record.checkOut || '-'}
//                   </td>
//                   <td className='px-6 py-4 text-sm font-medium text-black'>
//                     <span className={`px-3 py-1 inline-flex text-sm leading-5 font-medium
//                       rounded-full ${record.status.toLowerCase() === 'present' 
//                         ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                       }`}>{record.status}</span>
//                   </td>
//                   <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
//                    {record.workHours || '-'}
//                   </td>
//                 </tr>
//               ))

//              ) : (
//              <tr>
//                    <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">
//                      <div className="flex flex-col items-center">
//                        <p className="font-medium text-gray-900 mb-1">No records found</p>
//                        <p className="text-gray-500">
//                         {searchName || selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
//                        </p>
//                      </div>
//                    </td>
//                  </tr>
//              )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//        {/* For Mobile and Tablet View */}

//       <div className='space-y-4 lg:hidden'>
//       {filterdata.length > 0 ? (
//         filterdata.map(record => (
//         <div key={record.id} className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-200'>
//           <div className='flex justify-between items-start mb-3'>
//             <div>
//               <h3 className='text-base sm:text-lg font-semibold text-black'>{record.name}</h3>
//               <p className='text-black text-sm mt-1'>{record.date}</p>
//             </div>
//             <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${record.status.toLowerCase() === 'present' 
//               ? 'text-green-800 bg-green-100' : 'bg-red-100 text-red-800'
//             }`}>{record.status}</span>
//           </div>


//           <div className='grid grid-cols-2 gap-3 sm:gap-4'>
//             <div>
//               <p className='text-black mb-1 text-sm'>Check-In</p>
//               <p className='text-sm sm:text-base font-medium text-black'>{record.checkIn}</p>
//             </div>
//             <div>
//               <p className='text-black mb-1 text-sm'>Check-Out</p>
//               <p className='text-sm sm:text-base font-medium
//               text-black'>{record.checkOut || '-'}</p>
//             </div>
//             <div className='col-span-2'>
//               <p className='text-sm text-black mb-1
//               '>Work Hours</p>
//               <p className='text-sm sm:text-base font-medium text-black'>{record.workHours || '-'}</p>
//             </div>
//           </div>
//         </div>
//         ))
//       ) : (
//              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mt-2">
//             <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No records found</p>
//             <p className="text-sm sm:text-base text-gray-500">
//               {searchName || selectedDate ? 'Try adjusting your filters' : 'No attendance data available'}
//             </p>
//           </div>
//       )}

//       </div>
//     </div>
//   )
// }

// export default AdminAttendance





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import mockAttendanceData from '../../data/mockAttendanceData';

// function AdminAttendance({ setTitle }) {
//   const [searchName, setSearchName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     setTitle('Attendance Page');
//   }, [setTitle]);

//   // Group data by employee → summary banate hain
//   const employeeSummary = mockAttendanceData.reduce((acc, record) => {
//     const name = record.name;
//     if (!acc[name]) {
//       acc[name] = {
//         name,
//         present: 0,
//         absent: 0,
//         leave: 0,
//         total: 0,
//       };
//     }

//     acc[name].total += 1;

//     const status = record.status?.toLowerCase();
//     if (status === 'present') acc[name].present += 1;
//     else if (status === 'absent') acc[name].absent += 1;
//     else if (status === 'leave' || status === 'on leave') acc[name].leave += 1;

//     return acc;
//   }, {});

//   const summaryList = Object.values(employeeSummary);

//   // Search filter
//   const filteredSummary = summaryList.filter(emp =>
//     emp.name.toLowerCase().includes(searchName.toLowerCase())
//   );

//   const handleRowClick = (employeeName) => {
//     navigate(`/attendance/employee-detail/${encodeURIComponent(employeeName)}`);
//   };

//   return (
//     <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
//       <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C5284] mb-6'>
//         Attendance Management
//       </div>

//       {/* Search Section */}
//       <div className='bg-white rounded-xl hover:shadow-lg p-4 sm:p-6 mb-6'>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
//           <div className='w-full'>
//             <label className='block text-sm font-medium text-black mb-2'>
//               Search Employee
//             </label>
//             <input
//               type='text'
//               placeholder='Search employee...'
//               value={searchName}
//               onChange={(e) => setSearchName(e.target.value)}
//               className='w-full px-4 py-2.5 sm:py-3 border border-gray-500 rounded-lg transition-all duration-200 text-sm sm:text-base'
//             />
//           </div>
//         </div>
//       </div>

//       {/* Showing count */}
//       <div className="mb-4 text-sm sm:text-base text-gray-600">
//         Showing{' '}
//         <span className="font-semibold text-black ml-1">{filteredSummary.length}</span> record(s)
//       </div>

//       {/* Desktop View - Summary Table */}
//       <div className='hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden'>
//         <div className='overflow-x-auto'>
//           <table className='min-w-full divide-y divide-gray-200'>
//             <thead className='bg-[#365F8D]'>
//               <tr>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                   Employee Name
//                 </th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                   Attendance
//                 </th>
//                 <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
//                   Status Summary
//                 </th>
//               </tr>
//             </thead>

//             <tbody className='divide-y bg-white divide-gray-200'>
//               {filteredSummary.length > 0 ? (
//                 filteredSummary.map((emp) => (
//                   <tr
//                     key={emp.name}
//                     onClick={() => handleRowClick(emp.name)}
//                     className='hover:bg-gray-50 transition-colors duration-150 cursor-pointer'
//                   >
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
//                       {emp.name}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
//                       {emp.present + emp.leave} / {emp.total} days
//                     </td>
//                     <td className='px-6 py-4 text-sm font-medium text-black'>
//                       <div className='flex gap-4'>
//                         <span className='text-green-700'>Present: {emp.present}</span>
//                         <span className='text-red-700'>Absent: {emp.absent}</span>
//                         {emp.leave > 0 && (
//                           <span className='text-amber-700'>Leave: {emp.leave}</span>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={3} className="px-6 py-12 text-center text-sm text-gray-500">
//                     <div className="flex flex-col items-center">
//                       <p className="font-medium text-gray-900 mb-1">No records found</p>
//                       <p className="text-gray-500">
//                         {searchName ? 'Try adjusting search' : 'No attendance data available'}
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Mobile & Tablet View - Summary Cards */}
//       <div className='space-y-4 lg:hidden'>
//         {filteredSummary.length > 0 ? (
//           filteredSummary.map((emp) => (
//             <div
//               key={emp.name}
//               onClick={() => handleRowClick(emp.name)}
//               className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer'
//             >
//               <h3 className='text-base sm:text-lg font-semibold text-black'>{emp.name}</h3>

//               <p className='text-sm text-gray-600 mt-2'>
//                 Attendance: <span className='font-medium'>{emp.present + emp.leave} / {emp.total} days</span>
//               </p>

//               <div className='mt-3 flex flex-wrap gap-3 text-sm'>
//                 <span className='text-green-700 font-medium'>Present: {emp.present}</span>
//                 <span className='text-red-700 font-medium'>Absent: {emp.absent}</span>
//                 {emp.leave > 0 && (
//                   <span className='text-amber-700 font-medium'>Leave: {emp.leave}</span>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center">
//             <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">
//               No records found
//             </p>
//             <p className="text-sm sm:text-base text-gray-500">
//               {searchName ? 'Try adjusting search' : 'No attendance data available'}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminAttendance;




import React, { useEffect, useState } from 'react';
import { getUniqueEmployees } from '../../data/mockAttendanceData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import EmployeeAttendanceModal from './EmployeeAttendanceModal';

function AdminAttendance({ setTitle }) {
  const [employees, setEmployees] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const recordsPerPage = 10;

  useEffect(() => {
    setTitle('Attendance Management');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmployees(getUniqueEmployees());
  }, [setTitle]);

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchName.toLowerCase())
  );

  // Pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredEmployees.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredEmployees.length / recordsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const getStatusColor = (percentage) => {
    if (percentage >= 90) return 'bg-green-100 text-green-800';
    if (percentage >= 75) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
      <div className='text-2xl sm:text-3xl lg:text-3xl font-bold text-[#2C5284] mb-6'>
        Attendance Management
      </div>

      {/* Search Bar */}
      <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6'>
        <div className='w-full'>
          <label className='block text-sm font-medium text-black mb-2'>
            Search Employee
          </label>
          <input
            type='text'
            placeholder='Search employee by name...'
            value={searchName}
            onChange={(e) => {
              setSearchName(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className='w-full px-4 py-2.5 sm:py-3 border border-gray-500 rounded-lg
             transition-all duration-200 text-sm sm:text-base'
          />
        </div>
      </div>

      <div className="mb-2 text-sm sm:text-base text-gray-600 mt-2 flex justify-between items-center">
        <span>
          Showing <span className="font-semibold text-black">{indexOfFirstRecord + 1}</span> to{' '}
          <span className="font-semibold text-black">
            {Math.min(indexOfLastRecord, filteredEmployees.length)}
          </span>{' '}
          of <span className="font-semibold text-black">{filteredEmployees.length}</span> employee(s)
        </span>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#365F8D] text-white hover:bg-[#2C5284]'
              }`}
            >
              <FaChevronLeft size={16} />
            </button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#365F8D] text-white hover:bg-[#2C5284]'
              }`}
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className='hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-[#365F8D]'>
              <tr>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Employee Name
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Email
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Attendance %
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Status
                </th>
              </tr>
            </thead>

            <tbody className='divide-y bg-white divide-gray-200'>
              {currentRecords.length > 0 ? (
                currentRecords.map(employee => (
                  <tr
                    key={employee.employeeId}
                    onClick={() => handleEmployeeClick(employee)}
                    className='hover:bg-gray-50 cursor-pointer transition-colors duration-150'
                  >
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
                      {employee.name}
                    </td>
                    <td className='px-6 py-4 text-sm font-medium text-black'>
                      {employee.email}
                    </td>
                    <td className='px-6 py-4 text-sm font-medium text-black'>
                      <div className='flex items-center gap-2'>
                        <div className='w-24 bg-gray-200 rounded-full h-2'>
                          <div
                            className={`h-2 rounded-full ${
                              employee.attendancePercentage >= 90
                                ? 'bg-green-500'
                                : employee.attendancePercentage >= 75
                                ? 'bg-yellow-500'
                                : 'bg-red-500'
                            }`}
                            style={{ width: `${employee.attendancePercentage}%` }}
                          />
                        </div>
                        <span className='text-sm font-semibold'>
                          {employee.attendancePercentage}%
                        </span>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm font-medium text-black'>
                      <span
                        className={`px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-full ${getStatusColor(
                          employee.attendancePercentage
                        )}`}
                      >
                        {employee.attendancePercentage >= 90
                          ? 'Excellent'
                          : employee.attendancePercentage >= 75
                          ? 'Good'
                          : 'Poor'}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-sm text-gray-500">
                    <div className="flex flex-col items-center">
                      <p className="font-medium text-gray-900 mb-1">No employees found</p>
                      <p className="text-gray-500">
                        {searchName ? 'Try adjusting your search' : 'No employee data available'}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile and Tablet Card View */}
      <div className='space-y-4 lg:hidden'>
        {currentRecords.length > 0 ? (
          currentRecords.map(employee => (
            <div
              key={employee.employeeId}
              onClick={() => handleEmployeeClick(employee)}
              className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer'
            >
              <div className='flex justify-between items-start mb-3'>
                <div className='flex-1'>
                  <h3 className='text-base sm:text-lg font-semibold text-black'>
                    {employee.name}
                  </h3>
                  <p className='text-black text-sm mt-1'>{employee.email}</p>
                </div>
              </div>

              <div className='mb-3'>
                <div className='flex items-center justify-between mb-1'>
                  <span className='text-sm text-gray-600'>Attendance</span>
                  <span className='text-sm font-semibold text-black'>
                    {employee.attendancePercentage}%
                  </span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                    className={`h-2 rounded-full ${
                      employee.attendancePercentage >= 90
                        ? 'bg-green-500'
                        : employee.attendancePercentage >= 75
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${employee.attendancePercentage}%` }}
                  />
                </div>
              </div>

              <span
                className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${getStatusColor(
                  employee.attendancePercentage
                )}`}
              >
                {employee.attendancePercentage >= 90
                  ? 'Excellent'
                  : employee.attendancePercentage >= 75
                  ? 'Good'
                  : 'Poor'}
              </span>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mt-2">
            <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No employees found</p>
            <p className="text-sm sm:text-base text-gray-500">
              {searchName ? 'Try adjusting your search' : 'No employee data available'}
            </p>
          </div>
        )}
        
        {/* Mobile Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-3 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#365F8D] text-white hover:bg-[#2C5284]'
              }`}
            >
              <FaChevronLeft size={16} />
            </button>
            <span className="text-sm font-medium">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#365F8D] text-white hover:bg-[#2C5284]'
              }`}
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Employee Attendance Modal */}
      {showModal && selectedEmployee && (
        <EmployeeAttendanceModal
          employee={selectedEmployee}
          onClose={() => {
            setShowModal(false);
            setSelectedEmployee(null);
          }}
        />
      )}
    </div>
  );
}

export default AdminAttendance;






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
