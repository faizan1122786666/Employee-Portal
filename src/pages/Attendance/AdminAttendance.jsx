import React, { useEffect, useState } from 'react';
import mockAttendanceData, { getUniqueEmployees } from '../../data/mockAttendanceData';
import EmployeeAttendanceDetailModal from './EmployeeAttendanceDetailModal';

function AdminAttendance({setTitle}) {
  const [searchName, setSearchName] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

   const ITEMS_PER_PAGE = 10;
   const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTitle('Attendance Page')
    const uniqueEmployees = getUniqueEmployees();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmployees(uniqueEmployees);
  }, [setTitle])




  // Filter employees by search term
  // const filteredEmployees = employees.filter(emp => 
  //   emp.name.toLowerCase().includes(searchName.toLowerCase())
  // );



  const filteredEmployees = employees.filter(emp =>
  emp.name.toLowerCase().includes(searchName.toLowerCase())
);

const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

const paginatedEmployees = filteredEmployees.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);


  // Calculate attendance summary for an employee
  const getAttendanceSummary = (employeeId) => {
    const records = mockAttendanceData.filter(r => r.employeeId === employeeId);
    const present = records.filter(r => r.status === 'Present').length;
    const absent = records.filter(r => r.status === 'Absent').length;
    const leave = records.filter(r => r.status === 'Leave').length;
    return { present, absent, leave, total: records.length };
  };

  // Get most recent attendance record for employee
  const getLatestDate = (employeeId) => {
    const records = mockAttendanceData.filter(r => r.employeeId === employeeId);
    if (records.length === 0) return '-';
    const sorted = records.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sorted[0].date;
  };

  // Handle row click to open modal
  const handleRowClick = (employee) => {
    setSelectedEmployee({
      ...employee,
      id: employee.employeeId // Make sure we pass the ID correctly
    });
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
            placeholder='Search by name or email...'
            value={searchName}
            // onChange={(e) => setSearchName(e.target.value)}
            onChange={(e) => {
            setSearchName(e.target.value);
            setCurrentPage(1);
            }}

            className='w-full px-4 py-2.5 sm:py-3 border border-gray-500 rounded-lg
             transition-all duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#365F8D]'
          />
        </div>
      </div>

      <div className="mb-2 text-sm sm:text-base text-gray-600">
        Showing <span className="font-semibold text-black">{filteredEmployees.length}</span> employee(s)
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
                  Date of Birth
                </th>
                {/* <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Present Days
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Absent Days
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Leave Days
                </th> */}
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Attendance %
                </th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>
                  Date
                </th>
              </tr>
            </thead>

            <tbody className='divide-y bg-white divide-gray-200'>
              {filteredEmployees.length > 0 ? (
                paginatedEmployees.map(employee => {
                  // const summary = getAttendanceSummary(employee.employeeId);
                  const latestDate = getLatestDate(employee.employeeId);
                  
                  return (
                    <tr 
                      key={employee.employeeId} 
                      onClick={() => handleRowClick(employee)}
                      className='hover:bg-gray-50 transition-colors duration-150 cursor-pointer'>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
                        {employee.name}
                      </td>
                      <td className='px-6 py-4 text-sm font-medium text-gray-600'>
                        {employee.DOB}
                      </td>
                      {/* <td className='px-6 py-4 text-sm font-medium text-green-600'>
                        {summary.present}
                      </td>
                      <td className='px-6 py-4 text-sm font-medium text-red-600'>
                        {summary.absent}
                      </td>
                      <td className='px-6 py-4 text-sm font-medium text-blue-600'>
                        {summary.leave}
                      </td> */}
                      <td className='px-6 py-4 text-sm font-medium text-black'>
                        <span className={`px-3 py-1 inline-flex text-sm leading-5 font-medium
                          rounded-full ${
                            employee.attendancePercentage >= 80 
                              ? 'bg-green-100 text-green-800' 
                              : employee.attendancePercentage >= 60
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                          {employee.attendancePercentage}%
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600'>
                        {latestDate}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-500">
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
        {filteredEmployees.length > 0 ? (
          paginatedEmployees.map(employee => {
            const summary = getAttendanceSummary(employee.employeeId);
            const latestDate = getLatestDate(employee.employeeId);
            
            return (
              <div 
                key={employee.employeeId} 
                onClick={() => handleRowClick(employee)}
                className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer'>
                <div className='flex justify-between items-start mb-3'>
                  <div>
                    <h3 className='text-base sm:text-lg font-semibold text-black'>{employee.name}</h3>
                    <p className='text-gray-600 text-sm mt-1'>{employee.DOB}</p>
                  </div>
                  <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${
                    employee.attendancePercentage >= 80 
                      ? 'bg-green-100 text-green-800' 
                      : employee.attendancePercentage >= 60
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {employee.attendancePercentage}%
                  </span>
                </div>

                <div className='grid grid-cols-3 gap-3 sm:gap-4 mb-3'>
                  <div className='text-center'>
                    <p className='text-black mb-1 text-xs'>Present</p>
                    <p className='text-base sm:text-lg font-bold text-green-600'>{summary.present}</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-black mb-1 text-xs'>Absent</p>
                    <p className='text-base sm:text-lg font-bold text-red-600'>{summary.absent}</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-black mb-1 text-xs'>Leave</p>
                    <p className='text-base sm:text-lg font-bold text-blue-600'>{summary.leave}</p>
                  </div>
                </div>

                <div className='pt-3 border-t border-gray-200'>
                  <p className='text-sm text-gray-600'>
                    Last Updated: <span className='font-medium text-black'>{latestDate}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center">
            <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No employees found</p>
            <p className="text-sm sm:text-base text-gray-500">
              {searchName ? 'Try adjusting your search' : 'No employee data available'}
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


      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <EmployeeAttendanceDetailModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
}

export default AdminAttendance;