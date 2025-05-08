import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { expenseContext } from "../context/ExpenseContext";

function Header() {
  const { state } = useContext(expenseContext);
  const { totalBalance } = state;
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* <button
          className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button> */}

        {/* Right Side */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Total Balance (hide on small screens) */}
          <div className=" text-white text-sm md:text-lg font-semibold hover:text-gray-200 transition-colors duration-300">
            Balance: ${totalBalance}
          </div>

          {/* Profile Icon */}
          {/* <FaUserCircle className="text-white text-2xl md:text-3xl cursor-pointer hover:scale-110 transition-transform duration-300" /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
