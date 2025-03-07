"use client"
import Header from "../ui/Header";
import Button from "../ui/Button";
import Link from "next/link";

export default function Welcome() {
  return (
    <section 
      className="relative w-screen min-h-[80vh] flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: 'url(/introImg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 ">
        <Header 
          variant="noBg"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-950"
        >
          Reliable Property Management in New Jersey
        </Header>

        <p className="text-xl md:text-2xl text-black font-semibold mb-12">
          Single-Family, Condos, Multi-Family, and Commercial Properties
        </p>

        <Link href="/contact">
          <Button 
            className="px-8 py-4"
          >
            GET A FREE PROPERTY ANALYSIS
          </Button>
        </Link>
      </div>
    </section>
  );
}

