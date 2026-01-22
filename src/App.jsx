import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Slidebar from './components/Slidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import Login from './components/Login'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('Dashboard')
  const [isLogin,setisLogin] = useState(false);

  const handleSlidebar = () => 
  {
      setIsOpen(!isOpen)
  }

  const handleLogin = () =>{
    setisLogin(true);
  }
  if(!isLogin)
  {
    return <Login onLogin={handleLogin}/>
  }

  return (
    <div className="flex h-screen overflow-hidden">

      <Slidebar isOpen={isOpen} handleSlidebar={handleSlidebar} />

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
