import { useState } from 'react'
import logo from '../assets/logoITS.png'
import placeholder from '../assets/placeholder.png'

const MainMenu = () => {
  const [showContactPopup, setShowContactPopup] = useState(false)

  const handleContactClick = () => {
    setShowContactPopup(true)
  }

  const handleClosePopup = () => {
    setShowContactPopup(false)
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50'>
      <div className='container flex flex-col items-center justify-between px-8 py-12 mx-auto lg:flex-row'>
        {/* Left Section */}
        <div className='space-y-6 lg:w-1/2'>
          {/* Logo */}
          <img
            src={logo}
            alt='Logo'
            className='h-20 mb-4 w-35'
          />

          {/* Hero Section */}
          <h1 className='text-5xl font-extrabold leading-snug text-blue-900'>
            Simplify Your Workflow
          </h1>
          <p className='text-lg text-gray-700'>
            Manage your daily tasks, academic schedules, and share links
            effortlessly with our easy-to-use web application.
          </p>
          <div className='flex gap-4 mt-6'>
            <a
              href='https://forms.gle/zAKr3rVV5XB66DfJ7'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-3 text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700'
            >
              Feedback
            </a>
            <button
              onClick={handleContactClick}
              className='px-8 py-3 text-blue-600 transition border border-blue-600 rounded-lg shadow-md hover:bg-blue-50'
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex justify-center mt-10 lg:w-1/2 lg:mt-0'>
          <img
            src={placeholder}
            alt='Placeholder'
            className='w-full max-w-md rounded-lg shadow-lg'
          />
        </div>
      </div>

      {/* Contact Us Popup */}
      {showContactPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='p-6 bg-white rounded-lg shadow-lg w-80'>
            <h3 className='mb-4 text-xl font-semibold text-blue-800'>
              Contact Us
            </h3>
            <div className='space-y-3 text-sm text-gray-700'>
              <p>
                <span className='font-bold'>Muhammad Faiz Hidayah,</span> email:
                faizftcollege@gmail.com
              </p>
              <p>
                <span className='font-bold'>Jason Maxmilan Adrianputra,</span>{' '}
                email: jasonmaxmilanadrian@gmail.com
              </p>
            </div>
            <button
              onClick={handleClosePopup}
              className='px-4 py-2 mt-4 text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700'
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className='container px-8 py-12 mx-auto'>
        <h2 className='mb-8 text-3xl font-extrabold text-blue-900'>FAQ</h2>
        <p className='mb-12 text-gray-600'>
          Here are some of the most frequently asked questions.
        </p>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='p-6 transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold text-blue-800'>
              What is the purpose of this project?
            </h3>
            <p className='text-sm text-gray-700'>
              This project aims to help users manage tasks, input backlogs,
              schedule daily activities, and create QR codes for
              link-shortening.
            </p>
          </div>
          <div className='p-6 transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold text-blue-800'>
              How do I create a schedule?
            </h3>
            <p className='text-sm text-gray-700'>
              You can navigate to the Scheduler page and use the provided tools
              to input and manage your daily or weekly schedule.
            </p>
          </div>
          <div className='p-6 transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold text-blue-800'>
              Can I track my academic assignments?
            </h3>
            <p className='text-sm text-gray-700'>
              Yes, the application allows you to add and manage academic tasks
              and assignments efficiently.
            </p>
          </div>
          <div className='p-6 transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold text-blue-800'>
              What is the QR code feature used for?
            </h3>
            <p className='text-sm text-gray-700'>
              The QR code feature helps in link-shortening and sharing URLs in a
              simple, scannable format.
            </p>
          </div>
          <div className='p-6 transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold text-blue-800'>
              Is this application suitable for academic purposes?
            </h3>
            <p className='text-sm text-gray-700'>
              Absolutely! It is designed to assist users in managing their
              academic schedules and tasks effectively.
            </p>
          </div>
          <div className='p-6 transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold text-blue-800'>
              Can I generate QR codes for external links?
            </h3>
            <p className='text-sm text-gray-700'>
              Yes, you can generate QR codes for any URL, making it easy to
              share links with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
