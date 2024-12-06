"use client";

import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { BiSolidMessageDetail, BiMessageDetail } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";

const NavBar = () => {
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Notifications State
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false); // State to track dropdown visibility

  // Messages State
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false); // State to track dropdown visibility

  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Dark Mode Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Search Handler
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  // Notifications Handler
  const toggleNotifications = () => {
    setHasUnreadNotifications(false);
    setNotifications([
      { id: 1, text: "New game update available" },
      { id: 2, text: "Friend request from Player123" },
    ]);
    setIsNotificationsOpen(!isNotificationsOpen); // Toggle notification dropdown
  };

  // Messages Handler
  const toggleMessages = () => {
    setHasUnreadMessages(false);
    setMessages([
      { id: 1, sender: "Player456", text: "Want to play together?" },
      { id: 2, sender: "Player789", text: "GG on last match!" },
    ]);
    setIsMessagesOpen(!isMessagesOpen); // Toggle messages dropdown
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-2xl mb-2 transition-colors duration-300">
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-center">
          <h1 className="text-xl font-semibold dark:text-white">SABAY</h1>
          <p className="text-sm dark:text-gray-300">Game</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="text-gray-600 dark:text-white dark:bg-gray-700 p-2 pl-10 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
              aria-label="Search"
            />
            <TfiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 dark:text-gray-300" />
          </div>
          <div className="flex space-x-4 relative">
            <div className="relative">
              {hasUnreadNotifications ? (
                <IoMdNotifications
                  onClick={toggleNotifications}
                  className="text-xl cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
                  aria-label="Notifications"
                />
              ) : (
                <IoMdNotificationsOutline
                  onClick={toggleNotifications}
                  className="text-xl cursor-pointer hover:text-blue-500 transition-colors dark:text-white dark:hover:text-blue-400"
                  aria-label="Notifications"
                />
              )}
              {hasUnreadNotifications && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {notifications.length}
                </span>
              )}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border rounded-md shadow-lg p-2">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="text-sm text-gray-800 dark:text-gray-300"
                    >
                      {notification.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              {hasUnreadMessages ? (
                <BiSolidMessageDetail
                  onClick={toggleMessages}
                  className="text-xl cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
                  aria-label="Messages"
                />
              ) : (
                <BiMessageDetail
                  onClick={toggleMessages}
                  className="text-xl cursor-pointer hover:text-blue-500 transition-colors dark:text-white dark:hover:text-blue-400"
                  aria-label="Messages"
                />
              )}
              {hasUnreadMessages && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {messages.length}
                </span>
              )}
              {isMessagesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border rounded-md shadow-lg p-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="text-sm text-gray-800 dark:text-gray-300"
                    >
                      <strong>{message.sender}:</strong> {message.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {isDarkMode ? (
              <MdLightMode
                onClick={() => setIsDarkMode(false)}
                className="text-xl cursor-pointer hover:text-blue-500 transition-colors text-yellow-500"
                aria-label="Switch to Light Mode"
              />
            ) : (
              <MdDarkMode
                onClick={() => setIsDarkMode(true)}
                className="text-xl cursor-pointer hover:text-blue-500 transition-colors dark:text-white"
                aria-label="Switch to Dark Mode"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
