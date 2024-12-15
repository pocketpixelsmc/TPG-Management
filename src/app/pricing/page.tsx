import { Metadata } from "next";
import PricingPlan from "../components/pricingPlans";
import Testimonial from "../components/testimonial";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TPG Management: Stress-Free Property Services & Pricing ",
  description:
    "TPG Management makes property management simple with customized services for all property types in NJ. From tenant placement to maintenance, we’ve got you covered.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <div className="flex gap-4 flex-col items-center">
        <h1 className="text-5xl text-blue-900 font-bold">We provide full-service property management.</h1>
        <h2 className="text-2xl text-blue-900 font-bold max-w-[450px] text-center">We’re hands-on, so you don’t have to be.</h2>
        <p className="text-xl text-black max-w-[800px] text-center">
         Our people make the difference. Our backgrounds. Our strategies. Our action plans. Our execution. We strive to deliver a top-tier level service to both residents and property owners by simplifying the complicated. Easy to understand terms, simple fee structures, honesty and transparency are all part of the core values that Augusta Rental Homes strives to deliver everyday.
        </p>
      </div>
      <hr className="hidden md:block w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <PricingPlan />
      <Link href="/contact" className="flex w-full flex-col justify-center items-center">
        <button className="bg-blue-900 text-white p-2 px-6 md:px-8 md:p-4 rounded-lg transition-all hover:bg-blue-700">
          Contact Us
        </button>
      </Link>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Testimonial />
    </main>
  );
}
