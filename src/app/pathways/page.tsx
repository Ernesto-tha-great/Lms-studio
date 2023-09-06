import React from "react";
import NavBar from "../../components/Molecules/landingPage/NavBar";
import Footer from "../../components/Molecules/landingPage/Footer";
import PathwayCard from "../../components/Organisms/pathways/PathwayCard";
import { pathways } from "../../../constants";

const Page = () => {
  return (
    <>
      <NavBar />
      <section className="flex w-full  text-black flex-col items-center bg-white">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   ">
          {pathways.map((item) => (
            <PathwayCard
              key={item.key}
              desc={item.desc}
              name={item.name}
              image={item.image}
              url={item.url}
              tags={item.tags}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
