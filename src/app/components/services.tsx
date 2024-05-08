import Image from "next/image";
import { plusJakartaSans } from "./fonts";
import Link from "next/link";
import ServiceGrid from "./serviceGrid";
import Subservices from "./subservices";

export default function Services() {
  return (
    <section
      className={`flex flex-col items-center justify-center gap-4 text-center`}
    >
      <div className=" py-4 w-screen bg-blue-900 text-white">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          What we offer
        </h1>
      </div>
      <p className="text-sm lg:text-lg max-w-[60%]">
        Unlock the true potential of your investment property with our expert
        property management services, providing peace of mind, optimal returns,
        and hassle-free ownership.
      </p>
      <ServiceGrid />
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Subservices />
      <div className="m-0 mx-auto">
        <div className="flex flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 mt-4 w-screen p-4 bg-slate-300 h-[300px]">
          <Link href={"/contact"}>
            <button className="bg-blue-900 text-white p-4 px-8 self-end rounded-lg transition-all hover:bg-blue-700">
              Get Started
            </button>
          </Link>
          <h1 className=" text-2xl sm:text-4xl font-bold max-w-[250px] text-wrap text-left">
            Property Management Made Seemless
          </h1>
        </div>
      </div>
    </section>
  );
}
