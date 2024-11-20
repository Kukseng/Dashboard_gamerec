import React from "react";
import Image from "next/image";

const ListgamePage = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Game Products</h2>
      <div className="grid grid-cols-4 gap-6">
        {/* Game 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX9J4dwXZvsy0ngYUY8wbzlB9RNINsJTarA&s"
            alt="Game Title 1"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Game Title 1</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">Time Release: 3h 1m 50s</span>
              <span className="text-indigo-600">Download: 1000</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="text-yellow-500">⭐</span>
                <span className="text-blue-600">🎮</span>
              </div>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                Detail Game
              </button>
            </div>
          </div>
        </div>

        {/* Game 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX9J4dwXZvsy0ngYUY8wbzlB9RNINsJTarA&s"
            alt="The Final"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">The Final</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">Time Release: 0h 15m 10s</span>
              <span className="text-indigo-600">Download: 1000</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="text-yellow-500">⭐</span>
                <span className="text-blue-600">🎮</span>
              </div>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                Detail Game
              </button>
            </div>
          </div>
        </div>

        {/* Game 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX9J4dwXZvsy0ngYUY8wbzlB9RNINsJTarA&s"
            alt="Game Title 3"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Game Title 3</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">Time Release: 1h 20m 30s</span>
              <span className="text-indigo-600">Price: $25.00</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="text-yellow-500">⭐</span>
                <span className="text-blue-600">🎮</span>
              </div>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                Detail Game
              </button>
            </div>
          </div>
        </div>

        {/* Game 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX9J4dwXZvsy0ngYUY8wbzlB9RNINsJTarA&s"
            alt="Game Title 4"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Game Title 4</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">Time Release: 0h 45m 10s</span>
              <span className="text-indigo-600">Price: $39.99</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="text-yellow-500">⭐</span>
                <span className="text-blue-600">🎮</span>
              </div>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                Detail Game
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ListgamePage;
