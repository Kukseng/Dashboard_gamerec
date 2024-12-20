"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { BiSolidMessageDetail, BiMessageDetail } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const notificationsRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleNotifications = () => {
    setHasUnreadNotifications(false);
    setNotifications([
      { id: 1, text: "New game update available", time: "2m ago" },
      { id: 2, text: "Friend request from Player123", time: "5m ago" },
      { id: 3, text: "Achievement unlocked: Master Gamer", time: "15m ago" },
    ]);
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const toggleMessages = () => {
    setHasUnreadMessages(false);
    setMessages([
      {
        id: 1,
        sender: "Player456",
        text: "Want to play together?",
        time: "Just now",
      },
      { id: 2, sender: "Player789", text: "GG on last match!", time: "5m ago" },
      {
        id: 3,
        sender: "Player101",
        text: "Check out my new setup!",
        time: "1h ago",
      },
    ]);
    setIsMessagesOpen(!isMessagesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(e.target)
      ) {
        setIsNotificationsOpen(false);
      }
      if (messagesRef.current && !messagesRef.current.contains(e.target)) {
        setIsMessagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NotificationItem = ({ text, time }) => (
    <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200">
      <div className="text-sm text-gray-800 dark:text-gray-200">{text}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {time}
      </div>
    </div>
  );

  const MessageItem = ({ sender, text, time }) => (
    <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200">
      <div className="font-medium text-sm text-gray-800 dark:text-gray-200">
        {sender}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{text}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {time}
      </div>
    </div>
  );

  return (
    <div className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-black dark:text-white rounded-xl shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-center relative group">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            SABAY
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 tracking-wider">
            GAME
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-64 text-gray-800 dark:text-white dark:bg-gray-800 p-2 pl-10 rounded-lg bg-gray-50 focus:outline-none border-2 transition-all duration-300 ${
                isSearchFocused
                  ? "border-purple-500 shadow-md"
                  : "border-transparent"
              }`}
            />
            <TfiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>

          <div className="flex space-x-4">
            <div className="relative z-50" ref={notificationsRef}>
              <button
                onClick={toggleNotifications}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {hasUnreadNotifications ? (
                  <IoMdNotifications className="text-xl text-purple-500" />
                ) : (
                  <IoMdNotificationsOutline className="text-xl" />
                )}
              </button>
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                  <div className="p-3 bg-gray-50 dark:bg-gray-750 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="font-medium">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        {...notification}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative z-50" ref={messagesRef}>
              <button
                onClick={toggleMessages}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {hasUnreadMessages ? (
                  <BiSolidMessageDetail className="text-xl text-purple-500" />
                ) : (
                  <BiMessageDetail className="text-xl" />
                )}
              </button>
              {isMessagesOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                  <div className="p-3 bg-gray-50 dark:bg-gray-750 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="font-medium">Messages</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {messages.map((message) => (
                      <MessageItem key={message.id} {...message} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {isDarkMode ? (
                <MdLightMode className="text-xl text-yellow-400" />
              ) : (
                <MdDarkMode className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
