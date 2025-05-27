import { Metadata } from "next";
import Header from "../components/ui/Header";
import pricingServicesData from "@/data/pricingServices.json";
import Testimonial from "../components/testimonial";
import RentalCTA from "../components/CTA/rentalCTA";
import PricingGrid from "../components/PricingGrid";

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
      
      {/* Client Component "island" */}
      <PricingGrid pricingServicesData={pricingServicesData} />
      
      <RentalCTA />
      <Testimonial />
    </main>
  );
}
