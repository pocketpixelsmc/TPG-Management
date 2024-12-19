"use client";
import Image from "next/image";
import Introduction from "../components/introduction";
import Welcome from "../components/welcome";
import Services from "../components/services";
import FeaturesSection from "../components/featuresSection";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <Welcome />
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Introduction />
      <FeaturesSection />
      <Services />
    </main>
  );
}
