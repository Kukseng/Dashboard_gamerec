import React from "react";
import { MdDashboard, MdAccountCircle, MdDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";

const NavBar = () => {
  return (
    <div className="p-4 bg-gray-100 text-black rounded-md shadow-2xl mb-2 ">
      <div className="flex justify-between items-center ">
        {/* Brand Name */}
        <div className="flex flex-col text-center">
          <h1 className="text-xl font-semibold">SABAY</h1>
          <p className="text-sm ">Game</p>
        </div>

        {/* Right section with input and icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="text-gray-600 p-2 pl-10 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Search"
            />
            <TfiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
          </div>

          {/* Icons with hover effects */}
          <div className="flex space-x-4">
            <IoMdNotificationsOutline
              className="text-xl cursor-pointer hover:text-blue-500 transition-colors"
              aria-label="Notifications"
            />
            <BiSolidMessageDetail
              className="text-xl cursor-pointer hover:text-blue-500 transition-colors"
              aria-label="Messages"
            />
            <MdDarkMode
              className="text-xl cursor-pointer hover:text-blue-500 transition-colors"
              aria-label="Toggle Dark Mode"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
