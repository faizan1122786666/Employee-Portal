// /* eslint-disable no-undef */
// import { useState } from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import Slidebar from './components/layout/Slidebar'
// import Header from './components/layout/Header'
// import Dashboard from './pages/Dashboard/Dashboard'
// import Attendance from './pages/Attendance/Attendance'
// import Leave from './pages/Leave/Leave'
// import Login from './pages/Auth/Login'
// import { AuthContextProvider, useAuthContext } from './context'

// function App() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [title, setTitle] = useState('Dashboard')
//   const [user, setUser] = useState(null)

//   const handleSlidebar = () => {
//     setIsOpen(!isOpen)
//   }


//   return (
//     <AuthContextProvider value={}>
//       <AuthContent
//       isOpen={isOpen}
//       handleSlidebar={handleSlidebar}
//       setTitle={setTitle}
//       />
//     </AuthContextProvider>
   
   
//   )
// }


// function AuthContent({isOpen,handleSlidebar,setTitle})
// {
//   const {user, Logout} = useAuthContext();

//   if(!user)
//   {
//     return <Login />
//   }

//   const handleLogout = () => {
//     Logout();
//   }

//   return (

//   <div className="flex h-screen overflow-hidden">
//       <Slidebar 
//         isOpen={isOpen} 
//         handleSlidebar={handleSlidebar} 
//         userEmail={user.email || '' }
//         userName={user.name || ''}
//         onLogout={handleLogout}
//       />

//   <div className="flex-1 flex flex-col">
//   // eslint-disable-next-line no-undef
//   <Header title={title} handleSlidebar={handleSlidebar} />

//   <main className="pt-16 px-6 bg-gray-50 flex-1 overflow-y-auto">
//       <Routes>
//           <Route path="/" element={<Dashboard setTitle={setTitle} />} />
//           <Route path="/attendance" element={<Attendance setTitle={setTitle} />} />
//           <Route path="/leave" element={<Leave setTitle={setTitle} />} />
//           {/* Agar already logged in hai aur /login pe jaaye to dashboard pe redirect */}
//           <Route path='/login' element={<Navigate to="/" replace/>} />
//           {/* Unknown routes ko dashboard pe redirect */}
//           <Route path='*' element={<Navigate to="/" replace />} />
//       </Routes>
//   </main>
//       </div>
//     </div>
      
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
           <Route path="/leave" element={
            user.role === 'admin' ? (
              <AdminLeave setTitle={setTitle} />
            ) : (
              <UserLeave setTitle={setTitle} />
            )
           } />
           {/* Agar already logged in hai aur /login pe jaaye to dashboard pe redirect */}
           <Route path='/login' element={<Navigate to="/" replace/>} />
           {/* Unknown routes ko dashboard pe redirect */}
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
