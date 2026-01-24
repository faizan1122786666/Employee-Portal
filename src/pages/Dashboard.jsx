/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { Doughnut,Line } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
import { LineElement, PointElement, CategoryScale, LinearScale, Title } from 'chart.js'
ChartJS.register(
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
)
const mockdata = {
  totalemployees: 110,
  todaypresent: 95,
  todayabsent: 10,
  todayleave: 5,
}

const chartData = {
  labels: ['Present', 'Absent', 'On Leave'],
  datasets: [
    {
      label: 'Employees',
      data: [
        mockdata.todaypresent,
        mockdata.todayabsent,
        mockdata.todayleave,
      ],
      backgroundColor: [
        'rgb(71, 85, 105)',  
        'rgb(148, 163, 184)',   
        'rgb(203, 213, 225)',   
      ],
      hoverOffset: 4,
    },
  ],
}

const weeklyAttendanceLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weeklyAttendanceData = {
  labels: weeklyAttendanceLabels,
  datasets: [
    {
      label: 'Present Employees',
      data: [95, 90, 85, 92, 88, 94, 90],
      fill: false,
      borderColor: 'rgb(71, 85, 105)',
      backgroundColor: 'rgba(71, 85, 105, 0.2)',
      tension: 0.3,
      pointBackgroundColor: 'rgb(71, 85, 105)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
    },
  ],
};


const EmployeeTaskPerformanceDate = {
   labels:['Completed','Pending','In Progress'],
   datasets:[
    {
      label:'Tasks',
      data:[
        mockdata.todaypresent,
        mockdata.todayabsent,
        mockdata.todayabsent,
      ],
       backgroundColor: [
        'rgb(71, 85, 105)',   
        'rgb(148, 163, 184)',  
        'rgb(203, 213, 225)',   
      ],
      hoverOffset:4,
    },
   ],
}
function Dashboard({ setTitle }) {
  const [data, setData] = useState(mockdata)

  useEffect(() => {
    setTitle('Dashboard Page')
  }, [setTitle])

  return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
      <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
        <div>
          <p className="text-sm sm:text-base text-[#2C5284]">
            Total Employees
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
            {data.totalemployees}
          </h1>
        </div>

        <div className="bg-slate-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <CgProfile size={24} className="text-white" />
        </div>
      </div>

         <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
          <div>
          <p className="text-sm sm:text-base text-[#2C5284]">
            Present Today
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
            {data.todaypresent}
          </h1>
        </div>
         <div className="bg-slate-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <FaRegCheckCircle size={24} className="text-white" />
        </div>
      </div>

        <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
          <div>
          <p className="text-sm sm:text-base text-[#2C5284]">
            Absent Today
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
            {data.todayabsent}
          </h1>
        </div>
        <div className="bg-slate-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <RxCrossCircled size={24} className="text-white" />
        </div>
      </div>

       <div className="bg-white p-5 rounded-xl border-l-4 border-[#2C5284] flex items-center justify-between shadow w-full min-h-30 hover:shadow-xl transform transition duration-300 ease-in-out">
          <div>
          <p className="text-sm sm:text-base text-[#2C5284]">
            onLeave
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C5284]">
            {data.todayleave}
          </h1>
        </div>
        <div className="bg-slate-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <SlCalender size={24} className="text-white" />
        </div>
      </div>

    </div>


   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
   <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transform transition duration-300 ease-in-out">
    <h2 className="text-lg font-bold text-[#2C5284] mb-4">
      Today Attendance Overview
    </h2>

    <div className="w-full flex justify-center">
      <div className="w-64 sm:w-72 md:w-64">
        <Doughnut data={chartData} />
       </div>
     </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transform transition  duration-300 ease-in-out">
    <h2 className="text-lg font-bold text-[#2C5284] mb-4">
      Today Employee Task Performance
    </h2>

    <div className="w-full flex justify-center">
      <div className="w-64 sm:w-72 md:w-64">
        <Doughnut data={EmployeeTaskPerformanceDate} />
      </div>
    </div>
    </div>
  </div>

  <div className="grid grid-cols-1 mt-10">
    <div  className="bg-white p-6 rounded-xl shadow hover:shadow-xl transform transition duration-300 ease-in-out">
      <h2  className="text-lg font-bold text-[#2C5284] mb-4">
        Weekly Attendance Overview</h2>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-3/4 lg:w-2/3">
           <Line data={weeklyAttendanceData} options={{maintainAspectRatio:false}}/>
        </div>
      </div>
    </div>
  </div>

  </>
  )
}

export default Dashboard



























// import { useState, useEffect } from 'react';
// import { AiOutlineUser, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineCalendar } from 'react-icons/ai';

// // Mock data - Replace with API calls later
// const mockData = {
//   totalEmployees: 150,
//   presentToday: 132,
//   absentToday: 18,
//   onLeave: 12,
//   weeklyAttendance: [
//     { day: 'Mon', present: 142, absent: 8 },
//     { day: 'Tue', present: 138, absent: 12 },
//     { day: 'Wed', present: 145, absent: 5 },
//     { day: 'Thu', present: 140, absent: 10 },
//     { day: 'Fri', present: 132, absent: 18 },
//   ],
//   departments: [
//     { name: 'Engineering', count: 45, percentage: 30 },
//     { name: 'Sales', count: 35, percentage: 23 },
//     { name: 'Marketing', count: 25, percentage: 17 },
//     { name: 'HR', count: 20, percentage: 13 },
//     { name: 'Finance', count: 25, percentage: 17 },
//   ]
// };

