import React from "react";
import Image from "next/image";

const ListgamePage = () => {
  const Listitems = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX9J4dwXZvsy0ngYUY8wbzlB9RNINsJTarA&s",
      title: "The Final",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX9J4dwXZvsy0ngYUY8wbzlB9RNINsJTarA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRz2yAVOD6KF62zYMrxBIsbJpvepQPhpj8A&sail Game",
      title: "Valorant",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
    {
      image:
        "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Vanilla_Media-Block-Image_PC-Bundle-Keyart_800x450.jpg",
      title: "Mincraft",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
  ];
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Game Products</h2>
      {Listitems.map((item, index) => (
        <div key={index} className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX9J4dwXZvsy0ngYUY8wbzlB9RNINsJTarA&s"
              alt="Game Title 1"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500">{item.time}</span>
                <span className="text-indigo-600">{item.downlaod}</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <span className="text-yellow-500">{item.emoji1}</span>
                  <span className="text-blue-600">{item.emoji2}</span>
                </div>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                  Detail Game
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;{/* Load More Button */}
      <div className="text-center mt-8">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ListgamePage;
