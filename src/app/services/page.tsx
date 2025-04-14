import RentalCTA from "../components/CTA/rentalCTA";
import ServicesSection from "../components/servicesSection";
import ValuesSection from "../components/valuesSection";
import ServicesHeader from "../components/Services/ServicesHeader";
import Header from "../components/ui/Header";
import type { Metadata } from 'next'
import OurProcess from "../components/Pricing/ourProcess";
import PricingGrid from "../components/Pricing/pricingGrid";
import H2 from "../components/ui/H2";
export const metadata: Metadata = {
  title: 'Property Management Services| Apartment Management',
  description: 'TPG Management provides comprehensive property management services in NJ, including tenant screening, maintenance, and rent collection for all property types.',
  keywords: ['property management services', 'tenant screening', 'property maintenance', 'rent collection', 'property marketing', 'New Jersey'],
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4 pb-0">
      <ServicesHeader />
      <ServicesSection />
      <OurProcess />
      <PricingGrid />
      <H2 variant="blue">We Bring Value</H2>
      <p className="text-xl text-blue-950 max-w-[800px] text-center">
        At TPG Management we realize that we need to bring true value to both owners and residents.
      </p>
      <p className="text-xl text-blue-950 max-w-[800px] text-center">
        We do this is by leveraging technology in multiple ways—from showing houses to providing owner and resident online portals; from e-leasing &
        electronic payments to thorough reports.
      </p>
      <ValuesSection />
      <RentalCTA />
    </main>
  );
}
