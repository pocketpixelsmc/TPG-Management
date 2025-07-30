import Team from "../components/About/team";
import Missions from "../components/About/missions";
import { Metadata } from "next";
import RentalCTAAbout from "../components/CTA/rentalCTAAbout";
import Header from "../components/ui/Header";

export const metadata: Metadata = {
  title: 'Full-Service Real Estate Management in New Jersey',
  description: 'Learn about TPG Management, our experienced team, and our commitment to providing exceptional property management services in New Jersey.',
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <h1 className="text-3xl text-blue-900 font-bold">Full-Service Real Estate Management in New Jersey</h1>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 border-gray-200 border-y-2 max-w-[500px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <p className="text-xl text-blue-950 text-left leading-loose">
        TPG Management offers full-service property management in NJ, tailored to meet the needs of investors, landlords, and homeowners. Our real estate management services in New Jersey cover leasing, maintenance, tenant relations, rent collection, and compliance — all under one roof. We bring hands-on experience and a proactive approach to managing residential and mixed-use properties of all sizes. Whether you own a single unit or a full portfolio, our team delivers expert guidance and day-to-day support to protect and grow your investment. With TPG, you get real estate management backed by accountability, transparency, and results. </p>
      </div>
      <RentalCTAAbout />
    </main>
  );
}
