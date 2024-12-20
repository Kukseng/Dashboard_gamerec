"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const GameCard = ({ game }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
    <div className="relative w-full h-48 overflow-hidden">
      <Image
        src={game.thumbnail || '/api/placeholder/400/320'}
        alt={game.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-bold">{game.title}</h2>
      <p className="text-sm text-gray-500">
        By {game.developer} | {game.release_date}
      </p>
    </div>
    <div className="flex-grow p-4 pt-0">
      <p className="text-gray-600 mb-4 line-clamp-2">{game.short_description}</p>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <span className="font-semibold">Genre:</span>
          <p className="text-gray-600">{game.genre}</p>
        </div>
        <div>
          <span className="font-semibold">Platform:</span>
          <p className="text-gray-600">{game.platform}</p>
        </div>
        <div>
          <span className="font-semibold">Publisher:</span>
          <p className="text-gray-600">{game.publisher}</p>
        </div>
      </div>
    </div>
    <div className="p-4">
      <a
        href={game.game_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
      >
        Explore More
      </a>
    </div>
  </div>
);

const LoadingSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden space-y-3 p-4">
    <div className="h-48 bg-gray-200 animate-pulse rounded-md" />
    <div className="h-8 bg-gray-200 animate-pulse rounded-md w-3/4" />
    <div className="h-4 bg-gray-200 animate-pulse rounded-md w-full" />
    <div className="h-4 bg-gray-200 animate-pulse rounded-md w-full" />
    <div className="h-10 bg-gray-200 animate-pulse rounded-md w-full" />
  </div>
);

const ListGame = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games');
        if (!response.ok) throw new Error('Failed to fetch games');
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Game Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array(6).fill(0).map((_, index) => (
                <div key={index}>
                  <LoadingSkeleton />
                </div>
              ))
            : games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ListGame;