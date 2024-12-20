"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const PLACEHOLDER_IMAGE = "https://www.mmobomb.com/assets/default-game-image.jpg";

const GameStorePage = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch games from the API
  const fetchGames = async () => {
    try {
      const response = await fetch("/api/games");
      if (!response.ok) throw new Error("Failed to fetch games");
      const data = await response.json();
      setGames(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-4">{error}</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Game Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id || game._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Thumbnail */}
            <Image
              src={game.thumbnail || PLACEHOLDER_IMAGE}
              alt={game.title}
              width={1000}
              height={1000}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-4">
              <h2 className="text-lg font-bold">{game.title}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">{game.short_description}</p>
              <div className="text-sm text-gray-500">
                <p>Genre: {game.genre}</p>
                <p>Platform: {game.platform}</p>
              </div>
              <a
                href={game.game_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Explore More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStorePage;
