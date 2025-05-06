import { Metadata } from "next";
import Link from "next/link";
import OurProcess from "../components/Pricing/ourProcess";
import PricingGrid from "../components/Pricing/pricingGrid";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import Testimonial from "../components/testimonial";

export const metadata: Metadata = {
  title: 'Management You Can Trust. Pricing You Can Understand.',
  description: 'Experience full-service management, responsive maintenance, and expert leasing — all at fair, predictable rates.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-4">
      <div className="flex flex-col items-center">
        <section className="relative p-16 flex flex-col items-center justify-center text-center w-screen"
          style={{
            backgroundImage: 'url(/pricingHeader.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <Header>Management You Can Trust. Pricing You Can Understand.</Header>
          <Header variant="subHeader">Experience full-service management, responsive maintenance, and expert leasing — all at fair, predictable rates.</Header>
        </section>
      </div>
      <PricingGrid />
      <Testimonial />
    </main>
  );
}
