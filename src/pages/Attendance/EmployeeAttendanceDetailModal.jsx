import { useState, useMemo } from 'react';
import mockAttendanceData from '../../data/mockAttendanceData';
import { FaChevronDown } from 'react-icons/fa';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function EmployeeAttendanceDetailModal({ employee, onClose }) {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  
  // Dropdown states
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const years = [2024, 2025, 2026];

  // Get all employee records
  const allRecords = useMemo(() => {
    return mockAttendanceData.filter(r => r.employeeId === employee.employeeId);
  }, [employee.employeeId]);

  // Filter records based on selection
  const filteredRecords = useMemo(() => {
    return allRecords.filter(record => {
      const recordDate = new Date(record.date);
      const recordYear = recordDate.getFullYear();
      const recordMonth = recordDate.getMonth() + 1;
      const recordDay = recordDate.getDate();
      
      if (selectedYear && recordYear !== selectedYear) return false;
      if (selectedMonth && recordMonth !== selectedMonth) return false;
      if (selectedDate && recordDay !== selectedDate) return false;
      
      return true;
    });
  }, [allRecords, selectedYear, selectedMonth, selectedDate]);

  // Get the selected day's record (for detail view)
const selectedDayRecord = useMemo(() => {
  const dateStr = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
  return allRecords.find(r => r.date === dateStr) || null;
}, [selectedYear, selectedMonth, selectedDate, allRecords]);


  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // Calculate work hours percentage (assuming 9 hours is 100%)
  const getWorkHoursPercentage = (workHours) => {
    if (!workHours || workHours === '------') return 0;
    const hours = parseFloat(workHours.split('h')[0]);
    return Math.min((hours / 9) * 100, 100);
  };

  // Get day name
  const getDayName = (dateStr) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(dateStr).getDay()];
  };

  return (
    <div className="fixed inset-0 bg-[#2C5284] bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white hover:shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-linear-to-r  p-6 flex justify-between items-start
        bg-[#2C5284] border-b">
          <h2 className="text-2xl font-bold text-white">Attendance Details</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-white text-3xl font-bold cursor-pointer leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* Employee Info Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              {employee.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2C5284]">{employee.name}</h3>
              <p className="text-[#2C5284]">Frontend Developer</p>
            </div>
          </div>

          {/* Filter Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-[#2C5284] mb-4">Filter Records</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Year Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <button
                  onClick={() => {
                    setShowYearDropdown(!showYearDropdown);
                    setShowMonthDropdown(false);
                    setShowDateDropdown(false);
                  }}
                  className="w-full px-4 py-2.5 border border-[#2C5284] rounded-lg text-left flex justify-between items-center hover:border-[#2C5284] transition-colors bg-white"
                >
                  <span>{selectedYear}</span>
                  <FaChevronDown size={12} />
                </button>
                {showYearDropdown && (
                  <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {years.map(year => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(year);
                          setShowYearDropdown(false);
                          setSelectedDate(null);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                          selectedYear === year ? 'bg-[#2C5284] text-white hover:bg-[#2C5284]' : ''
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Month Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                <button
                  onClick={() => {
                    setShowMonthDropdown(!showMonthDropdown);
                    setShowYearDropdown(false);
                    setShowDateDropdown(false);
                  }}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-left flex justify-between items-center hover:border-[#2C5284] transition-colors bg-white"
                >
                  <span>{MONTHS[selectedMonth - 1]}</span>
                  <FaChevronDown size={12} />
                </button>
                {showMonthDropdown && (
                  <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {MONTHS.map((month, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedMonth(idx + 1);
                          setShowMonthDropdown(false);
                          setSelectedDate(null);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                          selectedMonth === idx + 1 ? 'bg-[#2C5284] text-white hover:bg-[#2C5284]' : ''
                        }`}
                      >
                        {month}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Date Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <button
                  onClick={() => {
                    setShowDateDropdown(!showDateDropdown);
                    setShowYearDropdown(false);
                    setShowMonthDropdown(false);
                  }}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-left flex justify-between items-center hover:border-[#2C5284] transition-colors bg-white"
                >
                  <span>{selectedDate || 'All Dates'}</span>
                  <FaChevronDown size={12} />
                </button>
                {showDateDropdown && (
                  <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    <button
                      onClick={() => {
                        setSelectedDate(null);
                        setShowDateDropdown(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                        !selectedDate ? 'bg-[#2C5284] text-white hover:bg-[#2C5284]' : ''
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
                       selectedDate === date
                       ? 'bg-[#2C5284] text-white'
                       : date === today.getDate() &&
                       selectedMonth === today.getMonth() + 1 &&
                       selectedYear === today.getFullYear()
                       ? 'bg-green-100 font-semibold'
                       : ''
                       }`}>
                        
                        {date}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content - Two Columns */}
          {selectedDayRecord ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column - Clock Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {getDayName(selectedDayRecord.date)} — {selectedDayRecord.date}
                </h3>

                
                {/* Clock In */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Clock In</p>
                  <p className="text-2xl font-bold text-gray-800">{selectedDayRecord.checkIn}</p>
                </div>

                {/* Circular Progress */}
                <div className="flex justify-center my-8">
                  <div className="relative w-40 h-40">
                    <svg className="transform -rotate-90 w-40 h-40">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#2C5284"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 70}`}
                        strokeDashoffset={`${2 * Math.PI * 70 * (1 - getWorkHoursPercentage(selectedDayRecord.workHours) / 100)}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-800">
                        {selectedDayRecord.workHours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clock Out */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Clock Out</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {selectedDayRecord.checkOut || '(Did not clock out)'}
                  </p>
                </div>
              </div>

              {/* Right Column - Activity Timeline */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Activity</h3>
                
                <div className="space-y-6">
                  {/* Clock In Activity */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">Clock In</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          General Shift
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>🕐 {selectedDayRecord.date} {selectedDayRecord.checkIn}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>📍 Lahore, Pakistan</span>
                      </div>
                    </div>
                  </div>

                  {/* Clock Out Activity */}
                  {selectedDayRecord.checkOut && selectedDayRecord.checkOut !== '------' && (
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-800">Clock Out</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>🕐 {selectedDayRecord.date} {selectedDayRecord.checkOut}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>📍 Lahore, Pakistan</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Status:</span>
                      <span className={`px-4 py-2 rounded-full font-semibold ${
                        selectedDayRecord.status === 'Present' 
                          ? 'bg-green-100 text-green-800'
                          : selectedDayRecord.status === 'Absent'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedDayRecord.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <p className="text-gray-500 text-lg">No attendance record found for the selected date</p>
            </div>
          )}

          {/* All Records Table (when showing all dates) */}
          {!selectedDate && filteredRecords.length > 0 && (
            <div className="mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 bg-[#2C5284] border-b border-white">
                <h3 className="text-lg font-semibold text-white">
                  All Records for {MONTHS[selectedMonth - 1]} {selectedYear}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#2C5284]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Clock In
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Clock Out
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                          {record.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                          {record.checkIn}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                          {record.checkOut || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            record.status === 'Present'
                              ? 'bg-green-100 text-green-800'
                              : record.status === 'Absent'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                          {record.workHours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}