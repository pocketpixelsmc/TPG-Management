import Image from "next/image";
import Team from "../components/team";
import Missions from "../components/missions";
import { Metadata } from "next";
import RentalCTA from "../components/rentalCTA";
import { Link } from "lucide-react";
import RentalCTAAbout from "../components/rentalCTAAbout";

export const metadata: Metadata = {
  title: "NJ Property Management Leaders | TPG Management",
  description:
    "TPG Management was founded by experienced investors with hands-on property expertise, delivering tailored solutions to maximize value and streamline operations. ",
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <h1 className="text-3xl text-blue-900 font-bold">Managing rental property is our life</h1>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 bg-slate-300 max-w-[500px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <h1 className="text-2xl font-bold text-blue-900">How we started?</h1>
        <p className="text-xl text-blue-950 text-left leading-loose">
          TPG Management was born out of necessity and experience. As property investors ourselves, we started with managing our own multi-family and retail properties, learning firsthand the challenges
          and opportunities that come with ownership. Over time, we saw a growing need among fellow investors for a management company that truly understood the intricacies of property ownership from an owner’s perspective.

          With this in mind, we decided to turn our hands-on expertise into a business. In doing so, we’ve been able to help other property owners maximize their investments, 
          streamline operations, and remove the stress of day-to-day management. Today, TPG Management continues to grow, serving New Jersey’s rental property market with a focus on personalized, results-driven solutions for our clients.
        </p>
      </div>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <h1 className="text-4xl text-blue-900 font-bold self-center">Our Team</h1>
      <Team />
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <h1 className="text-4xl text-blue-900 font-bold self-center">Mission and Core Values</h1>
      <Missions />
      <RentalCTAAbout />
    </main>
  );
}
