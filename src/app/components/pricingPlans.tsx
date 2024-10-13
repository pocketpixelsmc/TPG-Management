import Image from "next/image";
import Link from "next/link";
import { pricingData } from "./pricingData.js";

export default function PricingPlan() {
  return (
    <div className="m-0 mx-auto">
      <div className="grid grid-cols-3 place-items-center text-center">
        <div></div>
        <div className="flex flex-row items-center justify-around gap-8 p-6 bg-blue-900 text-white col-span-2 w-full">
          <h1 className="text-lg font-bold">Houses, Condos & 2-4 units</h1>
          <h1 className="text-lg font-bold">Multifamily (5-15 units)</h1>
        </div>
        <div></div>
        <div className="flex flex-row items-center justify-around gap-8 p-6 text-black col-span-2 w-full">
          <div className="flex flex-col flex-wrap items-center justify-center">
            <h1 className="text-2xl">8%</h1>
            <p className="text-base max-w-[200px]">Monthly management fee Min $189 per unit/mo</p>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center">
            <h1 className="text-2xl">6%</h1>
            <p className="text-base max-w-[200px]">Monthly management fee Min $150 per unit/mo</p>
          </div>
        </div>
        {pricingData.map((data, index) => {
          return (
            <>
              <p
                key={index}
                className="text-base max-w-[300px] text-left place-self-start p-4 relative"
              >
                {data}
              </p>
              <h1 className="text-center">✓</h1>
              <h1>✓</h1>
            </>
          );
        })}
        <div></div>
        <div className="flex flex-row items-center justify-around w-full gap-8 p-6 text-black col-span-2">
          <div className="flex flex-col flex-wrap items-center justify-center">
            <p className="text-base max-w-[200px]">$595 Leasing fee</p>
            <p className="text-base max-w-[200px]">$150 annual inspection</p>
            <p className="text-base max-w-[200px]">$195 Lease Renewal Fee</p>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center">
            <p className="text-base max-w-[200px]">$595 Leasing fee</p>
            <p className="text-base max-w-[200px]">$150 annual inspection</p>
            <p className="text-base max-w-[200px]">$99 Lease Renewal Fee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

