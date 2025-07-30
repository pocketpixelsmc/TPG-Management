import Team from "../components/About/team";
import Missions from "../components/About/missions";
import { Metadata } from "next";
import RentalCTAAbout from "../components/CTA/rentalCTAAbout";
import Header from "../components/ui/Header";

export const metadata: Metadata = {
  title: 'Professional Landlord Services in NJ',
  description: 'Learn about TPG Management, our experienced team, and our commitment to providing exceptional property management services in New Jersey.',
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <h1 className="text-3xl text-blue-900 font-bold">Profesional Landlord Services in New Jersey</h1>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 border-gray-200 border-y-2 max-w-[500px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <p className="text-xl text-blue-950 text-left leading-loose">
          Looking for reliable landlord services in New Jersey? TPG Management offers professional landlord services in NJ designed to protect your investment and maximize returns. From tenant screening and rent collection to maintenance and compliance, we handle it all so you don’t have to. Trust our experienced team to deliver hassle-free landlord services across New Jersey.
   </p>
      </div>
      <RentalCTAAbout />
    </main>
  );
}
