import OptimizedImage from "@/components/ui/OptimizedImage";
import Header from "../ui/Header";

export default function OurProcess() {
  return (
    <section 
      aria-labelledby="process-heading" 
      className="flex flex-col items-center justify-center gap-4 mb-4 text-center w-full"
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
        <h3 className="text-xl font-semibold text-blue-900 mb-4">WHAT SEPERATES US?</h3>
        <ul className="text-left space-y-4 text-blue-950" role="list">
          <li className="flex items-start gap-2">
            <span className="font-bold min-w-[100px]">WE ARE OWNERS/INVESTORS:</span>
            <span>We manage properties with an owner’s mindset because we own and invest in real estate ourselves.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold min-w-[100px]">PROPERTY MANAGEMENT IS ALL WE DO:</span>
            <span>No side hustles, no distractions—this is our full-time job, and we do it with precision and expertise.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold min-w-[100px]">ALIGNED MANAGEMENT FEES:</span>
            <span>We only make money when you do—our success is directly tied to your property’s performance.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold min-w-[100px]">VOLUME/PREFERRED VENDOR PRICING:</span>
            <span>Our size and connections mean you get priority service and discounted rates, keeping costs low and value high.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
