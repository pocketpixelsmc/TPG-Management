import Image from "next/image";
import EmailForm from "../components/form";
import Testimonial from "../components/testimonial";
import WhatWeDo from "../components/whatWeDo";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable Property Management for Multi-Family, Single-Family, and Commercial Properties in New Jersey!",
  description:
    "TPG Management makes property management simple with customized services for all property types in NJ. From tenant placement to maintenance, we’ve got you covered.",
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">
            Reliable Property Management for Multi-Family, Single-Family, and Commercial Properties in New Jersey!
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md h-full">
            <div className="space-y-8 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <Image src="/pm/rentCollection.svg" alt="Rent Collection" width={75} height={75} />
                <div>
                  <p className="text-gray-700 text-lg font-bold">Hassle-Free Rent Collection – Never chase late payments again.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image src="/pm/reliableMaintenance.svg" alt="Maintenance" width={75} height={75} />
                <div>
                  <p className="text-gray-700 text-lg font-bold">
                    Reliable Maintenance – Fast and efficient repairs to keep tenants happy.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image src="/pm/maxIncome.png" alt="Maximize Income" width={75} height={75} />
                <div>
                  <p className="text-gray-700 text-lg font-bold">Maximize Property Income – Strategic management to boost your ROI.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image src="/pm/fullManagement.png" alt="Lease Management" width={75} height={75} />
                <div>
                  <p className="text-gray-700 text-lg font-bold">
                    Full Lease and Rental Management – Tenant screening, lease agreements, and renewals.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image src="/pm/transparentFees.svg" alt="Transparent Pricing" width={75} height={75} />
                <div>
                  <p className="text-gray-700 text-lg font-bold">
                    Transparent Pricing – No hidden fees, just straightforward management.
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <button className="bg-blue-900 text-white px-8 py-4 hover:bg-blue-700 rounded-md w-full">
                  <Link href="/contact">Get Started</Link>
                </button>
              </div>
            </div>
          </div>

          <EmailForm />
        </div>
      </div>
      <WhatWeDo />
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Testimonial />
    </main>
  )
}

