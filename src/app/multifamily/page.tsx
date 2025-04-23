import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import ShortEmailForm from "../components/Forms/shortForm"; // Import the form
import multifamilyData from "../../data/multifamily.json";

export const metadata: Metadata = {
  title: 'Multifamily and Investment Property Management',
  description: 'Transparent pricing and fee structure for our property management services. View our competitive rates and comprehensive management packages.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 p-4 pb-0">
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

          <p className="text-xl md:text-3xl text-[#003474] font-bold mb-12">
            Built by Investors. Powered by Experience. Committed to Residents.
          </p>

          <Link href="/contact">
            <Button
              className="px-6 py-4 sm:px-10 sm:py-6 text-lg sm:text-2xl mx-4"
            >
              Get Started Property Owners
            </Button>
          </Link>
        </div>
      </section>

      {/* Multifamily Features Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-[#003474] mb-8">
          Why Choose TPG Management for Multifamily Properties?
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {multifamilyData.multifamily.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-[#003474] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Short Form Section */}
          <div className="flex items-center justify-center">
            <ShortEmailForm />
          </div>
        </div>
      </section>
    </main>
  );
}
