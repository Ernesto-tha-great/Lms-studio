"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { configureChains, sepolia, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const inter = Inter({ subsets: ["latin"] });

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: `YrWOEaQtXF7nKLvsYOEEkrtxXRenEME9` }),
    publicProvider(),
  ]
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        projectId: `016d0d1b4ca22b6d42ce52d4c7c641c2`,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <body className={inter.className}>{children}</body>
      </WagmiConfig>
    </html>
  );
}
