import React from 'react';
import Sidebar from '../xcomponent/dashboard/sidebar/Sidebar';
import Navbar from '../xcomponent/dashboard/navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex max-h-screen">
      {/* Sidebar with responsive width */}
      <div className="flex-none bg-blueGray-800 p-5 w-[150px] md:w-[200px] lg:w-[250px] rounded-md">
        <Sidebar />
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
