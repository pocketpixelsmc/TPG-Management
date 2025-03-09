import ServiceGrid from "./Services/serviceGrid";
import Subservices from "./Types/subservices";

import Header from "../../ui/Header";
export default function Services() {
  return (
    <section className={`flex flex-col items-center justify-center gap-4 text-center`}>
      <Header variant="blue">WHAT WE OFFER</Header>
      <ServiceGrid />
      <Header className="border-t border-gray-200 my-4">Solutions for all types of rental properties</Header>
      <Subservices />
    </section>
  );
}
