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
            <Button>
              Discover Stress-Free Management Today!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
