"use client";

import React, { useState, useEffect } from "react";
import { Trash2, Edit, PlusCircle } from "lucide-react";
import Image from "next/image";

const PLACEHOLDER_IMAGE =
  "https://www.mmobomb.com/assets/default-game-image.jpg";

const GameCRUDDashboard = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [operationStatus, setOperationStatus] = useState({
    type: "",
    message: "",
  });

  const fetchGames = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/games");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Data is not in expected format");
      }

      setGames(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching games:", err);
      setError(`Failed to fetch games: ${err.message}`);
      setGames([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleDelete = async (gameId) => {
    try {
      if (!gameId) {
        throw new Error("Game ID is required");
      }

      const response = await fetch(`/api/games/${gameId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `Failed to delete game. Status: ${response.status}`
        );
      }

      setOperationStatus({
        type: "success",
        message: data.message || "Game deleted successfully",
      });

      await fetchGames();
    } catch (err) {
      console.error("Delete error:", err);
      setOperationStatus({
        type: "error",
        message: err.message,
      });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      setError(null);

      if (
        !selectedGame.title ||
        !selectedGame.genre ||
        !selectedGame.platform
      ) {
        throw new Error("Please fill in all required fields");
      }

      const response = await fetch("/api/games", {
        method: selectedGame._id ? "POST" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedGame),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Failed to save game. Status: ${response.status}`
        );
      }

      setOperationStatus({
        type: "success",
        message: `Game ${
          selectedGame._id ? "updated" : "created"
        } successfully`,
      });

      await fetchGames();
      setIsModalOpen(false);
      setSelectedGame(null);
    } catch (err) {
      console.error("Save error:", err);
      setError(err.message);
      setOperationStatus({
        type: "error",
        message: `Failed to save: ${err.message}`,
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p>Loading games...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Games Management</h1>
          <button
            onClick={() => {
              setSelectedGame({
                title: "",
                genre: "",
                platform: "",
                developer: "",
                release_date: "",
                thumbnail: PLACEHOLDER_IMAGE,
              });
              setIsModalOpen(true);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
          >
            <PlusCircle className="mr-2" size={20} />
            Add New Game
          </button>
        </div>

        {operationStatus.message && (
          <div
            className={`mb-4 p-4 rounded ${
              operationStatus.type === "error"
                ? "bg-red-100 border border-red-400 text-red-700"
                : "bg-green-100 border border-green-400 text-green-700"
            }`}
          >
            {operationStatus.message}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Game
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Genre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Developer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Release Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {games.map((game) => (
                <tr key={game._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 relative mr-4">
                        <Image
                          src={game.thumbnail || PLACEHOLDER_IMAGE}
                          alt={game.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {game.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {game.short_description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {game.genre}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {game.platform}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {game.developer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {game.release_date}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium space-x-3">
                    <button
                      onClick={() => {
                        setSelectedGame(game);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(game._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {games.length === 0 && !isLoading && (
            <div className="text-center py-8 text-gray-500">
              No games found. Add a new game to get started.
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleSave}
            className="bg-white p-6 rounded-lg w-[600px] max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-xl font-bold mb-4">
              {selectedGame.id ? "Edit Game" : "Add New Game"}
            </h2>

            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="space-y-4">
              {[
                { key: "title", label: "Title", required: true },
                { key: "thumbnail", label: "Thumbnail URL" },
                {
                  key: "short_description",
                  label: "Description",
                  multiline: true,
                },
                { key: "game_url", label: "Game URL" },
                { key: "genre", label: "Genre", required: true },
                { key: "platform", label: "Platform", required: true },
                { key: "publisher", label: "Publisher" },
                { key: "developer", label: "Developer" },
                { key: "release_date", label: "Release Date", type: "date" },
              ].map(({ key, label, multiline, type, required }) => (
                <div key={key}>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                  </label>
                  {multiline ? (
                    <textarea
                      value={selectedGame[key] || ""}
                      onChange={(e) =>
                        setSelectedGame((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }))
                      }
                      className="w-full p-2 border rounded h-24"
                      required={required}
                    />
                  ) : (
                    <input
                      type={type || "text"}
                      value={selectedGame[key] || ""}
                      onChange={(e) =>
                        setSelectedGame((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }))
                      }
                      className="w-full p-2 border rounded"
                      required={required}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                type="submit"
                disabled={isSaving}
                className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
              >
                {isSaving ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={isSaving}
                className="flex-1 bg-gray-200 text-black p-2 rounded hover:bg-gray-300 disabled:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default GameCRUDDashboard;
