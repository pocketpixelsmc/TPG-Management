import OptimizedImage from "@/components/ui/OptimizedImage";
import Header from "../ui/Header";

export default function OurProcess() {
  return (
    <section 
      aria-labelledby="process-heading" 
      className="flex flex-col items-center justify-center gap-4 text-center w-full"
    >
      <Header 
        variant="blue" 
        id="process-heading"
      >
        OUR PROCESS
      </Header>

      <figure className="max-w-6xl mx-auto px-4 py-12">
        <OptimizedImage 
          src="/process.png" 
          alt="TPG Management's property management process flowchart showing steps from initial contact to ongoing management" 
          width={1600} 
          height={100}
          className="rounded-lg shadow-md"
          priority
        />
        <figcaption className="sr-only">
          Detailed flowchart showing our streamlined property management process from start to finish
        </figcaption>
      </figure>

      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Streamlined Management Process</h3>
        <ul className="text-left space-y-4 text-blue-950" role="list">
          <li className="flex items-start gap-2">
            <span className="font-bold min-w-[100px]">Initial Contact:</span>
            <span>We begin with understanding your property needs and management goals</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold min-w-[100px]">Assessment:</span>
            <span>Thorough evaluation of your property and market analysis</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold min-w-[100px]">Setup:</span>
            <span>Quick and efficient onboarding process with digital documentation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold min-w-[100px]">Management:</span>
            <span>Ongoing professional property management with regular updates and reporting</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
