import { Card } from "@/components/ui/card";
import { SquareArrowUpRight } from "lucide-react";
import OwnerAddons from "../components/addons/ownerAddons";
import ownerRedirLinks from "@/data/ownerRedirLinks.json";
import Header from "../components/ui/Header";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Property Owners',
  description: 'Maximize your rental property investment with TPG Management. We offer comprehensive property management services, tenant screening, maintenance coordination, and financial reporting.',
  keywords: [
    'property owner services',
    'rental property management',
    'landlord services',
    'property investment management',
    'New Jersey property owners',
    'rental property maintenance',
    'tenant screening services',
    'property management solutions'
  ],
}

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
