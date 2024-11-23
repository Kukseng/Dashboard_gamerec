import React from "react";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-5 sticky top-4 ml-2">
      {/* Right Block 1 */}
      <div
        className="w-[360px] h-[290px] text-white bg-gray-700 p-4 rounded-lg shadow-2xl relative"
        style={{
          backgroundImage: "url('/images/astronaut.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)", // Reduces the brightness of the image
        }}
      >
        <div className="absolute inset-0  bg-opacity-50 rounded-lg"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10">
          <h3 className="font-semibold">Available Now</h3>
          <p className="text-sm mt-2">
            How to use the new version of the admin dashboard?
          </p>
          <p className="mt-4 text-sm">Takes 4 minutes to learn.</p>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="mt-4 text-blue-500">Watch</button>
        </div>
      </div>

      {/* Right Block 2 */}
      <div
        className="w-[360px] h-[290px]  bg-gray-700 p-4 rounded-lg shadow-2xl relative"
        style={{
          backgroundImage: "url('/images/astronaut.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)", // Reduces the brightness of the image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 text-white">
          <h3 className="font-semibold">Coming Soon</h3>
          <p className="text-sm mt-2">
            New server actions are available, partial pre-rendering is coming
            up!
          </p>
          <p className="mt-4 text-sm">Boost your productivity.</p>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="mt-4 text-blue-500">Learn</button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
