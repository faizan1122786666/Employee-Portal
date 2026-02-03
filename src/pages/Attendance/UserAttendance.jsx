

import React, { useEffect, useState } from 'react';
import { getEmployeeRecords } from '../../data/mockAttendanceData';
import { FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import {FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";

function UserAttendance({ setTitle }) {
  // In real app, get this from auth context (currently using Ali Hamza's ID)
  const currentUserId = 1;

  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  
  // Dropdown states
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const years = [2024, 2025, 2026];
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  useEffect(() => {
    setTitle('My Attendance');
    const userRecords = getEmployeeRecords(currentUserId);
    setRecords(userRecords);
    // eslint-disable-next-line react-hooks/immutability
    filterRecords(userRecords, selectedYear, selectedMonth, selectedDate);
  }, [setTitle, currentUserId, selectedYear, selectedMonth, selectedDate]);

  useEffect(() => {
    filterRecords(records, selectedYear, selectedMonth, selectedDate);
  }, [selectedYear, selectedMonth, selectedDate, records]);

  const filterRecords = (allRecords, year, month, date) => {
    let filtered = allRecords.filter(record => {
      const recordDate = new Date(record.date);
      const recordYear = recordDate.getFullYear();
      const recordMonth = recordDate.getMonth() + 1;
      
      if (year && recordYear !== year) return false;
      if (month && recordMonth !== month) return false;
      if (date && recordDate.getDate() !== date) return false;
      
      return true;
    });
    
    setFilteredRecords(filtered);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getStatusIcon = (status) => {
    if (status === 'Present') {
      return <FaCheckCircle className='text-green-600' size={20} />;
    } else if (status === 'Leave') {
      return <FaCalendarAlt className='text-yellow-600' size={20} />;
    } else {
      return <FaTimesCircle className='text-red-600' size={20} />;
    }
  };

  const getStatusForDate = (date) => {
    const dateStr = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const record = records.find(r => r.date === dateStr);
    return record ? record.status : null;
  };

  // Calculate monthly statistics
  const getMonthlyStats = () => {
    const present = filteredRecords.filter(r => r.status === 'Present').length;
    const absent = filteredRecords.filter(r => r.status === 'Absent').length;
    const leave = filteredRecords.filter(r => r.status === 'Leave').length;
    return { present, absent, leave };
  };

  const stats = getMonthlyStats();

  return (
    <div className='max-h-screen p-4 sm:p-6 lg:p-8'>
      <h1 className='text-2xl sm:text-3xl font-bold text-[#2C5284] mb-6'>My Attendance</h1>

      {/* Monthly Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#2C5284]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-base text-[#2C5284]">Present Days</p>
              <p className="text-2xl font-bold text-[#2C5284]">{stats.present}</p>
            </div>
            <div className="bg-[#365F8D] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <FaRegCheckCircle size={24} className="text-white" />
        </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#2C5284]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-base text-[#2C5284]">Absent Days</p>
              <p className="text-2xl font-bold text-[#2C5284]">{stats.absent}</p>
            </div>
            <div className="bg-[#365F8D] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                     <RxCrossCircled size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#2C5284]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-base text-[#2C5284]">Leave Days</p>
              <p className="text-2xl font-bold text-[#2C5284]">{stats.leave}</p>
            </div>
            <div className="bg-[#365F8D] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                     <SlCalender size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6'>
        <h3 className='text-lg font-semibold text-[#2C5284] mb-4'>Filter Records</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {/* Year Dropdown */}
          <div className='relative'>
            <label className='block text-sm font-medium text-black mb-2'>Year</label>
            <button
              onClick={() => {
                setShowYearDropdown(!showYearDropdown);
                setShowMonthDropdown(false);
                setShowDateDropdown(false);
              }}
              className='w-full px-4 py-2.5 border border-gray-500 rounded-lg text-left flex justify-between items-center hover:border-[#365F8D] transition-colors bg-white'
            >
              <span>{selectedYear}</span>
              <FaChevronDown size={12} />
            </button>
            {showYearDropdown && (
              <div className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto'>
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setShowYearDropdown(false);
                      setSelectedDate(null);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                      selectedYear === year ? 'bg-[#365F8D] text-white hover:bg-[#2C5284]' : ''
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Month Dropdown */}
          <div className='relative'>
            <label className='block text-sm font-medium text-black mb-2'>Month</label>
            <button
              onClick={() => {
                setShowMonthDropdown(!showMonthDropdown);
                setShowYearDropdown(false);
                setShowDateDropdown(false);
              }}
              className='w-full px-4 py-2.5 border border-gray-500 rounded-lg text-left flex justify-between items-center hover:border-[#365F8D] transition-colors bg-white'
            >
              <span>{months.find(m => m.value === selectedMonth)?.label}</span>
              <FaChevronDown size={12} />
            </button>
            {showMonthDropdown && (
              <div className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
                {months.map(month => (
                  <button
                    key={month.value}
                    onClick={() => {
                      setSelectedMonth(month.value);
                      setShowMonthDropdown(false);
                      setSelectedDate(null);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                      selectedMonth === month.value ? 'bg-[#365F8D] text-white hover:bg-[#2C5284]' : ''
                    }`}
                  >
                    {month.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Dropdown */}
          <div className='relative'>
            <label className='block text-sm font-medium text-black mb-2'>Date</label>
            <button
              onClick={() => {
                setShowDateDropdown(!showDateDropdown);
                setShowYearDropdown(false);
                setShowMonthDropdown(false);
              }}
              className='w-full px-4 py-2.5 border border-gray-500 rounded-lg text-left flex justify-between items-center hover:border-[#365F8D] transition-colors bg-white'
            >
              <span>{selectedDate || 'All Dates'}</span>
              <FaChevronDown size={12} />
            </button>
            {showDateDropdown && (
              <div className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
                <button
                  onClick={() => {
                    setSelectedDate(null);
                    setShowDateDropdown(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    !selectedDate ? 'bg-[#365F8D] text-white hover:bg-[#2C5284]' : ''
                  }`}
                >
                  All Dates
                </button>
                {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, i) => i + 1).map(date => (
                  <button
                    key={date}
                    onClick={() => {
                      setSelectedDate(date);
                      setShowDateDropdown(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                      selectedDate === date ? 'bg-[#365F8D] text-white hover:bg-[#2C5284]' : ''
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Icon Legend */}
      <div className='bg-white rounded-xl shadow-sm p-4 mb-6'>
        <h3 className='text-sm font-semibold text-black mb-3'>Status Legend</h3>
        <div className='flex flex-wrap gap-4'>
          <div className='flex items-center gap-2'>
            <FaCheckCircle className='text-green-600' size={16} />
            <span className='text-sm text-gray-700'>Present</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaCalendarAlt className='text-yellow-600' size={16} />
            <span className='text-sm text-gray-700'>Leave</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaTimesCircle className='text-red-600' size={16} />
            <span className='text-sm text-gray-700'>Absent</span>
          </div>
        </div>
      </div>

      {/* Month View - Show all dates when no specific date selected */}
      {/* {!selectedDate && (
        <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6'>
          <h3 className='text-lg font-bold text-[#2C5284] mb-4'>
            {months.find(m => m.value === selectedMonth)?.label} {selectedYear} - Calendar View
          </h3>
          <div className='grid grid-cols-7 gap-2'>
            {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, i) => i + 1).map(date => {
              const status = getStatusForDate(date);
              return (
                <div
                  key={date}
                  className='flex flex-col items-center p-3 border rounded-lg hover:shadow-md transition-shadow'
                >
                  <span className='text-sm font-semibold text-gray-700 mb-2'>{date}</span>
                  {status ? (
                    <div className='flex items-center justify-center'>
                      {getStatusIcon(status)}
                    </div>
                  ) : (
                    <div className='text-gray-400 text-xs'>No Data</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )} */}

      {/* Desktop Table View */}
      <div className='bg-white rounded-xl shadow-sm lg:block hidden overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-[#365F8D]'>
              <tr>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Date</th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Clock In</th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Clock Out</th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Work Hours</th>
                <th className='px-6 py-4 text-white text-sm text-left font-semibold'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y bg-white divide-gray-200'>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <tr key={record.id} className='hover:bg-gray-50 transition-colors duration-150'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>
                      {record.date}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.checkIn}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.checkOut || '-'}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black'>{record.workHours || '-'}</td>
                    <td className='px-6 py-4 text-sm font-medium text-black'>
                      <div className='flex items-center gap-2'>
                        {getStatusIcon(record.status)}
                        <span className={`px-3 py-1 inline-flex text-sm leading-5 font-medium
                          rounded-full ${record.status === 'Present' 
                            ? 'bg-green-100 text-green-800' 
                            : record.status === 'Leave'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                          }`}>{record.status}</span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-500">
                    <div className="flex flex-col items-center">
                      <p className="font-medium text-gray-900 mb-1">No records found</p>
                      <p className="text-gray-500">
                        No attendance data available for the selected period
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
      <div className='space-y-4 lg:hidden mt-6'>
        {filteredRecords.length > 0 ? (
          filteredRecords.map((record) => (
            <div key={record.id} className='bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow'>
              <div className='flex justify-between items-start mb-3'>
                <div>
                  <p className='text-black text-sm mt-1 font-semibold'>{record.date}</p>
                </div>
                <div className='flex items-center gap-2'>
                  {getStatusIcon(record.status)}
                  <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${
                    record.status === 'Present' 
                      ? 'text-green-800 bg-green-100' 
                      : record.status === 'Leave'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>{record.status}</span>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                <div>
                  <p className='text-black mb-1 text-sm'>Check-In</p>
                  <p className='text-sm sm:text-base font-medium text-black'>{record.checkIn}</p>
                </div>
                <div>
                  <p className='text-black mb-1 text-sm'>Check-Out</p>
                  <p className='text-sm sm:text-base font-medium text-black'>{record.checkOut || '-'}</p>
                </div>
                <div className='col-span-2'>
                  <p className='text-sm text-black mb-1'>Work Hours</p>
                  <p className='text-sm sm:text-base font-medium text-black'>{record.workHours || '-'}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mt-2 items-center">
            <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">No records found</p>
            <p className="text-sm sm:text-base text-gray-500">
              No attendance data available for the selected period
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAttendance;
            
         