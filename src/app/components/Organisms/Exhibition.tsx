import React from "react";
import ExhibitionCard from "../Molecules/ExhibitionCard";

const Exhibition = () => {
  return (
    <div className=" flex flex-col text-black my-6 mx-4">
      <div className="flex flex-col items-start gap-6 w-1/2">
        <div className="text-[42px] font-bold text-start break-words ">
          Create the Perfect Online Learning Experience
        </div>
        <div className="text-thin text-2xl text-gray-600 font-serif text-start break-normal">
          Easily create beautiful courses, coaching programs, private
          communities, and more from your lms studio
        </div>
      </div>
      <div>
        <ExhibitionCard />
      </div>
    </div>
  );
};

export default Exhibition;
