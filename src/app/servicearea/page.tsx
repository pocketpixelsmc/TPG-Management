import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import ShortEmailForm from "../components/Forms/shortForm"; // Import the form
import hoaData from "../../data/hoa.json";
import Image from "next/image";
import { LocateIcon } from "lucide-react";

export const metadata: Metadata = {
  title: 'Property Management Areas we serve in New Jersey',
  description: 'Explore the locations we serve across New Jersey and New York. From Middlesex to Hudson County, TPG Management provides full-service property management with local expertise and fast, reliable support.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4 pb-0">
      {/* Multifamily Features Section */}
      <section className="max-w-6xl mx-auto pb-12 pt-4 px-4">
        <h2 className="text-3xl font-bold text-center text-[#003474] mb-8">
          What areas we service in New Jersey
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-12">
            {/* Essex County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Essex County</h3>
            </div>

            {/* Hudson County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Hudson County</h3>
            </div>

            {/* Union County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Union County</h3>
            </div>

            {/* Middlesex County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Middlesex County</h3>
            </div>

            {/* Monmouth County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Monmouth County</h3>
            </div>

            {/* Somerset County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Somerset County</h3>
            </div>
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
