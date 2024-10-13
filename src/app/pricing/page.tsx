"use client";
import Image from "next/image";
import PricingPlan from "../components/pricingPlans";
import Testimonial from "../components/testimonial";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <div className="flex gap-4 flex-col">
        <h1 className="text-4xl text-blue-900 font-bold">Services & Pricing</h1>
        <h1 className="text-3xl text-blue-900 font-bold max-w-[450px]">Discover how we make property management easy and stress-free.</h1>
        <p className="text-xl text-black max-w-[800px]">
          Whether you own a single-family home, an apartment unit, or a combination of several properties, we&apos;re here to make your life easier.
          We offer a wide range of property management services to fit your needs as a landlord and rental property owner. From day one, you&apos;ll
          have a friendly property manager by your side, dedicated to ensuring your happiness and satisfaction in the rental journey.
        </p>
      </div>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <PricingPlan />
      <Link href={"/contact"} className="flex w-full flex-col justify-center items-center">
        <button className="bg-blue-900 text-white p-2 px-6 md:px-8 md:p-4 md:self-center rounded-lg transition-all hover:bg-blue-700">
          Contact Us
        </button>
      </Link>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Testimonial />
    </main>
  );
}
