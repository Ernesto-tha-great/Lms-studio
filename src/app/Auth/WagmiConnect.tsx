"use client";
import React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const WagmiConnect = () => {
  return (
    <div className="">
      {/* {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          className="bg-blue-500 p-2 rounded-lg"
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          Connect Wallet
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}

      {error && <div>{error.message}</div>} */}
      <ConnectButton />
    </div>
  );
};

export default WagmiConnect;
