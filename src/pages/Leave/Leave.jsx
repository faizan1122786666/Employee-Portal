import React from 'react'
import { useEffect } from 'react';

function Leave({setTitle}) {
  useEffect ( () => {
  setTitle('Leave Page');
  },[setTitle])

  return (
    <div>
      
    </div>
  )
}

export default Leave
