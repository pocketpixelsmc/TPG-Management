import { Metadata } from "next";
import Link from "next/link";
import OurProcess from "../components/Pricing/ourProcess";
import PricingGrid from "../components/Pricing/pricingGrid";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";

export const metadata: Metadata = {
  title: 'Multifamily and Investment Property Management',
  description: 'Transparent pricing and fee structure for our property management services. View our competitive rates and comprehensive management packages.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 p-4 pb-0 sm:mt-16">
      <div className="flex gap-4 flex-col items-center">
        <Header>Multifamily Property Management</Header>
        <Header variant="subHeader">Dedicated Multifamily Property Management Professionals</Header>
        <p className="text-xl text-blue-950 max-w-[800px] text-center">
Partner with TPG Management for seamless, full-service property management tailored to your needs. From leasing and billing to groundskeeping and maintenance, 
our experienced team works alongside you to maximize your property’s success. We have the expertise, care, and personalized support to manage everything from 
scattered-site portfolios to large luxury high-rises—helping multifamily properties of all sizes thrive!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button>CONTACT US</Button>
          </Link>
          <Link href="/faq">
            <Button>Owner FAQs</Button>
          </Link>
        </div>
      </div>
      <PricingGrid />
    </main>
  );
}
