import H2 from "../../ui/H2";
import Subservices from "./Types/subservices";
import WhatWeOffer from "./WhatWeOffer";
import servicesData from "@/data/wwf.json";

export default function Services() {
  return (
    <section>
      <H2 variant="blue">WHAT WE OFFER</H2>
      <p className="text-center text-blue-950 p-4 max-w-6xl mx-auto">
        Whether you own a single-family home or a multi-unit portfolio, TPG Management provides complete solutions to protect your investment and grow your returns.
      </p>
      <WhatWeOffer services={servicesData} />
      <H2 className="border-t border-gray-200 my-8">Solutions for all types of rental properties</H2>
      <Subservices />
    </section>
  );
}
