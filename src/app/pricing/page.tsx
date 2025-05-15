import { Metadata } from "next";
import Link from "next/link";
import OurProcess from "../components/Pricing/ourProcess";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import pricingServicesData from "@/data/pricingServices.json";
import Testimonial from "../components/testimonial";

export const metadata: Metadata = {
  title: 'Management You Can Trust. Pricing You Can Understand.',
  description: 'Experience full-service management, responsive maintenance, and expert leasing — all at fair, predictable rates.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-4">
      <div className="flex flex-col items-center">
        <section className="relative p-16 flex flex-col items-center justify-center text-center w-screen"
          style={{
            backgroundImage: 'url(/pricingHeader.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <Header>Management You Can Trust. Pricing You Can Understand.</Header>
          <Header variant="subHeader">Experience full-service management, responsive maintenance, and expert leasing — all at fair, predictable rates.</Header>
        </section>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 m-0 w-full mx-2 lg:m-0 max-w-6xl">
        <div className="hidden lg:block"></div>
        <div className="bg-blue-900 text-white p-4 hidden lg:flex items-center justify-center font-extrabold text-2xl">
          Full Service Management & Leasing
        </div>
        <div className="bg-blue-950 text-white p-4 hidden lg:flex items-center justify-center font-extrabold text-2xl">
          Industry Averages
        </div>
        {pricingServicesData.map((service, index) => (
          <>
            {service.title !== "Leasing Fees" && <div className="bg-red-900 px-4 lg:bg-blue-900 text-white py-6 flex items-start text-left justify-start font-xl lg:col-span-3">
              {service.title}
            </div>}
            {service.items.map((item, itemIndex) => (
              <>
                <div className="bg-blue-900 lg:border-t-[1px] lg:border-l-[1px] lg:border-gray-600 lg:bg-gray-100 text-white lg:text-black py-6 flex items-center justify-center lg:justify-start px-4 font-xl" key={itemIndex}>
                  {item.name}
                </div>
                <div className=" lg:border-t-[1px] lg:border-l-[1px] lg:border-gray-600 bg-gray-200 text-black py-6 flex items-center justify-center font-xl text-center px-2" key={itemIndex}>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.ourProcess }}
                  ></span>
                </div>
                <div className="hidden lg:border-t-[1px] lg:border-l-[1px] lg:border-gray-600 lg:bg-gray-300 lg:text-black text-white py-6 lg:flex items-center justify-center font-xl text-center px-2" key={itemIndex}>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.industryAverage }}
                  ></span>
                </div>
              </>
            ))}
          </>
        ))}
        <Button className="my-4">
          <Link href="/contact">
            Get Started
          </Link>
        </Button>
      </section>
    </main>
  );
}
