import { pricingColumn, pricingData } from "./pricingData.js";

export default function PricingPlan() {
  return (
    <div className="m-0 mx-auto">
      <div className="hidden md:grid grid-cols-4 place-items-center text-center">
        <div></div>
        <div className="flex flex-row items-center justify-around gap-8 p-6 bg-blue-900 text-white col-span-3 w-full">
          <h1 className="text-lg font-bold">Houses, Condos & 2-4 units</h1>
          <h1 className="text-lg font-bold">Multifamily (5-15 units) & Commerical </h1>
          <h1 className="text-lg font-bold">Multifamily (20+ units)</h1>
        </div>
        <div></div>
        <div className="flex flex-row items-center justify-around gap-8 p-6 text-black col-span-3 w-full">
          <div className="flex flex-col flex-wrap items-center justify-center">
            <h1 className="text-2xl">8%</h1>
            <p className="text-base max-w-[200px]">Monthly management fee</p>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center">
            <h1 className="text-2xl">6%</h1>
            <p className="text-base max-w-[200px]">Monthly management fee</p>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center">
            <p className="text-base max-w-[200px]">Contact us for pricing</p>
          </div>
        </div>
        {pricingData.map((data, index) => {
          return (
            <>
              <p key={index} className="text-base max-w-[300px] text-left place-self-start p-4 relative">
                {data}
              </p>
              <h1 className="text-center">✓</h1>
              <h1 className="text-center">✓</h1>
              <h1 className="text-center">✓</h1>
            </>
          );
        })}
        <div></div>
        <div className="flex flex-row items-center justify-around w-full gap-8 p-6 text-black col-span-3">
        <div className="flex flex-col flex-wrap items-center justify-center">
            <p className="text-base max-w-[200px]">50% leasing fee</p>
            <p className="text-base max-w-[200px]">(6 month guarntee)</p>
            <p className="text-base max-w-[200px]">$195 renewal fee</p>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center">
            <p className="text-base max-w-[200px]">50% leasing fee</p>
            <p className="text-base max-w-[200px]">(6 month guarntee)</p>
            <p className="text-base max-w-[200px]">$195 renewal fee</p>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center">
            <p className="text-base max-w-[200px]">50% leasing fee</p>
            <p className="text-base max-w-[200px]">(6 month guarntee)</p>
            <p className="text-base max-w-[200px]">$195 renewal fee</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden gap-8 justify-center items-start text-left">
        {pricingColumn.map((column, index) => {
          return (
            <div className="flex flex-col gap-6" key={index}>
              <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
              <h1 key={index} className="text-2xl font-bold text-blue-900">
                {column.title}
              </h1>
              <p className="text-base max-w-[200px]">{column.price}</p>
              <div className="grid grid-cols-2 place-items-center">
                <h1 className="text-lg font-bold">Services</h1>
                <h1 className="text-lg font-bold">Includes</h1>
                {pricingData.map((data, index) => {
                  return (
                    <>
                      <p key={index} className="text-base max-w-[300px] text-left place-self-start p-2 relative">
                        {data}
                      </p>
                      <h1 className="text-center">✓</h1>
                    </>
                  );
                })}
              </div>
              <p className="text-base max-w-[200px]">
                Additional Fees: <br />{" "}
                {column.additional_fees.map((fee, index) => (
                  <>{fee}</>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
