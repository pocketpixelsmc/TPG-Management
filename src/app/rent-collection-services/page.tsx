import Team from "../components/About/team";
import Missions from "../components/About/missions";
import { Metadata } from "next";
import RentalCTAAbout from "../components/CTA/rentalCTAAbout";
import Header from "../components/ui/Header";

export const metadata: Metadata = {
  title: 'Rent Collection Services in New Jersey',
  description: 'Learn about TPG Management, our experienced team, and our commitment to providing exceptional property management services in New Jersey.',
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <h1 className="text-3xl text-blue-900 font-bold">Reliable Rent Collection for Landlords and Multi-Family Investors in NJ</h1>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 border-gray-200 border-y-2 max-w-[500px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <p className="text-xl text-blue-950 text-left leading-loose">
          TPG Management offers professional rent collection services in NJ tailored to the needs of landlords and property owners. Whether you own single-family homes or multi-family units in New Jersey, our team ensures consistent, on-time payments and detailed reporting. We take the stress out of tracking payments, issuing notices, and following up with tenants. Count on us for efficient and compliant rent collection services for landlords in NJ. 
        </p>
      </div>
      <RentalCTAAbout />
    </main>
  );
}
