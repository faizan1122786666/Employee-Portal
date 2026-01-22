import React, { useState } from 'react';
import { X, LayoutDashboard, Clock, Calendar,Users, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Slidebar({ isOpen, handleSlidebar }) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Attendance', icon: Clock, path: '/attendance' },
    { name: 'Leave', icon: Calendar, path: '/leave' },
  ];

 
  const handleMenuItemClick = (itemName) => {
    
    setActiveItem(itemName);
    
    if (window.innerWidth < 1024) {
      handleSlidebar();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-100 bg-opacity-50 z-40 lg:hidden"
          onClick={handleSlidebar}/>
      )}

      <div className={`h-screen w-64 bg-[#2C5282] text-white fixed top-0 left-0 transform transition-transform duration-300 ease-in-out z-50
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}> 
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <Users size={30} className="text-white mr-4"/>
          {/* <h1><span className='font-extrabold text-xl'>Employee Portal</span></h1> */}
          <h1 className="font-bold text-2xl bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
  Employee Portal
</h1>
          <button onClick={handleSlidebar} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => handleMenuItemClick(item.name)}
                end={item.path === '/'}
                className={({ isActive }) => 
                  `w-full flex items-center px-6 py-3 transition-colors 
                  ${isActive ? 'bg-slate-800 text-white border-l-4 border-[#2C5284]' 
                    : 'text-white hover:bg-slate-800'}`
                }
              >
                <Icon size={20} className="mr-3" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
}