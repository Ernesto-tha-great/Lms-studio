import React from "react";
import NavBar from "../components/Molecules/landingPage/NavBar";
import Footer from "../components/Molecules/landingPage/Footer";
import PathwayCard from "../components/Organisms/pathways/PathwayCard";

const Page = () => {
  return (
    <main className="flex min-h-screen text-black flex-col bg-white">
      <NavBar />
      <PathwayCard />
      <Footer />
    </main>
  );
};

export default Page;
