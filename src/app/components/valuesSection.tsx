import OptimizedImage from "@/components/ui/OptimizedImage";

export default function ValuesSection() {
  return (
    <section 
      aria-labelledby="values-heading" 
      className="container mx-auto p-6"
    >
      <h2 id="values-heading" className="sr-only">Our Values and Features</h2>

      <article 
        aria-labelledby="portals-heading"
        className="mt-12 border-t border-gray-200 p-6"
      >
        <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
          <figure className="md:w-1/2 flex flex-col items-end">
            <OptimizedImage 
              src="/values/op.png" 
              alt="Sample Owner's Portal Interface" 
              width={400} 
              height={300} 
              className="h-auto border border-gray-300 rounded-lg shadow-sm" 
            />
            <figcaption className="text-center text-sm mt-2 text-blue-950">
              Sample Owner&apos;s Portal Home Screen
            </figcaption>
          </figure>
          <div className="md:w-1/2">
            <h3 id="portals-heading" className="text-2xl font-bold text-blue-900 mb-4">ONLINE PORTALS</h3>
            <p className="mb-4 text-blue-950">Owners have access to a secure online Owner&apos;s Portal where they can:</p>
            <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 mb-6">
              <ul className="list-disc pl-5 space-y-2 text-blue-950" role="list">
                <li>see the current status of each property</li>
                <li>see work orders that are open or recently completed</li>
                <li>see who has paid rent or who still owes</li>
                <li>access financial reports (ie: detailed income statements, balance sheets, and rent rolls)</li>
                <li>communicate with their portfolio manager</li>
                <li>send and receive funds and much more!</li>
              </ul>
            </div>
            <p className="mb-4 text-blue-950">
              This level of access allows the owner full transparency to know exactly what is going on with their property at all times.
            </p>
            <p className="mb-4 text-blue-950">Residents have access to a secure online Resident Portal where they can:</p>
            <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
              <ul className="list-disc pl-5 space-y-2 text-blue-950" role="list">
                <li>submit work orders</li>
                <li>pay online</li>
                <li>view their lease</li>
                <li>track their communication with TPG Management</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <article 
        aria-labelledby="screening-heading"
        className="mt-12 border-t border-gray-200 p-6"
      >
        <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
          <figure className="md:w-1/2 flex flex-col items-end">
            <OptimizedImage 
              src="/values/ac.png" 
              alt="Applicant Screening Process Visualization" 
              width={400} 
              height={300} 
              className="h-auto border border-gray-300 rounded-lg shadow-sm" 
            />
            <figcaption className="text-center text-sm mt-2 text-blue-950">
              Sample Screening Process
            </figcaption>
          </figure>
          <div className="md:w-1/2">
            <h3 id="screening-heading" className="text-2xl font-bold text-blue-900 mb-4">APPLICANT SCREENING</h3>
            <p className="mb-4 text-blue-950">
              Our rigorous screening process ensures only qualified applicants are approved, leading to reduced delinquency and increased resident longevity.
            </p>
            <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
              <ul className="list-disc pl-5 space-y-2 text-blue-950" role="list">
                <li>Credit and criminal background checks</li>
                <li>Eviction history verification</li>
                <li>Previous landlord references</li>
                <li>Income and employment verification</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <article 
        aria-labelledby="maintenance-heading"
        className="mt-12 border-t border-gray-200 p-6"
      >
        <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
          <figure className="md:w-1/2 flex flex-col items-end">
            <OptimizedImage 
              src="/values/pm.png" 
              alt="Maintenance Management System Interface" 
              width={400} 
              height={300} 
              className="h-auto border border-gray-300 rounded-lg shadow-sm" 
            />
          </figure>
          <div className="md:w-1/2">
            <h3 id="maintenance-heading" className="text-2xl font-bold text-blue-900 mb-4">MAINTENANCE RESPONSE</h3>
            <p className="mb-4 text-blue-950 max-w-[75%]">
              With full-time, in-house maintenance technicians and dedicated support, we resolve issues quickly, maintain quality control, and help save owners money by avoiding third-party markups.
            </p>
            <div className="space-y-4">
              <p className="text-blue-950">Key features of our maintenance system:</p>
              <ul className="list-disc pl-5 space-y-2 text-blue-950" role="list">
                <li>Full Time In-house Maintenance Technicians</li>
                <li>24/7 emergency maintenance support</li>
                <li>Online maintenance request submission</li>
                <li>Real-time status updates</li>
                <li>Quality assurance follow-ups</li>
                <li>Preventive maintenance programs</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
