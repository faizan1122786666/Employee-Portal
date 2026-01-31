import React, { useState, useEffect } from 'react';
import { getEmployeeRecords } from '../../data/mockAttendanceData';
import { FaTimes, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function EmployeeAttendanceModal({ employee, onClose }) {
  const [records, setRecords] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1); // January
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState(null);

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
    { value: 12, label: 'December', short: 'Dec' }
  ];

  useEffect(() => {
    const employeeRecords = getEmployeeRecords(employee.employeeId);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRecords(employeeRecords);
  }, [employee.employeeId]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getRecordForDate = (date) => {
    const dateStr = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    return records.find(r => r.date === dateStr);
  };

  const getDayName = (date) => {
    const dateObj = new Date(selectedYear, selectedMonth - 1, date);
    return dateObj.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getStatusIcon = (status) => {
    if (status === 'Present') return '✓';
    if (status === 'Leave') return '●';
    if (status === 'Absent') return '×';
    return '';
  };

  const getStatusIconComponent = (status) => {
    if (status === 'Present') {
      return <FaCheckCircle className='text-green-600' size={18} />;
    } else if (status === 'Leave') {
      return <FaCalendarAlt className='text-yellow-600' size={18} />;
    } else {
      return <FaTimesCircle className='text-red-600' size={18} />;
    }
  };

  const selectedRecord = selectedDate ? getRecordForDate(selectedDate) : null;

  // Calculate work hours in hours and minutes
  const calculateWorkDuration = (workHours) => {
    if (!workHours || workHours === '------') return null;
    const match = workHours.match(/(\d+)h\s*(\d+)?m?/);
    if (match) {
      const hours = parseInt(match[1]);
      const minutes = match[2] ? parseInt(match[2]) : 0;
      return { hours, minutes, total: hours + minutes / 60 };
    }
    return null;
  };

  const workDuration = selectedRecord ? calculateWorkDuration(selectedRecord.workHours) : null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto'>
        {/* Header */}
        <div className='bg-[#365F8D] text-white p-6 rounded-t-2xl flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Attendance Details</h2>
          <button
            onClick={onClose}
            className='text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors'
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Employee Info */}
        <div className='p-6 border-b border-gray-200'>
          <div className='flex items-center gap-4'>
            <div className='w-16 h-16 rounded-full bg-[#365F8D] flex items-center justify-center text-white text-2xl font-bold'>
              {employee.name.charAt(0)}
            </div>
            <div>
              <h3 className='text-xl font-bold text-gray-900'>{employee.name}</h3>
              <p className='text-sm text-gray-600'>Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Month/Year Selector */}
        <div className='p-6 border-b border-gray-200 flex gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Month</label>
            <select
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(parseInt(e.target.value));
                setSelectedDate(null);
              }}
              className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#365F8D] focus:border-transparent'
            >
              {months.map(month => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Year</label>
            <select
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(parseInt(e.target.value));
                setSelectedDate(null);
              }}
              className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#365F8D] focus:border-transparent'
            >
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
            </select>
          </div>
        </div>

        {/* Legend */}
        <div className='px-6 py-4 bg-gray-50 border-b border-gray-200'>
          <div className='flex flex-wrap gap-6 text-sm'>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>Note:</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-600 font-bold'>✓</span>
              <span>→ Holiday</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-red-600 font-bold'>□</span>
              <span>→ Day Off</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-600 font-bold'>✓</span>
              <span>→ Present</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-red-600 font-bold'>×</span>
              <span>→ Half Day</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-600 font-bold'>●</span>
              <span>→ Late</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-red-600 font-bold'>×</span>
              <span>→ Absent</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-orange-600 font-bold'>≡</span>
              <span>→ On Leave</span>
            </div>
          </div>
        </div>

        {/* Horizontal Calendar */}
        <div className='p-6 overflow-x-auto'>
          <div className='inline-flex gap-1 min-w-full'>
            {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, i) => i + 1).map(date => {
              const record = getRecordForDate(date);
              const dayName = getDayName(date);
              const isSelected = selectedDate === date;
              
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`flex flex-col items-center px-3 py-2 border rounded-lg transition-all min-w-[60px] ${
                    isSelected 
                      ? 'bg-[#365F8D] text-white border-[#365F8D]' 
                      : 'bg-white hover:bg-gray-50 border-gray-300'
                  }`}
                >
                  <span className='text-xs font-medium mb-1'>{date}</span>
                  <span className='text-[10px] mb-1 opacity-70'>{dayName}</span>
                  {record ? (
                    <span className={`text-lg font-bold ${
                      isSelected 
                        ? 'text-white' 
                        : record.status === 'Present' 
                          ? 'text-green-600' 
                          : record.status === 'Leave'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                    }`}>
                      {getStatusIcon(record.status)}
                    </span>
                  ) : (
                    <span className='text-gray-300 text-xs'>-</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Details Section */}
        {selectedRecord ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
            {/* Left Side - Date & Times */}
            <div className='space-y-6'>
              <div>
                <h4 className='text-sm font-semibold text-gray-700 mb-2'>
                  Date - {selectedDate}-{String(selectedMonth).padStart(2, '0')}-{selectedYear} (
                  {getDayName(selectedDate)})
                </h4>
              </div>

              <div>
                <p className='text-sm text-gray-600 mb-1'>Clock In</p>
                <p className='text-2xl font-bold text-gray-900'>{selectedRecord.checkIn}</p>
              </div>

              {/* Circular Progress */}
              {workDuration && (
                <div className='flex justify-center'>
                  <div className='relative w-48 h-48'>
                    <svg className='w-full h-full transform -rotate-90'>
                      <circle
                        cx='96'
                        cy='96'
                        r='88'
                        stroke='#e5e7eb'
                        strokeWidth='8'
                        fill='none'
                      />
                      <circle
                        cx='96'
                        cy='96'
                        r='88'
                        stroke='#365F8D'
                        strokeWidth='8'
                        fill='none'
                        strokeDasharray={`${(workDuration.total / 24) * 552.92} 552.92`}
                        strokeLinecap='round'
                      />
                    </svg>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-2xl font-bold text-gray-900'>
                        {selectedRecord.workHours}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <p className='text-sm text-gray-600 mb-1'>Clock Out</p>
                <p className='text-xl font-bold text-gray-900'>
                  {selectedRecord.checkOut === '------' 
                    ? '00:00 pm (Did not clock out)' 
                    : selectedRecord.checkOut}
                </p>
              </div>
            </div>

            {/* Right Side - Activity */}
            <div>
              <h4 className='text-lg font-bold text-gray-900 mb-4'>Activity</h4>
              <div className='space-y-4'>
                {/* Clock In Activity */}
                <div className='flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200'>
                  <div className='mt-1'>
                    {getStatusIconComponent(selectedRecord.status)}
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-1'>
                      <p className='font-semibold text-gray-900'>Clock In</p>
                      <span className='px-2 py-0.5 bg-green-600 text-white text-xs rounded-full'>
                        General Shift
                      </span>
                    </div>
                    <p className='text-sm text-gray-600'>
                      ⏰ {selectedDate}-01-{selectedYear} {selectedRecord.checkIn}
                    </p>
                    {selectedRecord.status === 'Present' && (
                      <div className='flex items-center gap-1 text-sm text-gray-600 mt-1'>
                        <FaMapMarkerAlt size={12} />
                        <span>Lahore, Punjab</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Clock Out Activity */}
                {selectedRecord.checkOut !== '------' && (
                  <div className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200'>
                    <div className='mt-1'>
                      <FaTimesCircle className='text-gray-600' size={18} />
                    </div>
                    <div className='flex-1'>
                      <p className='font-semibold text-gray-900 mb-1'>Clock Out</p>
                      <p className='text-sm text-gray-600'>
                        ⏰ {selectedDate}-01-{selectedYear} {selectedRecord.checkOut}
                      </p>
                      <div className='flex items-center gap-1 text-sm text-gray-600 mt-1'>
                        <FaMapMarkerAlt size={12} />
                        <span>Lahore, Punjab</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className='p-12 text-center text-gray-500'>
            <p className='text-lg font-medium'>Select a date to view details</p>
            <p className='text-sm mt-2'>Click on any date in the calendar above</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeAttendanceModal;