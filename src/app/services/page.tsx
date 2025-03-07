import RentalCTA from "../components/CTA/rentalCTA";
import ServicesSection from "../components/servicesSection";
import ValuesSection from "../components/valuesSection";
import Header from "../components/ui/Header";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Management Services',
  description: 'Comprehensive property management services including tenant screening, maintenance, rent collection, and property marketing in New Jersey.',
  keywords: ['property management services', 'tenant screening', 'property maintenance', 'rent collection', 'property marketing', 'New Jersey'],
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <div className="flex gap-6 flex-col items-center">
        <Header>We provide full-service property management.</Header>
        <h3 className="text-2xl text-blue-900 font-bold max-w-[650px] text-center">We&apos;re hands-on, so you don&apos;t have to be.</h3>
        <p className="text-xl text-blue-950 max-w-[800px] text-center">
          Our people make the difference. Our backgrounds. Our strategies. Our action plans. Our execution.
        </p>
        <p className="text-xl text-blue-950 max-w-[800px] text-center">
          We strive to deliver a top-tier level service to both residents and property owners by simplifying the complicated. Easy to understand
          terms, simple fee structures, honesty and transparency are all part of the core values that TPG Management strives to deliver
          everyday.
        </p>
      </div>
      <ServicesSection />
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
