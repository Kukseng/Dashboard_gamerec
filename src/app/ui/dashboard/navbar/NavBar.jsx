"use client";

import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="p-4 bg-gray-100 text-black rounded-md shadow-2xl mb-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-center">
          <h1 className="text-xl font-semibold">SABAY</h1>
          <p className="text-sm">Game</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="text-gray-600 p-2 pl-10 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Search"
            />
            <TfiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
          </div>
          <div className="flex space-x-4 relative">
            <div className="relative">
              <IoMdNotificationsOutline
                className="text-xl cursor-pointer hover:text-blue-500 transition-colors"
                aria-label="Notifications"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <ul className="py-1 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      New comment on your post
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Someone liked your photo
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Update available for your game
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <BiSolidMessageDetail
              className="text-xl cursor-pointer hover:text-blue-500 transition-colors"
              aria-label="Messages"
              onClick={toggleDropdown}
            />
             {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <ul className="py-1 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      New comment on your post
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Someone liked your photo
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Update available for your game
                    </li>
                  </ul>
                </div>
              )}
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
