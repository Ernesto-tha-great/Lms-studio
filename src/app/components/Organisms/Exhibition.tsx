import React from "react";
import ExhibitionCard from "../Molecules/ExhibitionCard";
import { data1 } from "../../../../constants";

const Exhibition = () => {
  return (
    <div className=" flex flex-col text-black mt-16 mx-6">
      <div className="flex flex-col items-start gap-6 w-1/2">
        <div className="text-[42px] font-bold text-start break-words ">
          Create the Perfect Online Learning Experience
        </div>
        <div className="text-thin text-2xl text-gray-600 font-serif text-start break-normal">
          Easily create beautiful courses, coaching programs, private
          communities, and more from your lms studio
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {data1.map((item) => (
          <ExhibitionCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Exhibition;
