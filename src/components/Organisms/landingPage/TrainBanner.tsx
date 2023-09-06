import Link from "next/link";
import React from "react";

const TrainBanner = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-24 mb-12">
      <div className="text-[40px] font-medium">
        Train People. Measure Results. Drive Growth
      </div>
      <div className="text-sm font-medium">
        Sign up for a free account today! No cards needed
      </div>
      <div>
        <Link href="/pathways">
          <button className="py-3 px-12 text-medium  bg-blue-400 rounded-lg hover:bg-red-500 hover:text-white transition hover:translate-x-3  ease-in-out duration-300">
            Create Free Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainBanner;
