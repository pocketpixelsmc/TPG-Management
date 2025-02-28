import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FeesAtGlance() {
  const fees = [
    {
      percentage: "6-8",
      title: "MONTHLY MANAGEMENT FEE",
      description: ["1-4 units of 8% of gross rent collected", "5+ units and commercial 6% of gross rent collected"],
    },
    {
      percentage: "50",
      title: "LEASING FEE (RESIDENT PLACEMENT)",
      description: ["50% of First Month's Rent, taken at time of move-in"],
    },
    {
      amount: "0",
      title: "LEASE RENEWAL FEE",
      description: ["$0"],
    },
    {
      amount: "0",
      title: "MATERIAL MARK UPS",
      description: ["$0 - Enjoy our volume discounts from multiple material vendors with no markups!"],
    },
    {
      amount: "0",
      title: "ONBOARD FEES",
      description:[ "$0 - We do not charge any owner or tenant onboarding fees."],
    },
  ];

  const services = [
    {
      title: "Expert Tenant Placement",
    },
    {
      title: "Lease & Rental Management",
    },
    {
      title: "Rent Collection",
    },
    {
      title: "24/7 Maintenance & Repairs",
    },
    {
      title: "Tenant Communication",
    },
    {
      title: "Property Compliance & Inspection",
    },
    {
      title: "Maximize Your Rental Income",
    },
    {
      title: "Eviction Management",
    },
  ];

  const downloads = [{ title: "OVERVIEW BROCHURE", id: "brochure", href: "https://drive.google.com/file/d/1kV-TCfifQGs7kJUydmzGrRyAuVQTxPOr/view?usp=sharing" }];

  return (
    <div className="flex flex-wrap">
      {/* Top Left Section */}
      <div className="w-full md:w-1/2 bg-[#f0f8ff] p-8">
        <h1 className="text-[#1e3a8a] text-4xl font-bold mb-2">FEES AT A GLANCE</h1>
        <p className="text-[#1e3a8a] italic mb-8">For a complete list, download the OVERVIEW BROCHURE</p>
        <div className="space-y-6">
          {fees.map((fee) => (
            <div key={fee.title} className="flex items-start gap-3">
              <div className="relative">
                <div className="bg-[#0098da] text-white font-bold p-2 pr-6 flex items-center justify-center w-[85px] h-9 relative [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                  <span className="text-lg flex items-start translate-x-1">
                    {fee.amount ? (
                      <>
                        <span>$</span>
                        <span>{fee.amount}</span>
                      </>
                    ) : (
                      <>
                        <span>{fee.percentage}</span>
                        <span>%</span>
                      </>
                    )}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#1e3a8a]">{fee.title}</h3>
                {
                  fee.description.length > 1 ? (
                    <ul className="list-disc ml-6">
                      {fee.description.map((desc) => (
                        <li key={desc}>{desc}</li>
                      ))}
                    </ul>
                  )
                  :
                  (
                    <p>{fee.description}</p>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Right Section */}
      <div className="w-full md:w-1/2 bg-blue-900 p-8">
        <h2 className="text-white text-4xl font-bold mb-2">DOWNLOAD</h2>
        <p className="text-white mb-8">Forms and Information</p>
        <div className="grid grid-cols-2 gap-4">
          {downloads.map((download) => (
            <a href={download.href} target="_blank" rel="noreferrer" key={download.id}>
              <Card
                key={download.id}
                className="w-[200px] h-[200px] p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <FileText className="w-12 h-12 text-red-500 mb-2" />
                <p className="text-center text-sm font-medium">{download.title}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Left Section */}
      <div className="w-full md:w-1/2 bg-blue-900 p-8">

      </div>

      {/* Bottom Right Section */}
      <div className="w-full md:w-1/2 bg-[#f0f8ff] p-8">
        <h1 className="text-[#1e3a8a] text-4xl font-bold mb-2">MANAGEMENT SERVICES INCLUDE</h1>
        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.title} className="flex items-start gap-3">
              <div className="relative">
                <div className="bg-[#0098da] text-white font-bold p-2 pr-6 flex items-center justify-center w-[75px] h-9 relative [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                  <span className="text-lg flex items-start translate-x-1">
                    <>
                      <span className="text-xs translate-y-0.5">✓ </span>
                    </>
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#1e3a8a]">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
