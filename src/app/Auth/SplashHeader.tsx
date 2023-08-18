"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { useConnect } from "wagmi";
import Link from "next/link";

import { AiFillForward } from "react-icons/ai";
import InputField from "../components/Molecules/landingPage/InputField";
import Loading from "../components/Atoms/Loading";

enum HasWallet {
  Yes = "yes",
  No = "no",
}

const SplashHeader = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasWallet, setHasWallet] = useState<HasWallet>(HasWallet.Yes);

  const [hasMounted, setHasMounted] = useState(false);

  const { address, isDisconnected } = useAccount();

  const handleHasWallet = () => {
    if (hasWallet === HasWallet.Yes) {
      setHasWallet(HasWallet.No);
    } else {
      setHasWallet(HasWallet.Yes);
    }
  };

  const signup = async () => {};
  return (
    <div className="flex items-center justify-around mx-10 mt-24">
      <div className="bg-gypsum border-2 rounded-lg p-16 my-4">
        {hasWallet === HasWallet.Yes ? (
          <div className=" flex flex-col items-center">
            <div className="text-[32px] text-gray-700 font-extrabold text-center">
              Please connect your wallet to continue
            </div>

            <div
              onClick={handleHasWallet}
              className="flex text-blue-500 items-center gap-2 mt-8 hover:cursor-pointer"
            >
              <div>
                <AiFillForward size={28} />
              </div>
              <div className=" ">Signup with email instead</div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-2xl text-black font-noto font-semibold text-center">
              Sign up
            </div>

            <div className="mt-3">
              <InputField
                value={email}
                placeholder={"Email address"}
                onChange={(e) => setEmail(e)}
                type="email"
              />
            </div>
            <div className="mt-4">
              <InputField
                value={name}
                placeholder={"Full name"}
                onChange={(e) => setName(e)}
                type="text"
              />
            </div>
            <div className="mt-4">
              <InputField
                value={country}
                placeholder={"Country"}
                onChange={(e) => setCountry(e)}
                type="text"
              />
            </div>
            <div className="mt-4">
              <InputField
                value={password}
                type="password"
                placeholder={"Password"}
                onChange={(e) => setPassword(e)}
              />
            </div>
            <div className="flex flex-col items-center mt-8 h-16 ">
              {loading ? (
                <Loading />
              ) : (
                <button
                  onClick={() => {
                    signup();
                  }}
                  className=" border-2 p-2 border-black rounded-xl  text-black button-full hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-0"
                >
                  Sign up
                </button>
              )}
            </div>

            <div className=" flex flex-col text-black mt-4 gap-4 items-center ">
              <h3 className="text-xl font-medium">
                If you already have an account{" "}
              </h3>

              <Link href="/landingPage">
                <button className=" border-2 p-2 border-black rounded-xl  text-black button-full hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-0">
                  Login
                </button>
              </Link>

              <div
                onClick={() => {
                  setHasWallet(HasWallet.Yes);
                }}
              >
                Connect with wallet instead{" "}
              </div>
            </div>
            {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}
          </>
        )}
      </div>

      <div>
        <Image
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
          alt="header image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SplashHeader;
