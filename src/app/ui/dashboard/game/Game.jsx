"use client";

import React, { useState } from "react";
import { Trash2, Edit, PlusCircle } from "lucide-react";
import Image from "next/image";

// Base64 encoded 1x1 transparent PNG
const PLACEHOLDER_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const GameCRUDDashboard = () => {
  const [games, setGames] = useState([
    {
      id: 1,
      name: "FIFA 23",
      image:
        "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-mobile/season-5/global_assets/images/2023/03/fifa-mobile-grid-tile-season-5-16x9-1.jpg.adapt.crop191x100.1200w.jpg",
      category: "Sports",
      developer: "EA Sports",
      rating: 4.8,
      size: "50GB",
      releaseDate: "2023-09-30",
      lastUpdate: "2024-11-10",
    },
    {
      id: 2,
      name: "Minecraft",
      image:
        "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Vanilla_Media-Block-Image_PC-Bundle-Keyart_800x450.jpg",
      category: "Sandbox",
      developer: "Mojang",
      rating: 4.9,
      size: "1GB",
      releaseDate: "2011-11-18",
      lastUpdate: "2024-08-20",
    },
  ]);

  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleDelete = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const handleEdit = (game) => {
    setSelectedGame({ ...game });
    setIsAddMode(false);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setSelectedGame({
      name: "",
      category: "",
      developer: "",
      rating: "",
      size: "",
      releaseDate: "",
      lastUpdate: "",
      image: PLACEHOLDER_IMAGE,
    });
    setIsAddMode(true);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (isAddMode) {
      const newGame = {
        ...selectedGame,
        id: games.length + 1,
      };
      setGames([...games, newGame]);
    } else {
      setGames(
        games.map((game) => (game.id === selectedGame.id ? selectedGame : game))
      );
    }
    setIsModalOpen(false);
  };

  const renderGameModal = () => {
    if (!isModalOpen || !selectedGame) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-xl font-bold mb-4">
            {isAddMode ? "Add New Game" : "Edit Game"}
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Game Name"
              value={selectedGame.name}
              onChange={(e) =>
                setSelectedGame({ ...selectedGame, name: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={selectedGame.category}
              onChange={(e) =>
                setSelectedGame({ ...selectedGame, category: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="developer"
              value={selectedGame.developer}
              onChange={(e) =>
                setSelectedGame({ ...selectedGame, developer: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={selectedGame.image}
              onChange={(e) =>
                setSelectedGame({ ...selectedGame, image: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-4">
              <button
                onClick={handleSave}
                className="flex-1 bg-blue-500 text-white p-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-gray-200 text-black p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Game Management</h1>
        <button
          onClick={handleAddNew}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md"
        >
          <PlusCircle className="mr-2" size={20} /> Add Game
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">Game</th>
              <th className="p-3">Category</th>
              <th className="p-3">Developer</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center">
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={1000}
                    height={1000}
                    className="rounded-full object-cover w-[100px] h-[100px] mr-10"
                  />
                  {game.name}
                </td>
                <td className="p-3">{game.category}</td>
                <td className="p-3">{game.developer.toLocaleString()}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(game)}
                    className="text-blue-500 hover:bg-blue-100 p-2 rounded"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(game.id)}
                    className="text-red-500 hover:bg-red-100 p-2 rounded"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {renderGameModal()}
    </div>
  );
};

export default GameCRUDDashboard;
