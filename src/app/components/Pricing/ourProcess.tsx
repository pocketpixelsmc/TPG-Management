import OptimizedImage from "@/components/ui/OptimizedImage";
import Header from "../ui/Header";
import WhatSeparatesCard from "./WhatSeparatesCard";
import { whatSeparates } from "@/data/whatSeparates.json";
import H2 from "../ui/H2";

export default function OurProcess() {
  return (
    <section 
      aria-labelledby="process-heading" 
      className="flex flex-col items-center justify-center gap-4 mb-4 text-center w-full"
    >
      <H2
        variant="blue" 
        id="process-heading"
      >
        OUR PROCESS
      </H2>

      <figure className="max-w-6xl mx-auto px-4 py-12">
        <OptimizedImage 
          src="/process.png" 
          alt="TPG Management's property management process flowchart showing steps from initial contact to ongoing management" 
          width={1500} 
          height={100}
          className="rounded-lg shadow-md"
          priority
        />
        <figcaption className="sr-only">
          Detailed flowchart showing our streamlined property management process from start to finish
        </figcaption>
      </figure>

      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-blue-900 text-center">WHAT SEPARATES US?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whatSeparates.map((item, index) => (
            <WhatSeparatesCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
