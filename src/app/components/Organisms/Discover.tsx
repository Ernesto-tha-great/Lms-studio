import React from "react";
import DiscoverItem from "../Molecules/DiscoverItem";
import { data2 } from "../../../../constants";

const Discover = () => {
  return (
    <div className="flex flex-col mt-20 gap-8">
      <div className="text-[44px] font-light font-sans text-center">
        Discover what you can do with LMS Studio{" "}
      </div>
      <div className="flex  overflow-x-scroll ml-8 my-6 ">
        {data2.map((item) => (
          <DiscoverItem key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
