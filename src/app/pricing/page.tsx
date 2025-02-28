import { Metadata } from "next";
import PricingPlan from "../components/pricingPlans";
import Testimonial from "../components/testimonial";
import Link from "next/link";
import OurProcess from "../components/ourProcess";
import FeesAtGlance from "../components/feesAtGlance";

export const metadata: Metadata = {
  title: "TPG Management: Stress-Free Property Services & Pricing ",
  description:
    "TPG Management makes property management simple with customized services for all property types in NJ. From tenant placement to maintenance, we’ve got you covered.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 p-4 pb-0 sm:mt-16">
      <div className="flex gap-4 flex-col items-center">
        <h1 className="text-5xl text-blue-900 font-bold text-center">Property Management You Can Trust</h1>
        <h2 className="text-2xl text-blue-900 font-bold max-w-[450px] text-center">No Hidden Fees, Just Results</h2>
        <p className="text-xl text-black max-w-[800px] text-center">
          Having a successful rental property requires a lot of time, effort, and knowledge. At TPG Management you have an entire team working
          collectively to manage all aspects of your property to make sure it continues to be a solid investment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="inline-block bg-blue-900 px-8 py-3 text-white font-medium hover:bg-blue-700 transition-colors rounded-lg">
            WORK WITH US
          </Link>
          <Link href="/faq" className="inline-block bg-blue-900 px-8 py-3 text-white font-medium hover:bg-blue-700  transition-colors rounded-lg">
            Owner FAQs
          </Link>
        </div>
      </div>
      <OurProcess />
      <FeesAtGlance />
    </main>
  );
}
