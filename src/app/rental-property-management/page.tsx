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
      <h1 className="text-3xl text-blue-900 font-bold">Property Management for Rentals in New Jersey</h1>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 border-gray-200 border-y-2 max-w-[500px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <p className="text-xl text-blue-950 text-left leading-loose">
        Looking for reliable property management for rentals in New Jersey? Our team provides end-to-end solutions for rental homes, condos, and apartment buildings, covering everything from leasing and tenant screening to maintenance coordination and rent collection. We understand the challenges rental property owners face and offer services built to protect your investment and simplify operations. Whether you own a single home or a large multi-unit building, our experienced managers deliver efficient, responsive support. </p>
      </div>
      <RentalCTAAbout />
    </main>
  );
}
