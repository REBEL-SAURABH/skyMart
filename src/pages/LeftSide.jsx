import { Bolt } from "lucide-react";
import React from "react";

const LeftSide = () => {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-lime-400 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <Bolt className="text-black" size={22} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-6 lg:space-y-8 max-w-xl py-12">

        <p className="text-lime-400 font-semibold tracking-[0.25em] text-sm">
          WELCOME BACK
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Shop the future.
          <br />
          <span className="text-lime-400">Today.</span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg lg:text-xl">
          Thousands of products, lightning-fast delivery, and prices that make
          your wallet happy.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">

          <div className="border border-gray-700 rounded-2xl py-6 text-center">
            <h2 className="text-lime-400 text-2xl sm:text-3xl font-bold">
              20K+
            </h2>
            <p className="text-gray-400 mt-2">Products</p>
          </div>

          <div className="border border-gray-700 rounded-2xl py-6 text-center">
            <h2 className="text-lime-400 text-2xl sm:text-3xl font-bold">
              50K+
            </h2>
            <p className="text-gray-400 mt-2">Users</p>
          </div>

          <div className="border border-gray-700 rounded-2xl py-6 text-center">
            <h2 className="text-lime-400 text-2xl sm:text-3xl font-bold">
              4.9★
            </h2>
            <p className="text-gray-400 mt-2">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftSide;