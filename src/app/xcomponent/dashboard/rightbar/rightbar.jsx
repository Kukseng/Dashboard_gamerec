import React from 'react';

const Rightbar = () => {
  return (
    <div className="flex flex-col gap-5 sticky top-4 ml-2">
      {/* Right Block 1 */}
      <div className="w-[360px] h-[290px] bg-gray-200 p-4 rounded-lg">
        <h3 className="font-semibold">Available Now</h3>
        <p className="text-sm mt-2">How to use the new version of the admin dashboard?</p>
        <p className="mt-4 text-sm text-gray-600">
          Takes 4 minutes to learn.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.
        </p>
        <button className="mt-4 text-blue-500">Watch</button>
      </div>

      {/* Right Block 2 */}
      <div className="w-[360px] h-[290px] bg-gray-200 p-4 rounded-lg">
        <h3 className="font-semibold">Coming Soon</h3>
        <p className="text-sm mt-2">New server actions are available, partial pre-rendering is coming up!</p>
        <p className="mt-4 text-sm text-gray-600">
          Boost your productivity.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit elus libero perspiciatis recusandae possimus.
        </p>
        <button className="mt-4 text-blue-500">Learn</button>
      </div>
    </div>
  );
};

export default Rightbar;
