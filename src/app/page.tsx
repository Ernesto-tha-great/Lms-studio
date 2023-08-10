import Image from "next/image";
import SignUp from "./Auth/SignUp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gypsum p-24">
      <SignUp />
    </main>
  );
}
