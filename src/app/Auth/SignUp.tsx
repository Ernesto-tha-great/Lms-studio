import React from "react";
import NavBar from "../components/Molecules/NavBar";
import Image from "next/image";
import SplashHeader from "./SplashHeader";
import Footer from "../components/Molecules/Footer";

const SignUp = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <SplashHeader />
    </div>
  );
};

export default SignUp;
