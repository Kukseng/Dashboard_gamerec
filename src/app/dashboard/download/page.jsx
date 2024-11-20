// Add this directive at the top of the file
"use client";

import React, { useState } from "react";

const DownloadPage = () => {
  const [downloadCount, setDownloadCount] = useState(0);

  const popularGames = [
    { name: "FIFA 23", downloads: 1500 },
    { name: "League of Legends", downloads: 1200 },
    { name: "Valorant", downloads: 2000 },
    { name: "Minecraft", downloads: 2500 },
  ];

 

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Game Download Dashboard
        </h1>
        <p className="text-xl text-gray-500 mt-2">
          Keep track of your game downloads!
        </p>
      </div>

    

      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Popular Downloads
        </h2>
        <ul className="mt-4 space-y-4">
          {popularGames.map((game, index) => (
            <li
              key={index}
              className="p-4 bg-white shadow-lg rounded-lg flex justify-between items-center"
            >
              <span className="text-lg font-medium">{game.name}</span>
              <span className="text-lg text-gray-700">
                Downloads: {game.downloads}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownloadPage;
