import React from "react";
import Image from "next/image";
import Link from "next/link";
import Noavatar from "../../../../../public/noavatar.png";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { PiGameControllerFill } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Games",
        path: "/dashboard/games",
        icon: <PiGameControllerFill />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "List Game", path: "/dashboard/listgame", icon: <MdWork /> },
      {
        title: "Download",
        path: "/dashboard/download",
        icon: <FaCartArrowDown />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      { title: "Logout", path: "/dashboard/logout", icon: <MdLogout /> },
      {
        title: "HelpCenter",
        path: "/dashboard/helpcenter",
        icon: <MdHelpCenter />,
      },
      { title: "Team", path: "/dashboard/team", icon: <MdPeople /> },
    ],
  },
];

const SideBar = () => {
  return (
    <nav className="text-white    max-h-screen sticky top-[0px]">
      <div className="flex items-center gap-[25px] mb-[20px]">
        <Image
          className="rounded-full object-cover w-[50px] h-[50px]"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="User Avatar"
          width={50} // Specify the width
          height={50} // Specify the height
        />

        <div className="flex flex-col">
          <span className="font-bold">Kuri kie</span>
          <span className="text-sm text-gray-400">Administrator</span>
        </div>
      </div>

      <ul>
        {menuItems.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <ul className="space-y-2">
              {category.list.map((item) => (
                <li
                  key={item.path}
                  className="flex items-center space-x-3 py-2 mt-4 cursor-pointer hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Link
                    href={item.path}
                    className="flex items-center space-x-3"
                  >
                    <div className="text-xl">{item.icon}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;