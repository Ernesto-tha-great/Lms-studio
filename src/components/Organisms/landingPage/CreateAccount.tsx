import Image from "next/image";
import React from "react";

const CreateAccount = () => {
  return (
    <div className="flex flex-col bg-blue-300 items-center p-6 gap-8 my-8">
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="text-[42px] font-semibold">
          {" "}
          Get everyone to say Yes to training
        </div>
        <div>
          <button className="py-3 px-8 bg-white text-blue-500 rounded-2xl hover:bg-red-500 hover:text-white transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110  duration-300">
            Create An Account
          </button>
        </div>
        <div className="text-sm font-semibold mt-6">
          Sign up for a free account and start creating your online courses
          today.
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
