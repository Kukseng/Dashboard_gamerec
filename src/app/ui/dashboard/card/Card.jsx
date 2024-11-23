import React from "react";
import { MdScreenSearchDesktop } from "react-icons/md";
import Tableuser from "../tableuser/TableUser";
import { BsThreeDots } from "react-icons/bs";
// Reusable StatCard Component
const StatCard = ({ icon: Icon, title, stat, description, bgColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-xl shadow-2xl text-black`}>
      {/*time relese  */}
      <div className="flex justify-between ">
        <p className="text-sm">12:30 - 23/11</p>
        {/* Icon */}
        <BsThreeDots />
      </div>
      <div className="flex  my-5 ">
        <Icon className="mr-2  text-xl" />
        <h1 className=" text-sm font-semibold text-center">{title}</h1>
      </div>
      <div className="flex justify-between items-center">
        <h1 className=" text-xl font-bold  ">{stat}</h1>
        <p className=" text-md">{description}</p>
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
          bgHover=""
          bgColor="bg-cyan-200"
        />
        <StatCard
          icon={MdScreenSearchDesktop}
          title="Total Login"
          stat="8,543"
          description="Active Logins"
          bgHover=""
          bgColor="bg-Tuscany"
        />
        <StatCard
          icon={MdScreenSearchDesktop}
          title="Total Download"
          stat="12,304"
          description="Game Downloads"
          bgHover=""
          bgColor="bg-Sage"
        />
      </div>

      {/* Lower Section (2 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <div className="p-4 rounded-lg h-[390px]">
          <Tableuser /> {/* Insert the Tableuser component here */}
        </div>
        <div className=" bg-gray-100 p-4 rounded-lg h-[390px]">
          <h1 className="text-white text-xl font-semibold">Color 5</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
