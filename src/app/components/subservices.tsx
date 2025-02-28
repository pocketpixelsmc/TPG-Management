import Image from "next/image";
import Link from "next/link";

export default function Subservices() {
  return (
    <div className="max-w-[1080px] m-0 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border-solid border-2 border-blue-900 rounded-lg grid grid-rows-3r place-items-center max-w-[300px] text-left pb-4 gap-2">
          <div className="self-start">
            <Image src="/subservice/sfh.png" alt="Single-Family Homes" width={300} height={200} className="rounded-t-md h-[195px]" />
          </div>
          <div className="p-4 pb-2 flex flex-col text-left justify-around gap-4 items-start self-start">
            <h2 className="text-xl font-bold">Single-Family Homes</h2>
            <p className="text-sm leading-7">Professional Property Managers that allow you to enjoy being a property owner, not a landlord.</p>
          </div>
          <Link href={"/contact/sfh"} className="self-end bg-blue-900 text-white p-4 px-6 rounded-lg transition-all hover:bg-blue-700">
            <button>Contact Us</button>
          </Link>
        </div>
        <div className="border-solid border-2 border-blue-900 rounded-lg grid grid-rows-3r place-items-center max-w-[300px] text-left pb-4 gap-2">
          <div className="self-start">
            <Image src="/subservice/mfh.png" alt="Multi-Family Houses" width={300} height={200} className="rounded-t-md h-[195px]" />
          </div>
          <div className="p-4 pb-2 flex flex-col text-left justify-around gap-4 items-start self-start">
            <h2 className="text-xl font-bold">Multi-Family Houses & Apartment Buildings</h2>
            <p className="text-sm leading-7">A complete team to handle the day to day operations of your multi family and apartment building real estate investments.</p>
          </div>
          <Link href={"/contact/mf"} className="bg-blue-900 text-white p-4 px-6 self-end rounded-lg transition-all hover:bg-blue-700">
            <button>Contact Us</button>
          </Link>
        </div>
        <div className="border-solid border-2 border-blue-900 rounded-lg grid grid-rows-3r place-items-center max-w-[300px] text-left pb-4 gap-2">
          <div className="self-start">
            <Image src="/subservice/apt.png" alt="Apartment Buildings" width={300} height={200} className="rounded-t-md h-[195px]" />
          </div>
          <div className="p-4 pb-2 flex flex-col text-left justify-around gap-4 items-start self-start">
            <h2 className="text-xl font-bold">Commercial Properties</h2>
            <p className="text-sm leading-7">A management team specialized in handling Retail, Office, and Mixed Use Properties.</p>
          </div>
          <Link href={"/contact/co"} className="bg-blue-900 text-white p-4 px-6 self-end rounded-lg transition-all hover:bg-blue-700">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
