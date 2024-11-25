import React from "react";
import { Link } from "react-router-dom";
import logo_black from "../assets/logo_white.png"; // Update the path as needed

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-700 p-4 shadow-lg">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src={logo_black}
            alt="Logo"
            className="h-9 w-9 mr-3" 
          />
          <span className="text-xl font-semibold text-white tracking-wide">
            StudentAssistant
          </span>
        </Link>
      </div>

      {/* Middle Section: Links */}
      <div className="hidden md:flex space-x-8">
        <Link
          to="/scheduler"
          className="text-white font-medium hover:text-blue-300 transition duration-200"
        >
          Scheduler
        </Link>
        <Link
          to="/todo"
          className="text-white font-medium hover:text-blue-300 transition duration-200"
        >
          Task Manager
        </Link>
        <Link
          to="/notepad"
          className="text-white font-medium hover:text-blue-300 transition duration-200"
        >
          Notepad
        </Link>
        <Link
          to="/feature4"
          className="text-white font-medium hover:text-blue-300 transition duration-200"
        >
          QR Code Generator
        </Link>
      </div>

      {/* Right Section: Main Menu Button */}
      <div>
        <Link
          to="/"
          className="bg-white text-blue-700 font-medium px-5 py-2 rounded-md shadow hover:bg-blue-100 transition duration-200"
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
