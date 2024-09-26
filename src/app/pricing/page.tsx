"use client"
import Image from "next/image";
import PricingPlan from "../components/pricingPlans";
import Testimonial from "../components/testimonial";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <h1 className="text-4xl text-blue-900 font-bold self-center">Pricing and Packages</h1>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 bg-slate-300 max-w-[500px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <p className="text-xl text-blue-950 text-left leading-loose">
          We keep our pricing Simple. We typically require 8% of the monthly rent with a minimum of $110. Keep in mind, that every property is
          different. Pricing may be discounted for larger properties or other special situations. Some companies charge extra for some additional
          services. We don&apos;t. We provide high quality, complete service without add-ons or special fees.
        </p>
      </div>
      <PricingPlan/>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Testimonial/>
    </main>
  );
}
