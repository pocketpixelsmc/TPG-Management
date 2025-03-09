import RentalCTA from "../components/CTA/rentalCTA";
import ServicesSection from "../components/servicesSection";
import ValuesSection from "../components/valuesSection";
import ServicesHeader from "../components/Services/ServicesHeader";
import Header from "../components/ui/Header";
import type { Metadata } from 'next'
import OurProcess from "../components/Pricing/ourProcess";
import PricingGrid from "../components/Pricing/pricingGrid";
export const metadata: Metadata = {
  title: 'Property Management Services',
  description: 'Comprehensive property management services including tenant screening, maintenance, rent collection, and property marketing in New Jersey.',
  keywords: ['property management services', 'tenant screening', 'property maintenance', 'rent collection', 'property marketing', 'New Jersey'],
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4 pb-0">
      <ServicesHeader />
      <ServicesSection />
      <OurProcess />
      <PricingGrid />
      <Header variant="blue">We Bring Value</Header>
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
