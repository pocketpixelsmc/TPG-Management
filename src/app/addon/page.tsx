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
          Owners Portal: https://tpgcompanies.managebuilding.com/manager
          Property Intake Form: https://tpgmanagement.net/intake
          Owner ACH Form: https://ach.tpgcompanies.net/
        </p>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-blue-900 text-white py-8 w-[80%] text-center">Additional Add-Ons</h2>
      <p className="text-xl text-black max-w-[800px] text-center">
        At TPG Management, we go beyond standard management by offering curated add-on services that bring unmatched value to property owners. Elevate your investment with benefits you won’t find elsewhere.
      </p>
      <p className="text-xl text-black max-w-[800px] text-center">
      </p>
    </main>
  );
}
