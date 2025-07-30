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
        TPG Management specializes in property management for rentals, helping landlords across New Jersey maximize their income and reduce stress. We provide full-service support for rental homes, condos, and apartments — from tenant screening and leasing to maintenance and rent collection. As one of the leading rental property management companies in NJ, we understand the unique needs of rental property owners and deliver tailored solutions. Whether you're seeking help with a single-family home or large apartment complex, our experienced property managers for rental properties ensure your investment is protected.
Our New Jersey rental property services include fast tenant placement, 24/7 emergency response, and monthly financial reporting to keep you in control. We’re trusted by landlords statewide for reliable rent management services in NJ and professional apartment rental management. With TPG, you get local expertise, responsive service, and a team that manages your property like it's our own. Let us handle the day-to-day — so you can focus on growing your portfolio.        </p>
      </div>
      <RentalCTAAbout />
    </main>
  );
}
