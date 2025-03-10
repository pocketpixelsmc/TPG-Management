import Image from "next/image";
import EmailForm from "../components/Forms/form";
import Testimonial from "../components/testimonial";
import WhatWeDo from "../components/Introductory/whatWeDo";
import pmData from "@/data/pmPageFeatures.json";
import { Metadata } from "next";
import Button from "../components/ui/Button";
import Welcome from "../components/Introductory/welcome";
import ShortForm from "../components/Forms/shortForm";
export const metadata: Metadata = {
  title: "Reliable Property Management for Multi-Family, Single-Family, and Commercial Properties in New Jersey!",
  description:
    "TPG Management makes property management simple with customized services for all property types in NJ. From tenant placement to maintenance, we've got you covered.",
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 p-4 pb-0">
      <Welcome />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-xl shadow-md h-full">
            <div className="space-y-8 h-full flex flex-col justify-between">
              {pmData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width={75}
                    height={75}
                  />
                  <div>
                    <p className="text-gray-700 text-lg font-bold">{feature.title}</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-center gap-4">
                <Button variant="fullWidth">
                  <a href={`tel:${pmData.phoneNumber}`}>Call Now! {pmData.phoneNumber}</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl text-blue-900 font-bold">
              {pmData.contactHeading}
            </h1>
            <ShortForm />
          </div>
        </div>
      </div>
      <WhatWeDo />
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Testimonial />
    </main>
  )
}

