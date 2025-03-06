import Link from "next/link";
import Button from "../ui/Button";
export default function RentalCTAAbout() {
    return (
      <div className="bg-blue-900 py-16 text-center w-screen">
        <p className="text-white text-2xl mb-8 mx-auto px-4 w-[75%]">
          Let&apos;s discuss your rental management needs!
        </p>
        <Link
          href="/contact"
        >
          <Button>Contact Us Today</Button>
        </Link>
      </div>
    )
  }
  
  
