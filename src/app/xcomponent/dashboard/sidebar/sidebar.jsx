import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Noavatar from '../../../../../public/noavatar.png';
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter, MdLogout } from 'react-icons/md';
import { PiGameControllerFill } from 'react-icons/pi';

const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Users", path: "/dashboard/users", icon: <MdSupervisedUserCircle /> },
      { title: "Products", path: "/dashboard/products", icon: <PiGameControllerFill /> },
      
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/dashboard/revenue", icon: <MdWork /> },
      { title: "Report", path: "/dashboard/report", icon: <MdAnalytics /> },
      { title: "Team", path: "/dashboard/team", icon: <MdPeople /> },
    ]
  },
  {
    title: "User",
    list: [
      { title: "Settings", path: "/dashboard/settings", icon: <MdOutlineSettings /> },
      { title: "Logout", path: "/dashboard/logout", icon: <MdLogout /> },
      { title: "HelpCenter", path: "/dashboard/helpcenter", icon: <MdHelpCenter /> },
    ],
  },
];

const Sidebar = () => {
  return (
    <nav className="text-white  bg-blueGray-900 p-10 max-h-screen sticky top-[20px]">
      <div className="flex items-center gap-[25px] mb-[20px]">
        <Image
          className="rounded-full object-cover w-[50px] h-[50px]"
          src={Noavatar}
          alt="User Avatar"
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
                <li key={item.path} className="flex items-center space-x-3 py-2 mt-4 cursor-pointer hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Link href={item.path} className="flex items-center space-x-3">
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

export default Sidebar;