// function Dashboard({ setTitle }) {
//   const [data, setData] = useState(mockData);

//   useEffect(() => {
//     setTitle('Dashboard');
//   }, [setTitle]);

//   // Calculate attendance percentage
//   const attendanceRate = ((data.presentToday / data.totalEmployees) * 100).toFixed(1);

//   // Stat Card Component
//   const StatCard = ({ title, value, icon: Icon, color, subtitle }) => (
//     <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow" style={{ borderColor: color }}>
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
//           <h3 className="text-3xl font-bold" style={{ color }}>{value}</h3>
//           {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
//         </div>
//         <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
//           <Icon size={24} style={{ color }} />
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-[#2C5282] mb-2">Welcome, Admin</h2>
//         <p className="text-gray-600">Here's what's happening with your team today</p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard 
//           title="Total Employees" 
//           value={data.totalEmployees} 
//           icon={AiOutlineUser}
//           color="#2C5282"
//         />
//         <StatCard 
//           title="Present Today" 
//           value={data.presentToday} 
//           icon={AiOutlineCheckCircle}
//           color="#10B981"
//           subtitle={`${attendanceRate}% attendance`}
//         />
//         <StatCard 
//           title="Absent Today" 
//           value={data.absentToday} 
//           icon={AiOutlineCloseCircle}
//           color="#EF4444"
//         />
//         <StatCard 
//           title="On Leave" 
//           value={data.onLeave} 
//           icon={AiOutlineCalendar}
//           color="#F59E0B"
//         />
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Weekly Attendance Chart */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-lg font-bold text-[#2C5282] mb-4">Weekly Attendance</h3>
//           <div className="space-y-4">
//             {data.weeklyAttendance.map((day, index) => {
//               const total = day.present + day.absent;
//               const presentPercent = (day.present / total) * 100;
              
//               return (
//                 <div key={index}>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="font-medium">{day.day}</span>
//                     <span className="text-gray-600">{day.present}/{total}</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
//                     <div 
//                       className="bg-gradient-to-r from-[#2C5282] to-[#4299E1] h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
//                       style={{ width: `${presentPercent}%` }}
//                     >
//                       <span className="text-xs text-white font-medium">
//                         {presentPercent.toFixed(0)}%
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Department Distribution */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-lg font-bold text-[#2C5282] mb-4">Department Distribution</h3>
//           <div className="space-y-4">
//             {data.departments.map((dept, index) => {
//               const colors = ['#2C5282', '#4299E1', '#10B981', '#F59E0B', '#EF4444'];
//               const color = colors[index % colors.length];
              
//               return (
//                 <div key={index}>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="font-medium">{dept.name}</span>
//                     <span className="text-gray-600">{dept.count} employees</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                     <div 
//                       className="h-full rounded-full transition-all duration-500"
//                       style={{ 
//                         width: `${dept.percentage}%`,
//                         backgroundColor: color
//                       }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Attendance Overview */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h3 className="text-lg font-bold text-[#2C5282] mb-4">Today's Attendance Overview</h3>
//         <div className="flex items-center justify-center py-8">
//           <div className="relative w-64 h-64">
//             <svg viewBox="0 0 200 200" className="transform -rotate-90">
//               {/* Background circle */}
//               <circle
//                 cx="100"
//                 cy="100"
//                 r="80"
//                 fill="none"
//                 stroke="#E5E7EB"
//                 strokeWidth="20"
//               />
//               {/* Present arc */}
//               <circle
//                 cx="100"
//                 cy="100"
//                 r="80"
//                 fill="none"
//                 stroke="#10B981"
//                 strokeWidth="20"
//                 strokeDasharray={`${(data.presentToday / data.totalEmployees) * 502.4} 502.4`}
//                 className="transition-all duration-1000"
//               />
//             </svg>
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               <div className="text-4xl font-bold text-[#2C5282]">{attendanceRate}%</div>
//               <div className="text-sm text-gray-600 mt-1">Attendance Rate</div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center gap-8 mt-4">
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 rounded-full bg-[#10B981]"></div>
//             <span className="text-sm">Present ({data.presentToday})</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 rounded-full bg-gray-300"></div>
//             <span className="text-sm">Absent ({data.absentToday})</span>
//           </div>
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h3 className="text-lg font-bold text-[#2C5282] mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <button className="p-4 border-2 border-[#2C5282] rounded-lg hover:bg-[#2C5282] hover:text-white transition-colors text-center">
//             <div className="font-medium">Add Employee</div>
//           </button>
//           <button className="p-4 border-2 border-[#10B981] rounded-lg hover:bg-[#10B981] hover:text-white transition-colors text-center">
//             <div className="font-medium">Mark Attendance</div>
//           </button>
//           <button className="p-4 border-2 border-[#F59E0B] rounded-lg hover:bg-[#F59E0B] hover:text-white transition-colors text-center">
//             <div className="font-medium">Approve Leave</div>
//           </button>
//           <button className="p-4 border-2 border-[#8B5CF6] rounded-lg hover:bg-[#8B5CF6] hover:text-white transition-colors text-center">
//             <div className="font-medium">View Reports</div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;