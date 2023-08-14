"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { alchemyProvider } from "wagmi/providers/alchemy";
import {
  configureChains,
  sepolia,
  createConfig,
  WagmiConfig,
  Chain,
  mainnet,
} from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [sepolia],
//   [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY! }), publicProvider()]
// );

// const config = createConfig({
//   autoConnect: true,
//   connectors: [
//     new WalletConnectConnector({
//       chains,
//       options: {
//         projectId: process.env.WALLET_CONNECT_PROJECT_ID,
//       },
//     }),
//   ],
//   publicClient,
//   webSocketPublicClient,
// });

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [sepolia],
//   [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY! }), publicProvider()]
// );

// const projectId = process.env.ALCHEMY_API_KEY!;

// const { wallets } = getDefaultWallets({
//   appName: "LMS Studio",
//   projectId,
//   chains,
// });

// const config = createConfig({
//   autoConnect: true,
//   connectors: [new InjectedConnector({ chains })],
//   publicClient,
//   webSocketPublicClient,
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
