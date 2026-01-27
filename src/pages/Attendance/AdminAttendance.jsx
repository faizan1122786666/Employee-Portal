import React from 'react'
import { useEffect } from 'react'


function AdminAttendance({setTitle}) {
 useEffect(() => {
    setTitle('Attendance Page')
  }, [setTitle])
  
  return (
    <div>
      Admin Attendance
    </div>
  )
}

export default AdminAttendance