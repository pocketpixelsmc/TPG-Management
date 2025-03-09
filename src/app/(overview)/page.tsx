"use client";
import Image from "next/image";
import Introduction from "../components/Introductory/introduction";
import Welcome from "../components/Introductory/welcome";
import Services from "../components/Introductory/Services/services";
import FeaturesSection from "../components/Introductory/Features/featuresSection";
import Testimonial from "../components/testimonial";
import Link from "next/link";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 p-4 pb-0">
      <Welcome />
      <Introduction />
      <FeaturesSection />
      <Services />
      <Testimonial />
      <div className="bg-blue-900 py-16 text-center w-screen">
        <p className="text-white text-2xl mb-8 mx-auto px-4 w-[75%]">&quot;Property Management Made Seemless&quot;</p>
        <Link href="/contact">
          <Button>Get Started</Button>
        </Link>
      </div>
    </main>
  );
}
