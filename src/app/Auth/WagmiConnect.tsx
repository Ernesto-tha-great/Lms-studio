"use client";
import React from "react";
import { useConnect } from "wagmi";

const WagmiConnect = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  return (
    <div className="bg-red-400 text-black">
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
};

export default WagmiConnect;
