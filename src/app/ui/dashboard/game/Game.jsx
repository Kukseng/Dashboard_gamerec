// components/ProductTable.js
import Image from "next/image";
const GameCom = () => {
  const games = [
    {
      name: "FIFA 23",
      image:
        "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-mobile/season-5/global_assets/images/2023/03/fifa-mobile-grid-tile-season-5-16x9-1.jpg.adapt.crop191x100.1200w.jpg",
      category: "Sports",
      downloads: 15000,
      rating: 4.8,
      size: "50GB",
      releaseDate: "2023-09-30",
      lastUpdate: "2024-11-10",
    },
    {
      name: "League of Legends",
      image:
        "https://cdn.prod.website-files.com/5f6e2764d26f3c5244a5b664/64b53061f419e782ea982384_LOL.jpg",
      category: "MOBA",
      downloads: 250000,
      rating: 4.5,
      size: "20GB",
      releaseDate: "2009-10-27",
      lastUpdate: "2024-10-01",
    },
    {
      name: "Valorant",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/d0db663bf28844dcbd744935cdd8c71083e0031c-5600x3150.jpg",
      category: "FPS",
      downloads: 180000,
      rating: 4.7,
      size: "25GB",
      releaseDate: "2020-06-02",
      lastUpdate: "2024-09-15",
    },
    {
      name: "Minecraft",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kVChoz3ZT5ukQfDO5qWE-c4xPeqedBGJOg&s",
      category: "Sandbox",
      downloads: 500000,
      rating: 4.9,
      size: "1GB",
      releaseDate: "2011-11-18",
      lastUpdate: "2024-08-20",
    },
    // Add more games as needed
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Free Games (1-10)</h1>
        <div className="mx-3">
          <button className=" mx-2 px-4 py-2 text-white bg-blue-500 rounded-md">
            + Add Game
          </button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
            + Publish
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">Game</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Downloads</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3">Size</th>
              <th className="px-6 py-3">Release Date</th>
              <th className="px-6 py-3">Last Update</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, index) => (
              <tr key={index} className="border-b">
                <td>
                  <Image
                    className="rounded-full object-cover w-[50px] h-[50px]"
                    src={game.image}
                    alt="User Avatar"
                    width={1000}
                    height={1000}
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {game.name}
                </td>
                <td className="px-6 py-4 text-blue-500">{game.category}</td>
                <td className="px-6 py-4">{game.downloads.toLocaleString()}</td>
                <td className="px-6 py-4">
                  {"★".repeat(Math.floor(game.rating))}
                </td>
                <td className="px-6 py-4">{game.size}</td>
                <td className="px-6 py-4">{game.releaseDate}</td>
                <td className="px-6 py-4">{game.lastUpdate}</td>
                <td className="px-6 py-4 space-x-2">
                  <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600">Showing 1-10 of 1000</span>
        <div className="space-x-1">
          <button className="px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded-md">
            1
          </button>
          <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md">
            2
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded-md">
            3
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameCom;
