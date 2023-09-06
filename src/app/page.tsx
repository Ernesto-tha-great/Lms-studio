import Image from "next/image";
import SignUp from "./Auth/SignUp";
import Footer from "../components/Molecules/landingPage/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-white">
        <SignUp />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
