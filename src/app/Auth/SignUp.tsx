import React from "react";
import NavBar from "../../components/Molecules/landingPage/NavBar";
import Image from "next/image";
import SplashHeader from "./SplashHeader";
import Footer from "../../components/Molecules/landingPage/Footer";

const SignUp = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <SplashHeader />
    </div>
  );
};

export default SignUp;
