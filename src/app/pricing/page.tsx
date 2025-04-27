import { Metadata } from "next";
import Link from "next/link";
import OurProcess from "../components/Pricing/ourProcess";
import PricingGrid from "../components/Pricing/pricingGrid";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";

export const metadata: Metadata = {
  title: 'Management You Can Trust. Pricing You Can Understand.',
  description: 'Experience full-service management, responsive maintenance, and expert leasing — all at fair, predictable rates.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 p-4 pb-0 sm:mt-16">
      <div className="flex gap-4 flex-col items-center">
        <Header>Full Service Property Management</Header>
        <Header variant="subHeader">Transparent pricing and fee structure for our property management services.</Header>
        <div className="flex flex-col sm:flex-row gap-4">
        </div>
      </div>
      <PricingGrid />
    </main>
  );
}
