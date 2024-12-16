import Link from "next/link";

export default function RentalCTA() {
    return (
      <div className="bg-[#14294F] py-16 text-center w-screen">
        <p className="text-white text-2xl mb-8 mx-auto px-4 w-[75%]">
          Reach out to us any time to discuss your rental investment management needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white px-8 py-3 text-[#14294F] font-medium hover:bg-opacity-90 transition-colors"
        >
          Contact Us for a Quote
        </Link>
      </div>
    )
  }
  
  