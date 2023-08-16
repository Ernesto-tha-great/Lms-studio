import Image from "next/image";
import React from "react";

const ExhibitionCard = () => {
  return (
    <div className="flex flex-col border-2  rounded-xl mt-12 max-w-xl gap-20">
      <div className="flex flex-col items-start p-3 gap-4">
        <div className="text-[28px] font-bold">
          Training Platform thats easy to use
        </div>

        <div className="text-xl font-light text-gray-500">
          Whether you call it a course, membership site, school, or learning
          management system, we help you bring it to life. Your learners
          navigate through the platform easily, and access information in a
          snap.
        </div>
      </div>

      <div>
        <Image
          src="/AppImages/landing2.svg"
          alt="exhibition image"
          width={1200}
          height={40}
          color="none"
          className="rounded-b-xl"
        />
      </div>
    </div>
  );
};

export default ExhibitionCard;
