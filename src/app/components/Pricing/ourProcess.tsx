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
        <h3 className="text-2xl font-semibold text-blue-900 text-center">WHAT SEPARATES US?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-3">WE ARE OWNERS/INVESTORS</h4>
            <p className="text-gray-700">We manage properties with an owner&apos;s mindset because we own and invest in real estate ourselves.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-3">PROPERTY MANAGEMENT IS ALL WE DO</h4>
            <p className="text-gray-700">No side hustles, no distractions—this is our full-time job, and we do it with precision and expertise.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-3">ALIGNED MANAGEMENT FEES</h4>
            <p className="text-gray-700">We only make money when you do—our success is directly tied to your property&apos;s performance.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-3">VOLUME/PREFERRED VENDOR PRICING</h4>
            <p className="text-gray-700">Our size and connections mean you get priority service and discounted rates, keeping costs low and value high.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
