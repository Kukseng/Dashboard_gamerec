import React from "react";
import Sidebar from "../xcomponent/dashboard/SideBar/SideBar";
import Navbar from "../xcomponent/dashboard/NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex max-h-screen">
      {/* Sidebar  */}
      <div className="flex-none  bg-bluep-200   w-[150px] md:w-[200px] lg:w-[250px] rounded-md h-screen">
        <div className="p-10 ">
          <Sidebar />
        </div>
      </div>

      {/* Content  */}
      <div className="flex-1 p-5 overflow-auto rounded-md">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
