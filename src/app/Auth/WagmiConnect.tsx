"use client";
import React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const WagmiConnect = () => {
  return (
    <div className="">
      <ConnectButton showBalance={true} />
    </div>
  );
};

export default WagmiConnect;
