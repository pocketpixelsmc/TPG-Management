import RentalCTA from "../components/rentalCTA";
import ServicesSection from "../components/servicesSection";
import ValuesSection from "../components/valuesSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <div className="flex gap-6 flex-col items-center">
        <h1 className="text-5xl text-blue-900 text-center font-bold">Owners Resource Center</h1>
        <h2 className="text-2xl text-blue-900 font-bold max-w-[650px] text-center">Important Links:</h2>
        <p className="text-xl text-black max-w-[800px] text-center">
          Our people make the difference. Our backgrounds. Our strategies. Our action plans. Our execution.
        </p>
        <p className="text-xl text-black max-w-[800px] text-center">
          We strive to deliver a top-tier level service to both residents and property owners by simplifying the complicated. Easy to understand
          terms, simple fee structures, honesty and transparency are all part of the core values that TPG Management strives to deliver
          everyday.
        </p>
      </div>
      <ServicesSection />
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-blue-900 text-white py-8 w-[80%] text-center">We Bring Value</h2>
      <p className="text-xl text-black max-w-[800px] text-center">
        At TPG Management we realize that we need to bring true value to both owners and residents.
      </p>
      <p className="text-xl text-black max-w-[800px] text-center">
        We do this is by leveraging technology in multiple ways—from showing houses to providing owner and resident online portals; from e-leasing &
        electronic payments to thorough reports.
      </p>
      <ValuesSection />
      <RentalCTA />
    </main>
  );
}
