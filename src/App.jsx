import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Slidebar from './components/layout/Slidebar'
import Header from './components/layout/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Attendance from './pages/Attendance/Attendance'
import Leave from './pages/Leave/Leave'
import Login from './pages/Auth/Login'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('Dashboard')
  const [isLogin, setisLogin] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')

  const handleSlidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogin = (email, name) => {
    setUserEmail(email)
    setUserName(name)
    setisLogin(true)
  }

  const handleLogout = () => {
    setisLogin(false)
    setUserEmail('')
    setUserName('')
  }

  if(!isLogin) {
    return <Login onLogin={handleLogin}/>
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Slidebar 
        isOpen={isOpen} 
        handleSlidebar={handleSlidebar} 
        userEmail={userEmail}
        userName={userName}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col">
        <Header title={title} handleSlidebar={handleSlidebar} />

        <main className="pt-16 px-6 bg-gray-50 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard setTitle={setTitle} />} />
            <Route path="/attendance" element={<Attendance setTitle={setTitle} />} />
            <Route path="/leave" element={<Leave setTitle={setTitle} />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App










