import Link from "next/link";
import WhatWeDo from "./whatWeDo";
import Button from "../ui/Button";

export default function Introduction() {
  return (
    <section className={`max-w-[1300px]`}>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <WhatWeDo />
          <Link href={"/contact"}>
            <Button className="px-6 py-4 sm:px-10 sm:py-6 text-lg sm:text-2xl mx-4">
              Discover Stress-Free Management Today!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
