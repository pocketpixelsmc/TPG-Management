import { Card } from "@/components/ui/card";
import { SquareArrowUpRight } from "lucide-react";
import OwnerAddons from "../components/addons/ownerAddons";
import ownerRedirLinks from "@/data/ownerRedirLinks.json";
import Header from "../components/ui/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <Header>Owner&apos;s Resources</Header>
      <div className="w-fit p-8">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {ownerRedirLinks.redirLinks.map((link) => (
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
      <Header variant="blue">Additional Owner Benefits</Header>
      <OwnerAddons />
    </main>
  );
}
