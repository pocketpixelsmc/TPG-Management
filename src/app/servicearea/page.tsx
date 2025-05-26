import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import ShortEmailForm from "../components/Forms/shortForm"; // Import the form
import hoaData from "../../data/hoa.json";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Property Management Areas we serve in New Jersey',
  description: 'Explore the locations we serve across New Jersey and New York. From Middlesex to Hudson County, TPG Management provides full-service property management with local expertise and fast, reliable support.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4 pb-0">
      <section
        className="relative w-screen p-16 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: 'url(/servicearea.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-gray-200/10 z-[-10]"
          aria-hidden="true"
        />

        <div className="flex gap-1 flex-col items-center">
          <Header>AREAS WE SERVICE IN NEW JERSEY</Header>
          <h4 className="mb-4 text-blue-900 text-xl font-bold" >Dedicated Property Management Company serving Essex, Hudson, Union, Middlesex, Monmouth, and Somerset County</h4>
          <div className="flex flex-col sm:flex-row gap-4">
          </div>
        </div>
      </section>

      {/* Multifamily Features Section */}
      <section className="max-w-6xl mx-auto pb-12 pt-4 px-4">
        <h2 className="text-3xl font-bold text-center text-[#003474] mb-8">
          What areas we service in New Jersey
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hoaData.hoa.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <h3 className="text-2xl font-semibold text-[#003474]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Short Form Section */}
          <div className="flex flex-col items-center justify-center mt-2">
            <h1 className="text-blue-900 font-bold leading-tight text-xl text-wrap mb-4">
              Get Property Management Services You Can Trust
            </h1>
            <ShortEmailForm />
          </div>
        </div>
      </section>
    </main>
  );
}
