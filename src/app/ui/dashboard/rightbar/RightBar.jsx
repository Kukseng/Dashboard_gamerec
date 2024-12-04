"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

// Corrected data to align with expected structure (if required)
export const desktopOS = [
  { label: "Windows", value: 60 },
  { label: "macOS", value: 25 },
  { label: "Linux", value: 10 },
  { label: "Other", value: 5 },
];

data: desktopOS.map(({ name, value }) => ({ label: name, value }));

const RightBar = () => {
  return (
    <div className="flex flex-col gap-5 sticky top-4 ml-2">
      {/* Right Block 1 */}
      <div className="w-[360px] h-[290px] text-white bg-blue-200 p-4 rounded-lg shadow-2xl relative">
        <div className="absolute inset-0 bg-blue-200 opacity-70 rounded-lg"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10">
          <PieChart
            series={[
              {
                data: desktopOS.map(({ label, value }) => ({ label, value })), // Use correct keys
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter: (value) => `${value}%`, // Format values as percentages
                labelPosition: "outside", // Show labels outside the chart
                labelFormatter: ({ label, value }) => `${label}: ${value}%`, // Combine label and value
              },
            ]}
            height={200}
          />

          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => console.log("Watch button clicked")}
          >
            Watch Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
