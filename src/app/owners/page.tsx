import { title } from "process";
import RentalCTA from "../components/rentalCTA";
import ServicesSection from "../components/servicesSection";
import ValuesSection from "../components/valuesSection";
import { Card } from "@/components/ui/card";
import { SquareArrowUpRight } from "lucide-react";
import OwnerAddons from "../components/ownerAddons";

const redirLink = [
  { title: "Owners Portal", link: "https://tpgcompanies.managebuilding.com/manager" },
  { title: "Property Intake Form", link: "https://tpgmanagement.net/intake" },
  { title: "Owner ACH Form", link: "https://ach.tpgcompanies.net/" },
];
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <h1 className="text-5xl text-blue-900 text-center font-bold">Owner&apos;s Resources</h1>
      {/* Top Right Section */}
      <div className="w-fit p-8">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {redirLink.map((link) => (
            <a href={link.link} target="_blank" rel="noreferrer" key={link.title}>
              <Card
                key={link.title}
                className="w-[200px] h-[200px] p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <SquareArrowUpRight className="w-12 h-12 text-red-500 mb-2" />
                <p className="text-center text-sm font-medium">{link.title}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-blue-900 text-white py-8 w-[80%] text-center">Additional Owner Benefits</h2>
      <OwnerAddons />
    </main>
  );
}
