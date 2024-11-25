import React, { useState } from "react";
import logo from "../assets/lambang_ITS.png";
import placeholder from "../assets/placeholder.png";

const MainMenu = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const handleContactClick = () => {
    setShowContactPopup(true);
  };

  const handleClosePopup = () => {
    setShowContactPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
      {/* Header Section */}
      {/* <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to the Task Management & QR Code Generator</h1>
          <p className="text-lg mt-2">Your one-stop solution for managing tasks, schedules, and generating QR codes for quick access.</p>
        </div>
      </header> */}

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 px-8">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-35 h-20 mb-4" />

          {/* Hero Section */}
          <h1 className="text-5xl font-extrabold text-blue-900 leading-snug">
            Simplify Your Workflow
          </h1>
          <p className="text-lg text-gray-700">
            Manage your daily tasks, academic schedules, and share links effortlessly with our easy-to-use web application.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://forms.gle/zAKr3rVV5XB66DfJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Feedback
            </a>
            <button
              onClick={handleContactClick}
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={placeholder}
            alt="Placeholder"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Contact Us Popup */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Contact Us</h3>
            <div className="text-gray-700 text-sm space-y-3">
              <p>
                <span className="font-bold">Muhammad Faiz Hidayah,</span> email: faizftcollege@gmail.com
              </p>
              <p>
                <span className="font-bold">Jason Maxmilan Adrianputra,</span> email: jasonmaxmilanadrian@gmail.com
              </p>
            </div>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="container mx-auto py-12 px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-8">FAQ</h2>
        <p className="text-gray-600 mb-12">Here are some of the most frequently asked questions.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">What is the purpose of this project?</h3>
            <p className="text-gray-700 text-sm">
              This project aims to help users manage tasks, input backlogs, schedule daily activities, and create QR codes for link-shortening.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">How do I create a schedule?</h3>
            <p className="text-gray-700 text-sm">
              You can navigate to the Scheduler page and use the provided tools to input and manage your daily or weekly schedule.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Can I track my academic assignments?</h3>
            <p className="text-gray-700 text-sm">
              Yes, the application allows you to add and manage academic tasks and assignments efficiently.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">What is the QR code feature used for?</h3>
            <p className="text-gray-700 text-sm">
              The QR code feature helps in link-shortening and sharing URLs in a simple, scannable format.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Is this application suitable for academic purposes?</h3>
            <p className="text-gray-700 text-sm">
              Absolutely! It is designed to assist users in managing their academic schedules and tasks effectively.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Can I generate QR codes for external links?</h3>
            <p className="text-gray-700 text-sm">
              Yes, you can generate QR codes for any URL, making it easy to share links with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
