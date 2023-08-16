import React from "react";
import LandingBanner from "../components/Organisms/LandingBanner";
import Exhibition from "../components/Organisms/Exhibition";
import CreateAccount from "../components/Organisms/CreateAccount";
import Discover from "../components/Organisms/Discover";

const Products = () => {
  return (
    <section className="text-black">
      <LandingBanner />
      <Exhibition />
      <CreateAccount />
      <Discover />
    </section>
  );
};

export default Products;
