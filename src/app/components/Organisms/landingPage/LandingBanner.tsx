import React from "react";

const LandingBanner = () => {
  return (
    <div className="flex items-center justify-between bg-[#f5f5f5] text-gray-700 my-8 p-3">
      <div className="flex flex-col items-center">
        <div className="text-[28px] font-bold font-sans">300+</div>
        <div className="font-light font-serif">Enrollments</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-[28px] font-bold font-sans">1600+</div>
        <div className="font-light font-serif">Courses completed</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-[28px] font-bold font-sans">900+</div>
        <div className="font-light font-serif">Creator payments</div>
      </div>

      <div className="flex flex-col items-center ">
        <div className="text-[28px] font-bold font-sans">816</div>
        <div className="font-light font-serif">Achievement Awarded</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-[28px] font-bold font-sans">4000+</div>
        <div className="font-light font-serif">Certificates Earned</div>
      </div>
    </div>
  );
};

export default LandingBanner;
