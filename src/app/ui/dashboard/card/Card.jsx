"use client"; // Ensure this file is treated as a Client Component

import React from "react";
import { MdScreenSearchDesktop } from "react-icons/md";
import Tableuser from "../tableuser/TableUser";
import { BsThreeDots } from "react-icons/bs";
import { FcSurvey, FcPaid, FcKindle } from "react-icons/fc";
import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";

// Reusable StatCard Component
const StatCard = ({ icon: Icon, title, stat, description, bgColor }) => {
  return (
    <div
      className={`${bgColor} p-6 rounded-xl shadow-2xl text-black flex flex-col justify-between`}
    >
      {/* Time release */}
      <div className="flex my-3">
        <Icon className="mr-2 text-xl" />
        <h1 className="text-sm font-semibold">{title}</h1>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-xl font-bold">{stat}</h1>
        <div className="text-md">{description}</div>
      </div>
    </div>
  );
};

// Define valueFormatter inside the Client Component
const valueFormatter = (value) => (value == null ? "NaN" : value.toString());

const Card = () => {
  return (
    <div className="space-y-4">
      {/* Upper Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Ensuring the cards are appropriately sized and spaced */}
        <div className="flex flex-col items-stretch">
          <StatCard
            icon={FcSurvey}
            title="Total Enroll"
            stat="10,093"
            description={<Gauge width={50} height={50} value={85} />}
            bgColor="white"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <StatCard
            icon={FcKindle}
            title="Total Login"
            stat="8,543"
            description={<Gauge width={50} height={50} value={85} />}
            bgColor="white"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <StatCard
            icon={FcPaid}
            title="Total Download"
            stat="12,304"
            description={<Gauge width={50} height={50} value={85} />}
            bgColor="white"
          />
        </div>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <div className="p-4 rounded-lg h-[390px]">
          <Tableuser /> {/* Insert the Tableuser component here */}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg h-[390px]">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                valueFormatter, // Now you can safely pass the function
              },
              {
                data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
              },
              {
                data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                valueFormatter, // Again, passing the client-side function
              },
            ]}
            height={200}
            margin={{ top: 10, bottom: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
