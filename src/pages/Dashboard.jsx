import { useEffect } from 'react'

function Dashboard({ setTitle }) {
  useEffect(() => {
    setTitle('Dashboard Page')
  }, [setTitle])

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#2C5282]">
        Hye, How are you
      </h2>
    </div>
  )
}

export default Dashboard
