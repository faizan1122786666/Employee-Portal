import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
function Login({onLogin}) {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [FullName, setFullName] = useState('')
  
  const handleLogin = (e) => {
    e.preventDefault()
    if(Email && Password && FullName) {
      onLogin(Email, FullName)
    }
  }

  return (
    <div className='flex items-center bg-[#2C5282] justify-center min-h-screen p-4 bg-neutral-secondary-light'>
      <div className='w-full max-w-xs sm:max-w-sm border border-default-medium rounded-lg sm:rounded-xl shadow-lg bg-white p-6 sm:p-8'>
        <div className="text-center mb-6 sm:mb-8">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#2C5282] mb-3">
              <CgProfile size={38} className="text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-heading mb-2">
              Employee Portal
            </h1>
            <p className="text-xs sm:text-sm text-body">
              Sign in to access your dashboard
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="fullname" className="block mb-2 sm:mb-2.5 text-xs sm:text-sm font-bold text-heading">Full Name</label>
            <input 
              type="text" 
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              id="fullname" 
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 sm:py-2.5 shadow-xs placeholder:text-body" 
              placeholder="Full Name" 
              required />
          </div>

          <div className="mb-4 sm:mb-5">
            <label htmlFor="email" className="block mb-2 sm:mb-2.5 text-xs sm:text-sm font-bold text-heading">Email</label>
            <input 
              type="email" 
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              id="email" 
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 sm:py-2.5 shadow-xs placeholder:text-body" 
              placeholder="employee@company.com" 
              required />
          </div>

          <div className="mb-4 sm:mb-5">
            <label htmlFor="password" className="block mb-2 sm:mb-2.5 text-xs sm:text-sm font-bold text-heading">Password</label>
            <input 
              type="password" 
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              id="password" 
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 sm:py-2.5 shadow-xs placeholder:text-body" 
              placeholder="••••••••" 
              required/>
          </div>

          <button 
            type="submit" 
            className="w-full cursor-pointer hover:bg-[#2C520] text-white bg-[#2C5282] box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs sm:text-sm px-4 py-2.5 sm:py-2.5 focus:outline-none transition-colors duration-200">
            Access Portal
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <a href="#" className="block text-xs sm:text-sm text-brand hover:text-brand-strong transition-colors duration-200">
            Forgot employee <span className='text-blue-700 hover:underline'>password?</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-default-medium">
          <p className="text-xs text-center text-body">
            &copy; {new Date().getFullYear()} Company Name. Employee Portal v2.0
          </p>
          <p className="text-xs text-center text-body mt-1">
            For authorized personnel only
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login