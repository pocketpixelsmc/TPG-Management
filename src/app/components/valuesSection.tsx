import Image from "next/image";

export default function ValuesSection() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <hr className="hidden md:block w-[50%] border-1 border-slate-800 mx-auto my-8" />
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <div className="md:w-1/2 flex flex-col items-end">
          <Image src="/values/op.png" alt="Sample Owner's Portal Home Screen" width={400} height={300} className="h-auto border border-gray-300" />
          <p className="text-center text-sm mt-2 text-gray-600">Sample Owner&apos;s Portal Home Screen</p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-[#00437a] mb-4">ONLINE PORTALS</h1>
          <p className="mb-4 text-[#00437a] max-w-[75%]">Owners have access to a secure online Owner&apos;s Portal where they can:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[#00437a] max-w-[75%]">
            <li>see the current status of each property</li>
            <li>see work orders that are open or recently completed</li>
            <li>see who has paid rent or who still owes</li>
            <li>access financial reports (ie: detailed income statements, balance sheets, and rent rolls)</li>
            <li>communicate with their portfolio manager</li>
            <li>send and receive funds and much more!</li>
          </ul>
          <p className="mb-6 text-[#00437a] max-w-[75%]">
            This level of access allows the owner full transparency to know exactly what is going on with their property at all times.
          </p>
          <p className="mb-4 text-[#00437a] max-w-[75%]">Residents have access to a secure online Resident Portal where they can:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#00437a] max-w-[75%]">
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
          <h1 className="text-2xl font-bold text-[#00437a] mb-4">APPLICANT SCREENING</h1>
          <p className="mb-4 text-[#00437a] max-w-[75%]">
            One of the most challenging portions of property management is selecting a qualified applicant to rent your home. With our pre-screening
            and rigorous application process, applicants are continually scored allowing only the most qualified applicants to be approved for our
            properties. Since having implemented these processes we have seen a tremendous reduction in delinquency and increase in resident
            longevity.
          </p>
          <p className="mb-4 text-[#00437a] max-w-[75%]">
            TPG Management looks at multiple factors before approving an applicant, some of which include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[#00437a] max-w-[75%]">
            <li>credit and criminal background checks</li>
            <li>eviction history</li>
            <li>landlord verifications</li>
            <li>income verifications and more.</li>
          </ul>
          <p className="mb-6 text-[#00437a] max-w-[75%]">
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
          <h1 className="text-2xl font-bold text-[#00437a] mb-4">PROJECT MANAGEMENT</h1>
          <p className="mb-4 text-[#00437a] max-w-[75%]">
            With any property there comes a time when you need to do some work to it. Whether it is a new acquisition or just after a resident moves
            out, TPG Management has you covered!
          </p>
          <p className="mb-4 text-[#00437a] max-w-[75%]">
            Our project management team has renovated over 1,000 homes so they have seen it all. With painters, plumbers, electricians, roofers,
            landscapers, licensed GCs, we can handle every scope we are presented.
          </p>
          <p className="mb-4 text-[#00437a] max-w-[75%]">
            With project management, the most important piece is the process. Having previous experience with multiple hedge funds, our teams follow a
            similar approach as many larger institutional owners.
          </p>
          <p className="mb-4 text-[#00437a] max-w-[75%]">
            TPG Management uses labor-only pricing, meaning that there are no mark ups on materials. In fact, owners are often able to enjoy our
            volume discount with suppliers! With the volume of work our team has, the labor-only pricing model also allows us to drive down labor
            costs, as contractors know another job is waiting for them. Not having to float material expense and having consistent job security allows
            the contractor to provide TPG Management and our owners with some of the most competitive prices in the area for the quality and
            speed that is expected.
          </p>
        </div>
      </div>
    </div>
  );
}