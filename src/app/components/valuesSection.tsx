import Image from "next/image";

export default function ValuesSection() {
  return (
    <div className="container mx-auto p-6">
      <hr className="hidden md:block w-[50%] border-1 border-slate-800 mx-auto my-8" />
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <div className="md:w-1/2 flex flex-col items-end">
          <Image src="/values/op.png" alt="Sample Owner's Portal Home Screen" width={400} height={300} className="h-auto border border-gray-300" />
          <p className="text-center text-sm mt-2 text-gray-600">Sample Owner&apos;s Portal Home Screen</p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">ONLINE PORTALS</h1>
          <p className="mb-4 text-black max-w-[75%]">Owners have access to a secure online Owner&apos;s Portal where they can:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-black max-w-[75%]">
            <li>see the current status of each property</li>
            <li>see work orders that are open or recently completed</li>
            <li>see who has paid rent or who still owes</li>
            <li>access financial reports (ie: detailed income statements, balance sheets, and rent rolls)</li>
            <li>communicate with their portfolio manager</li>
            <li>send and receive funds and much more!</li>
          </ul>
          <p className="mb-6 text-black max-w-[75%]">
            This level of access allows the owner full transparency to know exactly what is going on with their property at all times.
          </p>
          <p className="mb-4 text-black max-w-[75%]">Residents have access to a secure online Resident Portal where they can:</p>
          <ul className="list-disc pl-6 space-y-2 text-black max-w-[75%]">
            <li>submit work orders</li>
            <li>pay online</li>
            <li>view their lease</li>
            <li>track their communication with TPG Management</li>
          </ul>
        </div>
      </div>
      <hr className="hidden md:block w-[50%] border-1 border-slate-800 mx-auto my-8" />
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <div className="md:w-1/2 flex flex-col items-end">
          <Image src="/values/ac.png" alt="Sample Screening Process" width={400} height={300} className="h-auto border border-gray-300" />
          <p className="text-center text-sm mt-2 text-gray-600">Sample Screening Process</p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">APPLICANT SCREENING</h1>
          <p className="mb-4 text-black max-w-[75%]">
            One of the most challenging portions of property management is selecting a qualified applicant to rent your home. With our pre-screening
            and rigorous application process, applicants are continually scored allowing only the most qualified applicants to be approved for our
            properties. Since having implemented these processes we have seen a tremendous reduction in delinquency and increase in resident
            longevity.
          </p>
          <p className="mb-4 text-black max-w-[75%]">
            TPG Management looks at multiple factors before approving an applicant, some of which include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-black max-w-[75%]">
            <li>credit and criminal background checks</li>
            <li>eviction history</li>
            <li>landlord verifications</li>
            <li>income verifications and more.</li>
          </ul>
          <p className="mb-6 text-black max-w-[75%]">
            TPG Management complies with all Fair Housing practices and procedures in their screening efforts.
          </p>
        </div>
      </div>
      <hr className="hidden md:block w-[50%] border-1 border-slate-800 mx-auto my-8" />
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <div className="md:w-1/2 flex flex-col items-end">
          <Image src="/values/pm.png" alt="Project Management" width={400} height={300} className="h-auto border border-gray-300" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">MAINTENANCE RESPONSE</h1>
          <p className="mb-4 text-black max-w-[75%]">
            Handling maintenance efficiently is a key part of successful property management. At TPG Management, we have a streamlined process to
            ensure repairs are addressed quickly and tenants remain informed every step of the way. Our approach minimizes downtime and ensures
            resident satisfaction.
          </p>
          <p className="mb-4 text-black max-w-[75%]">
            We begin by receiving maintenance requests through our online portal or via phone for emergencies. Our team troubleshoots with the tenant
            to identify the issue, and when necessary, we promptly schedule a qualified technician or vendor to resolve the problem. Throughout the
            process, we keep tenants updated on the status of their request.
          </p>
          <p className="mb-4 text-black max-w-[75%]">
            Once the repair is complete, we follow up with the tenant to confirm the issue has been resolved to their satisfaction. This proactive
            approach ensures maintenance is handled professionally, efficiently, and with minimal disruption.
          </p>
        </div>
      </div>
    </div>
  );
}
