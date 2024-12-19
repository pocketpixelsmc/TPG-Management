import Link from "next/link";
import ServiceGrid from "./serviceGrid";
import Subservices from "./subservices";
import Testimonial from "./testimonial";

export default function Services() {
  return (
    <section className={`flex flex-col items-center justify-center gap-4 text-center`}>
      <div className="bg-blue-900 py-8 px-4 w-[80%] mt-8">
        <h1 className="text-white text-4xl text-center font-bold">WHAT WE OFFER</h1>
      </div>
      <p className="text-sm lg:text-lg max-w-[60%] text-left leading-8">
        Unlock the true potential of your investment property with our expert property management services, providing peace of mind, optimal returns,
        and hassle-free ownership.
      </p>
      <ServiceGrid />
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-4 text-wrap">Solutions for all types of rental properties</h1>
      <Subservices />
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Testimonial />
      <div className="m-0 mx-auto">
        <div className="bg-blue-900 py-16 text-center w-screen">
          <p className="text-white text-2xl mb-8 mx-auto px-4 w-[75%]">&quot;Property Management Made Seemless&quot;</p>
          <Link
            href="/contact"
            className="inline-block bg-white px-8 py-3 text-[#14294F] font-medium hover:bg-opacity-90 transition-colors rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
