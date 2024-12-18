"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Filter, Star, Play } from "lucide-react";
import { MdStar } from "react-icons/md";

const PLACEHOLDER_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const GameStorePage = () => {
  // State for games, loading, and error
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ratingRange, setRatingRange] = useState([0, 5]);

  // Fetch games from API
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

  // Fetch games on component mount
  useEffect(() => {
    fetchGames();
  }, []);

  // Derived categories from games
  const categories = [...new Set(games.map((game) => game.category))];

  // Filtered games logic
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || game.category === selectedCategory;
    const matchesRating =
      game.rating >= ratingRange[0] && game.rating <= ratingRange[1];

    return matchesSearch && matchesCategory && matchesRating;
  });

  // Loading and error states
  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading games...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Game Store</h1>
          <p className="text-gray-600">
            Discover and download your next favorite game
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Search Input */}
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 border rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-3 border rounded-md"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Rating Range Filter */}
            <div className="flex items-center space-x-2">
              <span>
                <MdStar />
              </span>
              <input
                type="range"
                min="0"
                max="5"
                step={0.1}
                value={ratingRange[1]}
                onChange={(e) => setRatingRange([0, Number(e.target.value)])}
                className="w-32"
              />
              <span className="flex items-center">
                <MdStar className="mr-1" />
                {ratingRange[1].toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game._id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
              >
                {/* Game Image */}
                <Image
                  src={game.image || PLACEHOLDER_IMAGE}
                  alt={game.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />

                {/* Game Details */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold">{game.name}</h2>
                    <div className="flex items-center text-yellow-500">
                      <Star className="mr-1" size={20} />
                      {game.rating || 'N/A'}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 h-16 overflow-hidden">
                    {game.description || 'No description available'}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-green-600 font-bold">
                      {game.price !== undefined 
                        ? (game.price === 0 ? "Free" : `$${game.price.toFixed(2)}`) 
                        : 'Price not set'}
                    </div>
                  </div>

                  {/* Platforms and Action Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {game.platform ? (
                        game.platform.map((platform) => (
                          <span
                            key={platform}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {platform}
                          </span>
                        ))
                      ) : (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          Platforms N/A
                        </span>
                      )}
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
                      <Play className="mr-2" size={16} /> Play
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            No games found. Try adjusting your search or filters.
          </div>
        )}

        {/* Load More Button */}
        {filteredGames.length > 0 && (
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
              Load More Games
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameStorePage;