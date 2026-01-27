import React from 'react'
import { useEffect } from 'react'


function UserAttendance({setTitle}) {
 useEffect(() => {
    setTitle('Attendance Page')
  }, [setTitle])
  
  return (
    <div>
      User Attendance
    </div>
  )
}

export default UserAttendance