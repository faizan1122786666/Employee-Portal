


// import { useEffect, useState } from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import Slidebar from './components/layout/Slidebar'
// import Header from './components/layout/Header'
// import Login from './pages/Auth/Login'
// import { AuthContextProvider} from './context'
// import {AdminDashboard,UserDashboard} from './pages/Dashboard/index'
// import {AdminAttendance,UserAttendance} from './pages/Attendance/index'
// import { AdminLeave,UserLeave } from './pages/Leave/index'
// import EmployeeDetail from './pages/Attendance/EmployeeDetail'
// function App () {
//   const [isOpen, setIsOpen] = useState(false)
//   const [title, setTitle] = useState('Dashboard')
//   const [user, setUser] = useState(null)
  
//   const handleSlidebar = () => {
//     setIsOpen(!isOpen)
//   }

//   useEffect (() => {
//     const stored = localStorage.getItem('user')
//     if(stored)
//     {
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setUser(JSON.parse(stored))
//     }
//   },[]) 

//   const handleLogin = (userData) => {
//   localStorage.setItem('user',JSON.stringify(userData))
//   setUser(userData)
//   }
  
//   const handleLogout = () => {
//     localStorage.removeItem('user')
//     setUser(null)
//   }


//   return (
//     <AuthContextProvider value={{user, handleLogin, handleLogout}}>
//       <div className="flex h-screen overflow-hidden">
//       { user ? (
//         <>
//        <Slidebar 
//          isOpen={isOpen} 
//          handleSlidebar={handleSlidebar} 
//          userEmail={user.email || '' }
//          userName={user.name || ''}
//          onLogout={handleLogout}/>

//            <div className="flex-1 flex flex-col">

//    <Header title={title} handleSlidebar={handleSlidebar} />

//    <main className="pt-16 px-6 bg-gray-50 flex-1 overflow-y-auto">
//        <Routes>
//            <Route path="/" element={ 
//             user.role === 'admin' ? (
//                <AdminDashboard setTitle={setTitle} />
//             ) : (
//               <UserDashboard setTitle={setTitle} />
//             )
//             } 
//             />
//            <Route path="/attendance" element={
//             user.role === 'admin' ? (
//             <AdminAttendance setTitle={setTitle} /> )
//             : (
//             <UserAttendance setTitle={setTitle} />
//             )
//             } />
//            <Route path="/leave" element={
//             user.role === 'admin' ? (
//               <AdminLeave setTitle={setTitle} />
//             ) : (
//               <UserLeave setTitle={setTitle} />
//             )
//            } />
//            {/* // App.jsx ke andar <Routes> mein yeh line add karo */}

//            <Route 
//            path="/attendance/employee-detail/:employeeName" 
//            element={<EmployeeDetail setTitle={setTitle} />} 
//            />
//            {/* Agar already logged in hai aur /login pe jaaye to dashboard pe redirect */}
//            <Route path='/login' element={<Navigate to="/" replace/>} />
//            {/* Unknown routes ko dashboard pe redirect */}
//            <Route path='*' element={<Navigate to="/" replace />} />
//        </Routes>
//    </main>
//       </div>
//        </> ) : (
//         <Login />
//         )}

//         </div>
//     </AuthContextProvider>
//   )
// }

// export default App













import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Slidebar from './components/layout/Slidebar'
import Header from './components/layout/Header'
import Login from './pages/Auth/Login'
import { AuthContextProvider} from './context'
import {AdminDashboard,UserDashboard} from './pages/Dashboard/index'
import {AdminAttendance,UserAttendance} from './pages/Attendance/index'
import { AdminLeave,UserLeave } from './pages/Leave/index'
import EmployeeAttendanceModal from './pages/Attendance/EmployeeAttendanceModal'

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('Dashboard')
  const [user, setUser] = useState(null)
  
  const handleSlidebar = () => {
    setIsOpen(!isOpen)
  }

  useEffect (() => {
    const stored = localStorage.getItem('user')
    if(stored)
    {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(stored))
    }
  },[]) 

  const handleLogin = (userData) => {
  localStorage.setItem('user',JSON.stringify(userData))
  setUser(userData)
  }
  
  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }


  return (
    <AuthContextProvider value={{user, handleLogin, handleLogout}}>
      <div className="flex h-screen overflow-hidden">
      { user ? (
        <>
       <Slidebar 
         isOpen={isOpen} 
         handleSlidebar={handleSlidebar} 
         userEmail={user.email || '' }
         userName={user.name || ''}
         onLogout={handleLogout}/>

           <div className="flex-1 flex flex-col">

   <Header title={title} handleSlidebar={handleSlidebar} />

   <main className="pt-16 px-6 bg-gray-50 flex-1 overflow-y-auto">
       <Routes>
           <Route path="/" element={ 
            user.role === 'admin' ? (
               <AdminDashboard setTitle={setTitle} />
            ) : (
              <UserDashboard setTitle={setTitle} />
            )
            } 
            />
           <Route path="/attendance" element={
            user.role === 'admin' ? (
            <AdminAttendance setTitle={setTitle} /> )
            : (
            <UserAttendance setTitle={setTitle} />
            )
            } />
           
           {/* Employee Detail Route - Only for Admin */}
           {user.role === 'admin' && (
  <Route
    path="/attendance/employee/:employeeId"
    element={<EmployeeAttendanceModal setTitle={setTitle} />}
  />
)}
           
           <Route path="/leave" element={
            user.role === 'admin' ? (
              <AdminLeave setTitle={setTitle} />
            ) : (
              <UserLeave setTitle={setTitle} />
            )
           } />
           
           {/* Redirect to dashboard if already logged in */}
           <Route path='/login' element={<Navigate to="/" replace/>} />
           
           {/* Catch all - redirect to dashboard */}
           <Route path='*' element={<Navigate to="/" replace />} />
       </Routes>
   </main>
      </div>
       </> ) : (
        <Login />
        )}

        </div>
    </AuthContextProvider>
  )
}

export default App