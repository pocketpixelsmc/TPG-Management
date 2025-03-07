import { Metadata } from "next";
import Link from "next/link";
import OurProcess from "../components/Pricing/ourProcess";
import PricingGrid from "../components/Pricing/pricingGrid";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
export const metadata: Metadata = {
  title: "TPG Management: Stress-Free Property Services & Pricing ",
  description:
    "TPG Management makes property management simple with customized services for all property types in NJ. From tenant placement to maintenance, we’ve got you covered.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 p-4 pb-0 sm:mt-16">
      <div className="flex gap-4 flex-col items-center">
        <Header>Property Management You Can Trust</Header>
        <Header variant="subHeader">No Hidden Fees, Just Results</Header>
        <p className="text-xl text-blue-950 max-w-[800px] text-center">
          Having a successful rental property requires a lot of time, effort, and knowledge. At TPG Management you have an entire team working
          collectively to manage all aspects of your property to make sure it continues to be a solid investment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button>WORK WITH US</Button>
          </Link>
          <Link href="/faq">
            <Button>Owner FAQs</Button>
          </Link>
        </div>
      </div>
      <OurProcess />
      <PricingGrid />
    </main>
  );
}
