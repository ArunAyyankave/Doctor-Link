import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

function UserNavbar() {

  const navigate = useNavigate();

  const { mobile, name } = useSelector((state) => state.user);


  return (
    <div className='fixed w-full z-10 top-0 bg-white '>
      <nav className='px-2 py-4 shadow-md '>
        <div className='w-screen sm:mt-0 sm:container flex flex-wrap justify-between items-center mx-auto'>
          <div className=''>
            <span className='text-bold text-xl sm:text-3xl italic font-semibold self-center cursor-pointer select-none'><Link to="/" className='link'>Doctor Link</Link></span>
          </div>
          <div className='items-center'>
            <a className='text-xs sm:text-lg cursor-pointer hover:text-blue-500 duration-500'>
              <Link to="/appointments" className='link'>Appointments</Link>
            </a>
            {name ? (
              <button
                className="bg-blue-500 text-white font-[Poppins] duration-500 p-1 sm:px-4 py-0 text-xs sm:text-lg sm:py-1 mx-3 sm:mx-4 hover:bg-blue-600 rounded "
                onClick={() => {
                  localStorage.removeItem('user')
                  navigate('/signin')
                }}
              >
                Sign Out
              </button>
            ) : (
              <button className="bg-blue-400 text-white font-[Poppins] duration-500 p-1 sm:px-4 py-0 text-xs sm:text-lg sm:py-1 mx-3 sm:mx-4 hover:bg-blue-500 rounded ">
                <Link to="/Signin" className='link'>Sign In</Link>
              </button>
            )}


          </div>
        </div>
      </nav>
    </div>
  )
}

export default UserNavbar;
