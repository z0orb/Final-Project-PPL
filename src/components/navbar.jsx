import { Link } from 'react-router-dom'
import logo_black from '../assets/logo_white.png' // Update the path as needed
import { useState } from 'react'

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false)

  return (
    <nav className='flex items-center justify-between p-4 bg-blue-700 shadow-lg'>
      {/* Left Section: Logo */}
      <div className='flex items-center'>
        <Link
          to='/'
          className='flex items-center'
        >
          <img
            src={logo_black}
            alt='Logo'
            className='mr-3 h-9 w-9'
          />
          <span className='text-xl font-semibold tracking-wide text-white'>
            StudentAssistant
          </span>
        </Link>
      </div>

      {/* Sidebar Toggle Button */}
      <div
        className='absolute right-0 z-50 flex flex-col items-center justify-center w-10 h-10 gap-2 mx-10 transition-all duration-500 ease-in-out cursor-pointer aspect-square md:hidden'
        onClick={() => setIsSidebar(!isSidebar)}
      >
        <div
          className={`w-full h-1 bg-white rounded transition-transform ${
            isSidebar ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-full h-1 bg-white rounded transition-transform ${
            isSidebar ? '-rotate-45 -translate-y-1' : ''
          }`}
        ></div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-blue-800 bg-opacity-95 transform ${
          isSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className='flex flex-col items-center justify-center min-h-screen gap-4 text-center'>
          <Link
            to='/scheduler'
            className='text-lg font-medium text-white transition duration-200 hover:text-blue-300'
            onClick={() => setIsSidebar(false)}
          >
            Scheduler
          </Link>
          <Link
            to='/todo'
            className='text-lg font-medium text-white transition duration-200 hover:text-blue-300'
            onClick={() => setIsSidebar(false)}
          >
            Task Manager
          </Link>
          <Link
            to='/notepad'
            className='text-lg font-medium text-white transition duration-200 hover:text-blue-300'
            onClick={() => setIsSidebar(false)}
          >
            Notepad
          </Link>
          <Link
            to='/feature4'
            className='text-lg font-medium text-white transition duration-200 hover:text-blue-300'
            onClick={() => setIsSidebar(false)}
          >
            QR Code Generator
          </Link>
          <Link
            to='/'
            className='px-5 py-2 mt-4 font-medium text-blue-700 transition duration-200 bg-white rounded-md shadow hover:bg-blue-100'
            onClick={() => setIsSidebar(false)}
          >
            Home
          </Link>
        </div>
      </div>

      {/* Middle Section: Links (Visible on larger screens) */}
      <div className='hidden space-x-8 md:flex'>
        <Link
          to='/scheduler'
          className='font-medium text-white transition duration-200 hover:text-blue-300'
        >
          Scheduler
        </Link>
        <Link
          to='/todo'
          className='font-medium text-white transition duration-200 hover:text-blue-300'
        >
          Task Manager
        </Link>
        <Link
          to='/notepad'
          className='font-medium text-white transition duration-200 hover:text-blue-300'
        >
          Notepad
        </Link>
        <Link
          to='/feature4'
          className='font-medium text-white transition duration-200 hover:text-blue-300'
        >
          QR Code Generator
        </Link>
      </div>

      {/* Right Section: Main Menu Button */}
      <div>
        <Link
          to='/'
          className='hidden px-5 py-2 font-medium text-blue-700 transition duration-200 bg-white rounded-md shadow hover:bg-blue-100 md:flex'
        >
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
