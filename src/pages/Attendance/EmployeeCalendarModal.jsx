import { useMemo } from 'react';
import mockAttendanceData from '../../data/mockAttendanceData';

const STATUS_ICONS = {
  Present:   { icon: '✓',  color: 'text-green-600',   bg: 'bg-green-100' },
  Absent:    { icon: '×',  color: 'text-red-600',     bg: 'bg-red-100'   },
  Leave:     { icon: '⇢',  color: 'text-blue-600',    bg: 'bg-blue-100'  },  // or use ⇢ or ✘ or 🏖
  Late:      { icon: '○',  color: 'text-yellow-600',  bg: 'bg-yellow-100'},
  HalfDay:   { icon: '★',  color: 'text-purple-600',  bg: 'bg-purple-100'},
  // add more if needed: Holiday: '☆', DayOff: '■', etc.
  default:   { icon: '-',  color: 'text-gray-400',    bg: 'bg-gray-50'   }
};

function getStatusForDate(records, dateStr) {
  const record = records.find(r => r.date === dateStr);
  if (!record) return 'default';
  return record.status;
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month - 1, 1).getDay(); // 0 = Sunday, 1 = Monday, ...
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

export default function EmployeeCalendarModal({ employee, month, year, onClose }) {
  const records = useMemo(() => {
    return mockAttendanceData.filter(r => r.employeeId === employee.id);
  }, [employee.id]);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month); // 0=Sun ... 6=Sat

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Build grid: array of weeks, each week has 7 days (some empty at start)
  const calendarDays = [];
  let day = 1;
  let week = Array(firstDay).fill(null); // empty cells before 1st

  while (day <= daysInMonth) {
    week.push(day);
    if (week.length === 7) {
      calendarDays.push(week);
      week = [];
    }
    day++;
  }
  if (week.length > 0) calendarDays.push(week.concat(Array(7 - week.length).fill(null)));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{employee.name}</h2>
              <p className="text-gray-600">Frontend Developer • {employee.email}</p>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-semibold">
                {new Date(year, month - 1).toLocaleString('default', { month: 'long' })} {year}
              </h3>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Legend */}
          <div className="mb-6 bg-gray-50 p-3 rounded border">
            <p className="font-medium mb-2">Legend:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span><span className="text-green-600 font-bold">✓</span> Present</span>
              <span><span className="text-red-600 font-bold">×</span> Absent</span>
              <span><span className="text-blue-600 font-bold">⇢</span> On Leave</span>
              <span><span className="text-yellow-600 font-bold">○</span> Late</span>
              <span><span className="text-purple-600 font-bold">★</span> Half Day</span>
              {/* Add more if you have Holiday, Day Off, etc. */}
            </div>
          </div>

          {/* Calendar Grid */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {weekdays.map(wd => (
                  <th key={wd} className="p-3 text-center text-sm font-medium border">
                    {wd}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendarDays.map((week, weekIdx) => (
                <tr key={weekIdx}>
                  {week.map((dayNum, idx) => {
                    if (dayNum === null) {
                      return <td key={idx} className="p-3 border bg-gray-50"></td>;
                    }

                    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                    const status = getStatusForDate(records, dateStr);
                    const style = STATUS_ICONS[status] || STATUS_ICONS.default;

                    return (
                      <td 
                        key={idx} 
                        className={`p-3 text-center border text-lg font-medium ${style.bg} ${style.color}`}
                      >
                        {dayNum}<br />
                        <span className="text-2xl">{style.icon}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Optional: show clock in/out list below calendar for the month */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Detailed Records</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Clock In</th>
                    <th className="p-3 text-left">Clock Out</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Work Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {records
                    .filter(r => {
                      const d = new Date(r.date);
                      return d.getMonth() + 1 === month && d.getFullYear() === year;
                    })
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map(r => (
                      <tr key={r.id} className="border-b">
                        <td className="p-3">{new Date(r.date).toLocaleDateString()}</td>
                        <td className="p-3">{r.checkIn}</td>
                        <td className="p-3">{r.checkOut}</td>
                        <td className="p-3">{r.status}</td>
                        <td className="p-3">{r.workHours}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}