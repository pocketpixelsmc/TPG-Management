import { pricingData } from "./pricingData.js";

export default function PricingPlan() {
  return (
    <div className="m-0 mx-auto">
      <h1 className="text-5xl text-blue-900 font-bold text-center my-8">MANAGEMENT SERVICES INCLUDE</h1>
      <div className="flex flex-col items-start text-left">
        {pricingData.map((plan, index) => (
          <div key={index} className="p-4 flex flex-row gap-2 max-w-[400px]">
            <p className="text-blue-950 text-lg">✓</p>
            <p className="text-blue-950 underline text-lg">{plan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}