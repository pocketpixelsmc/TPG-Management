import Team from "../components/About/team";
import Missions from "../components/About/missions";
import { Metadata } from "next";
import RentalCTAAbout from "../components/CTA/rentalCTAAbout";
import Header from "../components/ui/Header";

export const metadata: Metadata = {
  title: 'Residential Property Management Experts in New Jersey',
  description: 'Learn about TPG Management, our experienced team, and our commitment to providing exceptional property management services in New Jersey.',
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <h1 className="text-3xl text-blue-900 font-bold">Residential Property Management Experts in New Jersey</h1>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 border-gray-200 border-y-2 max-w-[500px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <p className="text-xl text-blue-950 text-left leading-loose">
        TPG Management delivers expert residential property management in NJ for condos, apartments, and single-family homes. Our services are tailored for homeowners and landlords seeking full-service support with leasing, maintenance, compliance, and more. Whether you need apartment property management in New Jersey or residential property maintenance in NJ, we’ve got you covered. Let our experienced team simplify property ownership and protect your investment. We offer transparent communication, fast response times, and a proactive approach to managing every detail. With TPG, you get reliable residential property management backed by investor-level expertise.        </p>
      </div>
      <RentalCTAAbout />
    </main>
  );
}
