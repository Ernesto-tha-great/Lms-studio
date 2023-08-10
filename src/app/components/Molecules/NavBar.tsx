import React from "react";
import { AppButton } from "../Atoms/AppButton";
import WagmiConnect from "@/app/Auth/WagmiConnect";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center my-6 mx-4">
      <div className="flex gap-16">
        <div className="text-black text-[24px] font-extrabold">LMS STUDIO</div>
        <div className="text-black text-base font-semibold  border-b-2 border-black">
          Curriculum
        </div>
      </div>

      <div>
        {/* <AppButton title="Connect Wallet" /> */}
        <WagmiConnect />
      </div>
    </div>
  );
};

export default NavBar;
