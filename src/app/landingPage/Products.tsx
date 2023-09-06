import React from "react";
import LandingBanner from "../../components/Organisms/landingPage/LandingBanner";
import Exhibition from "../../components/Organisms/landingPage/Exhibition";
import CreateAccount from "../../components/Organisms/landingPage/CreateAccount";
import Discover from "../../components/Organisms/landingPage/Discover";
import SampleContent from "../../components/Organisms/landingPage/SampleContent";
import TrainBanner from "../../components/Organisms/landingPage/TrainBanner";
import Footer from "../../components/Molecules/landingPage/Footer";

const Products = () => {
  return (
    <section className="text-black">
      <LandingBanner />
      <Exhibition />
      <CreateAccount />
      <Discover />
      <SampleContent />
      <TrainBanner />
      <Footer />
    </section>
  );
};

export default Products;
