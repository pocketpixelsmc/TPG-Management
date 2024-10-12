import Link from "next/link";
import { lilita_one, plusJakartaSans } from "./fonts";

export default function Introduction() {
  return (
    <section className={`mt-4 sm:mt-8 max-w-[1300px]`}>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-loose`}>
            Comprehensive Property Management Solutions
          </h1>
          <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-loose`}>
            Tailored for Your Success
          </h1>
          <p className="text-xl leading-8">
            At TPG Management, we cover every detail of managing your rental property, so you don’t have to. From finding high-quality tenants to
            handling 24/7 maintenance and compliance, we ensure your property is managed efficiently and profitably.
          </p>
          <Link href={"/contact"}>
            <button className="bg-blue-900 text-white p-4 px-8 self-end rounded-lg transition-all hover:bg-blue-700">
              Discover Stress-Free Management
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
