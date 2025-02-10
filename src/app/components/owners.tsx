import Image from "next/image";

export default function ValuesSection() {
  return (
    <div className="container mx-auto p-6">
      <hr className="hidden md:block w-[50%] border-1 border-slate-800 mx-auto my-8" />
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <div className="md:w-1/2 flex flex-col items-end">
          <Image src="/values/op.png" alt="Landlord Protection Insurance" width={400} height={300} className="h-auto border border-gray-300" />
          <p className="text-center text-sm mt-2 text-gray-600">Landlord Protection Insurance</p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">LANDLORD PROTECTION INSURANCE</h1>
          <p className="mb-4 text-black max-w-[75%]">
            Introducing Landlord Protection Insurance—exclusively for Property Owners. Owning a rental property comes with risks that traditional insurance brokers often don’t cover, such as Tenant Malicious Damage. That’s why I trust SureVestor to provide coverage that shields you from these unexpected expenses. Their service includes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-black max-w-[75%]">
            <li>Tenant Malicious Damage guaranteed with $35K in coverage</li>
            <li>Loss of Rent Guarantee covering up to 25 weeks of lost rent</li>
            <li>Eviction Guarantee with $5K in eviction coverage, plus $600 for sheriff fees</li>
            <li>$15K in theft or damage due to theft</li>
            <li>Rekeying of locks if a tenant skips or has to be evicted</li>
            <li>$5K lockbox coverage</li>
          </ul>
          <p className="mb-6 text-black max-w-[75%]">
            This comprehensive coverage is available for only $50 per month*, ensuring landlords have peace of mind and financial protection from costly tenant-related incidents.
          </p>
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
            One of the most challenging portions of property management is selecting a qualified applicant to rent your home. With our pre-screening and rigorous application process, applicants are continually scored, allowing only the most qualified applicants to be approved. Since implementing these processes, we have seen a tremendous reduction in delinquency and an increase in resident longevity.
          </p>
          <p className="mb-4 text-black max-w-[75%]">
            TPG Management evaluates multiple factors before approving an applicant, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-black max-w-[75%]">
            <li>Credit and criminal background checks</li>
            <li>Eviction history</li>
            <li>Landlord verifications</li>
            <li>Income verifications and more</li>
          </ul>
          <p className="mb-6 text-black max-w-[75%]">
            TPG Management complies with all Fair Housing practices and procedures in its screening efforts.
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
            Handling maintenance efficiently is a key part of successful property management. At TPG Management, we have a streamlined process to ensure repairs are addressed quickly and tenants remain informed every step of the way. Our approach minimizes downtime and ensures resident satisfaction.
          </p>
          <p className="mb-4 text-black max-w-[75%]">
            We receive maintenance requests through our online portal or via phone for emergencies. Our team troubleshoots with the tenant to identify the issue and, when necessary, promptly schedules a qualified technician or vendor to resolve the problem. Throughout the process, we keep tenants updated on the status of their request.
          </p>
          <p className="mb-4 text-black max-w-[75%]">
            Once the repair is complete, we follow up with the tenant to confirm the issue has been resolved to their satisfaction. This proactive approach ensures maintenance is handled professionally, efficiently, and with minimal disruption.
          </p>
        </div>
      </div>
    </div>
  );
}
