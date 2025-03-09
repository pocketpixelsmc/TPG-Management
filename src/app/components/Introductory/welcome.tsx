"use client"
import Header from "../ui/Header";
import Button from "../ui/Button";
import Link from "next/link";

export default function Welcome() {
  return (
    <section 
      className="relative w-screen p-16 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: 'url(/introImg.png)',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-gray-200/10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center z-10 p-4">
        <Header 
          variant="extraBig"
          className="text-[#003474]"
        >
          Reliable Property Management in New Jersey
        </Header>

        <p className="text-xl md:text-2xl text-black font-semibold mb-12">
          Single-Family, Condos, Multi-Family, and Commercial Properties
        </p>

        <Link href="/contact">
          <Button 
            className="px-6 py-4 sm:px-10 sm:py-6 text-lg sm:text-2xl mx-4"
          >
            GET A FREE PROPERTY ANALYSIS
          </Button>
        </Link>
      </div>
    </section>
  );
}

