import ServiceGrid from "./Services/serviceGrid";
import Subservices from "./Types/subservices";

import Header from "../../ui/Header";
import H2 from "../../ui/H2";
export default function Services() {
  return (
    <section className={`flex flex-col items-center justify-center gap-4 text-center`}>
      <H2 variant="blue">WHAT WE OFFER</H2>
      <ServiceGrid />
      <H2 className="border-t border-gray-200 my-4">Solutions for all types of rental properties</H2>
      <Subservices />
    </section>
  );
}
