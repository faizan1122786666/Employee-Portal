import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

export default function Header({ title, handleSlidebar,darkMode,toggleDarkMode}) {
  return (
    // fixed top-0 right-0 h-16 bg-white z-40 flex items-center gap-4 px-6 border-b border-gray-200 left-0 lg:left-64
    <header
      className="
        fixed top-0 right-0 h-16 bg-white dark:bg-gray-900 dark:text-gray-200 z-40 flex items-center gap-4 px-6 border-b border-gray-200 left-0 lg:left-64">
            
       {/* Icon */}
      <button onClick={handleSlidebar} className="lg:hidden">
        <AiOutlineMenu size={24} />
      </button>
       
       {/* Title */}
      <h1 className="text-xl font-semibold text-[#2C5282]">
        {title}
      </h1>
      <div className='ml-auto' onClick={toggleDarkMode}>
        <button>
          {darkMode ?  <FiSun size={22}/> : <FiMoon size={22}/>}
      </button>

      </div>

       
    

      {/* <button
      onClick={toggleDarkMode}
      className="text-gray-700 dark:text-yellow-400">
        {darkMode ? <FiSun size={22}/> : <FiMoon size={22}/>}
      </button> */}
    </header>
  )
}


