import React from "react";
import NavBar from "../components/Molecules/NavBar";
import Header from "./Header";
import Products from "./Products";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavBar />
      <Header />
      <Products />
    </main>
  );
};

export default Page;
