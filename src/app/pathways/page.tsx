import React from "react";
import NavBar from "../components/Molecules/landingPage/NavBar";
import Footer from "../components/Molecules/landingPage/Footer";
import PathwayCard from "../components/Organisms/pathways/PathwayCard";
import { data3 } from "../../../constants";

const Page = () => {
  return (
    <main className="flex min-h-screen text-black flex-col bg-white">
      <NavBar />
      <div className="grid grid-cols-2 ">
        {data3.map((item) => (
          <PathwayCard
            key={item.id}
            description={item.description}
            title={item.title}
            image={item.img}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default Page;
