import H2 from "../../ui/H2";
import Subservices from "./Types/subservices";
import WhatWeOffer from "./WhatWeOffer";
import servicesData from "@/data/wwf.json";

export default function Services() {
  return (
    <section>
      <WhatWeOffer services={servicesData} />
      <H2 className="border-t border-gray-200 my-8">Solutions for all types of rental properties</H2>
      <Subservices />
    </section>
  );
}
