import React from 'react';
import { MdScreenSearchDesktop } from "react-icons/md";
import Tableuser from '../tableuser/TableUser';

// Reusable StatCard Component
const StatCard = ({ icon: Icon, title, stat, description, bgColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg`}>
      <div className="flex items-center justify-center mx-5">
        <Icon className="mr-2 text-white text-lg" />
        <h1 className="text-white text-sm font-semibold text-center">{title}</h1>
      </div>
      <div className='text-center'>
        <h1 className="text-white text-2xl font-bold mt-2">{stat}</h1>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="space-y-4">
      {/* Upper Section (Grid of 3 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          icon={MdScreenSearchDesktop}
          title="Total Enroll"
          stat="10,093"
          description="User Enroll"
          bgColor="bg-Bittersweet-50"  
        />
        <StatCard
          icon={MdScreenSearchDesktop}
          title="Total Login"
          stat="8,543"
          description="Active Logins"
          bgColor="bg-Bittersweet-100"
        />
        <StatCard
          icon={MdScreenSearchDesktop}
          title="Total Download"
          stat="12,304"
          description="Game Downloads"
          bgColor="bg-pink-700"
        />
      </div>


      {/* Lower Section (2 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
  <div className="p-4 rounded-lg h-[390px]">
    <Tableuser /> {/* Insert the Tableuser component here */}
  </div>
  <div className="bg-yellow-700 p-4 rounded-lg h-[390px]">
    <h1 className="text-white text-xl font-semibold">Color 5</h1>
  </div>
</div>
    </div>
  );
};

export default Card;
