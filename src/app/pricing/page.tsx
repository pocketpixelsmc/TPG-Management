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
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <div className="flex gap-4 flex-col">
        <h1 className="text-4xl text-blue-900 font-bold">Services & Pricing</h1>
        <h1 className="text-3xl text-blue-900 font-bold max-w-[450px]">Discover how we make property management easy and stress-free.</h1>
        <p className="text-xl text-black max-w-[800px]">
          No matter the size or type of property you own, our goal is to handle the details, so you don&apos;t have to. At TPG Management, we tailor
          our services to meet your specific needs, offering comprehensive solutions that cover everything from tenant placement to ongoing
          maintenance. From the start, we are committed to maximizing the value of your investment and ensuring seamless management every step of the
          way.
        </p>
      </div>
      <hr className=" hidden md:block w-[90%] border-1 border-slate-800 mx-auto my-8" />
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
