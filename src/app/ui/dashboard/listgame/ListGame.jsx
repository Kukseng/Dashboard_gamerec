import React from "react";
import Image from "next/image";
import { describe } from "node:test";

const ListgamePage = () => {
  const Listitems = [
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/653d1491d815981e910e08d8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: "The Final",
      describe:
        " In The Finals, teams of players must compete against each other as they participate in a fictional VR combat game show. The Finals revolves around players competing in the titular fictional VR combat game show.",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
    {
      image:
        "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/03/Valorant.png?fit=1200%2C675&ssl=1",
      title: "Valorant",
      describe:
        "Valorant is an online multiplayer computer game, produced by Riot Games. It is a first-person shooter game, consisting of two teams of five, where one team attacks and the other defends.",
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
      describe:
        "Minecraft is a game where players place blocks and go on adventures. This includes anything from crafting simple items like containers or weapons, to building structures like houses, castles, and cities, or even making complex mechanical devices, all within the game's world.",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/653d1491d815981e910e08d8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: "The Final",
      describe:
        " In The Finals, teams of players must compete against each other as they participate in a fictional VR combat game show. The Finals revolves around players competing in the titular fictional VR combat game show.",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/653d1491d815981e910e08d8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: "The Final",
      describe:
        " In The Finals, teams of players must compete against each other as they participate in a fictional VR combat game show. The Finals revolves around players competing in the titular fictional VR combat game show.",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/653d1491d815981e910e08d8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: "The Final",
      describe:
        " In The Finals, teams of players must compete against each other as they participate in a fictional VR combat game show. The Finals revolves around players competing in the titular fictional VR combat game show.",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/653d1491d815981e910e08d8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: "The Final",
      describe:
        " In The Finals, teams of players must compete against each other as they participate in a fictional VR combat game show. The Finals revolves around players competing in the titular fictional VR combat game show.",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/653d1491d815981e910e08d8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: "The Final",
      describe:
        " In The Finals, teams of players must compete against each other as they participate in a fictional VR combat game show. The Finals revolves around players competing in the titular fictional VR combat game show.",
      time: "3h 1m 50s",
      downlaod: 1000,
      button: "Detail Game",
      emoji1: "⭐",
      emoji2: "🎮",
    },
  ];
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Game Publish</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Listitems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col h-full"
          >
            {/* Card Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm font-thin flex-1">{item.describe}</p>

              {/* Time and Download */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500">{item.time}</span>
                <span className="text-indigo-600">{item.download}</span>
              </div>

              {/* Emoji and Button */}
              <div className="flex justify-between items-center mt-auto">
                <div className="flex space-x-2">
                  <span className="text-yellow-500">{item.emoji1}</span>
                  <span className="text-blue-600">{item.emoji2}</span>
                </div>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                  {item.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
