import React from "react";
import Sidebar from "../xcomponent/dashboard/sidebar/SideBar";
import Navbar from "../xcomponent/dashboard/navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex max-h-screen">
      {/* Sidebar with responsive width */}
      <div className="flex-none  bg-bluep-200   w-[150px] md:w-[200px] lg:w-[250px] rounded-md h-screen">
        <div className="p-10 ">
          <Sidebar />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5 overflow-auto rounded-md">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
