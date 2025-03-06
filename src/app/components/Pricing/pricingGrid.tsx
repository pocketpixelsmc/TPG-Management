import feesData from "@/data/fees.json";
import servicesData from "@/data/pricingServices.json";
import TopLeftSection from "./PricingInfoGrid/TopLeftSection";
import TopRightSection from "./PricingInfoGrid/TopRightSection";
import BottomLeftSection from "./PricingInfoGrid/BottomLeftSection";
import BottomRightSection from "./PricingInfoGrid/BottomRightSection";

export default function PricingGrid() {
  return (
    <div className="flex flex-wrap">
      <TopLeftSection fees={feesData.fees} />
      <TopRightSection downloads={feesData.downloads} />
      <BottomLeftSection />
      <BottomRightSection services={servicesData.services} />
    </div>
  );
}
