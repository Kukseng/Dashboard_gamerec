"use client"; // Add this line to mark the component as a Client Component

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./webUsageStats";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-5 sticky top-4 ml-2">
      {/* Right Block 1 */}
      <div className="w-[360px] h-[290px] text-white  p-4 rounded-lg shadow-2xl relative">
        <div className="absolute inset-0 rounded-lg"></div> {/* Overlay */}
        <div className="relative z-10">
          <PieChart
            series={[
              {
                data: desktopOS,
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter, // This is now allowed in Client Components
              },
            ]}
            height={200}
          />
          <button className="mt-4 text-blue-500">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
