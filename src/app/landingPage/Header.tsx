import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-around text-black mx-16">
      <div className="flex flex-col items-start gap-6">
        <div>
          <div className="text-[64px] font-extrabold">LMS Studio</div>
          <div className="text-lg text-start">
            LMS Studio has everything you need to create and scale your courses
            in a structured manner. Upload and launch your courses in minutes.
          </div>
        </div>

        <div>
          <button className="p-3 bg-transparent border-2 border-black rounded-xl hover:bg-blue-500 hover:text-white hover:border-0">
            Get Started
          </button>
        </div>
      </div>

      <div>
        <Image
          src="/AppImages/header.jpg"
          alt="header image"
          width={1200}
          height={40}
        />
      </div>
    </div>
  );
};

export default Header;
