import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Header({balance}) {

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo / App Name */}
        <h1 className="text-xl md:text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">
          Expense Tracker
        </h1>

        {/* Right Side */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Total Balance (hide on small screens) */}
          <div className="hidden sm:block text-white text-sm md:text-lg font-semibold hover:text-gray-200 transition-colors duration-300">
            Balance: ${balance}
          </div>

          {/* Profile Icon */}
          <FaUserCircle className="text-white text-2xl md:text-3xl cursor-pointer hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </header>
  );
}

export default Header;
