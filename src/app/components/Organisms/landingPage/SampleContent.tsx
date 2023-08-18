import Image from "next/image";
import React from "react";

const SampleContent = () => {
  return (
    <div className="flex items-center justify-between mx-12 mt-16">
      <div>
        <Image
          src="/AppImages/landing16.jpg"
          alt="landing banner"
          width={1200}
          height={800}
          color="none"
          className="rounded-lg  object-fill"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-[42px] font-extrabold font-serif">
          No content? No Problem! This is LMS Studio, we got you covered.
        </div>

        <div className="text-lg font-light ">
          Discover a growing collection of ready-made training courses delivered
          through TalentLMS, and gear up your people for success at work.
        </div>

        <div className="border-b-2 border-blue-600 hover:border-red-600 transition delay-150 w-1/3">
          Explore LMS Studio
        </div>
      </div>
    </div>
  );
};

export default SampleContent;
