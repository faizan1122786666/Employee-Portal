import React from 'react'
import { useEffect } from 'react';

function AdminLeave({setTitle}) {
  useEffect ( () => {
  setTitle('Leave Page');
  },[setTitle])

  return (
    <div>
      Admin Leave
    </div>
  )
}

export default AdminLeave