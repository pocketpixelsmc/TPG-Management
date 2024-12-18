import Link from "next/link";
import WhatWeDo from "./whatWeDo";

export default function Introduction() {
  return (
    <section className={`max-w-[1300px]`}>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <WhatWeDo />
          <Link href={"/contact"}>
            <button className="bg-blue-900 text-white p-4 px-8 self-end rounded-lg transition-all hover:bg-blue-700">
              Discord Stress-Free Management Today!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
