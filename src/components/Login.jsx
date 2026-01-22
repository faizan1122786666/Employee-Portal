import React, { useState } from 'react'

function Login({onLogin}) {

  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if(Email && Password)
    {
      onLogin();
    }
  }

  return (
    <div className='flex items-center bg-[#2C5282] justify-center min-h-screen p-4 bg-neutral-secondary-light'>
      <div className='w-full max-w-xs sm:max-w-sm border border-default-medium rounded-lg sm:rounded-xl shadow-lg bg-white p-6 sm:p-8'>
        <div className="text-center mb-6 sm:mb-8">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#2C5282] mb-3">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
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
          <div class="mb-4 sm:mb-5">
            <label for="email" class="block mb-2 sm:mb-2.5 text-xs sm:text-sm
            font-bold text-heading">Email</label>
            <input 
              type="email" 
              value={Email}
              onChange={(e)=> setEmail(e.target.value)}
              id="email" 
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 sm:py-2.5 shadow-xs placeholder:text-body" 
              placeholder="employee@company.com" 
              required />

          </div>
          <div class="mb-6 sm:mb-8">
            <label for="password" class="block mb-2 sm:mb-2.5 text-xs sm:text-sm font-bold text-heading">Password</label>
            <input 
              type="password" 
              value={Password}
              onChange={(e)=> setPassword(e.target.value)}
              id="password" 
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 sm:py-2.5 shadow-xs placeholder:text-body" 
              placeholder="••••••••" 
              required/>

          </div>
          <button 
            type="submit" 
            class="w-full cursor-pointer hover:bg-[#2C520] text-white bg-[#2C5282] box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs sm:text-sm px-4 py-2.5 sm:py-2.5 focus:outline-none transition-colors duration-200">
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
            For authorized personel only
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login