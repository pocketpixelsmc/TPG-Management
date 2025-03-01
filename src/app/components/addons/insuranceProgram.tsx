import { Card } from "@/components/ui/card";
import { SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const redirLink = [
  { title: "FAQ Sheet", link: "https://drive.google.com/file/d/1QID1YH9nUQfPeu2Hw4iT5YYr-8_V29nt/view?usp=sharing" },
  { title: "Landlord Protection", link: "https://drive.google.com/file/d/11ddsGRa-SNTr55fRTjbcS4kLG_w-hmNf/view?usp=drive_link" },
];

export function InsuranceProgram() {
  return (
    <div className="container mx-auto p-6 mt-12 border-t border-gray-200">
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <div className="md:w-1/2 flex flex-col items-end">
          <Image src="/insurance.png" alt="Sample Owner's Portal Home Screen" width={500} height={400} className="h-auto border border-gray-300" />
          <a href="mailto:mike@tpgcompanies.net" className="text-blue-600 hover:underline text-left mt-2 text-xs max-w-[500px]">
            CLICK HERE TO SIGN-UP FOR THIS PROTECTION - Protect Your Investment for Just $52/Month
          </a>
          <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
          {redirLink.map((link) => (
            <a href={link.link} target="_blank" rel="noreferrer" key={link.title}>
              <Card
                key={link.title}
                className="w-[240px] h-[240px] p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <SquareArrowUpRight className="w-12 h-12 text-red-500 mb-2" />
                <p className="text-center text-sm font-medium">{link.title}</p>
              </Card>
            </a>
          ))}
        </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Exclusive Landlord Protection Insurance Program - $52 per-month</h1>
          <p className="mb-4 text-black">
            Owning rental property comes with risks—but with TPG Management&apos;s Landlord Protection Insurance Program through SureVestor, you can
            rent with confidence. For just $52 per month, you&apos;ll have financial protection against tenant damage, lost rent, and costly
            evictions.
          </p>
          <p className="mb-4 text-black font-semibold">Comprehensive Coverage Includes:</p>
          <div className="space-y-6 mb-8">
            <CoverageItem title="Tenant Malicious Damage Protection">
              <li>Up to $35,000 in coverage for intentional tenant damage</li>
            </CoverageItem>

            <CoverageItem title="Loss of Rent Guarantee">
              <li>Up to 25 weeks of lost rent covered for unexpected situations, including:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Tenant skips – Up to 8 weeks of rent covered</li>
                <li>Tenant delinquency – Up to 12 weeks of rent covered</li>
                <li>Tenant death (sole tenancy) – Up to 12 weeks of rent covered</li>
                <li>Tenant murder or suicide – Up to 25 weeks of rent covered</li>
                <li>Victims of violence – Up to 4 weeks of rent covered</li>
              </ul>
            </CoverageItem>

            <CoverageItem title="Eviction Expense Guarantee">
              <li>Up to $5,000 in legal fees if an eviction is needed</li>
              <li>$600 towards sheriff costs for enforcing the eviction</li>
              <li>Coverage for legal defense if the tenant sues</li>
            </CoverageItem>

            <CoverageItem title="Lock & Theft Protection">
              <li>Rekeying costs covered</li>
              <li>Up to $15,000 for theft-related property damage</li>
            </CoverageItem>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Why Enroll?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>Peace of mind – Know you&apos;re financially protected from common landlord risks</li>
              <li>Affordable protection – Just $52/month for extensive coverage</li>
              <li>Hassle-free process – TPG Management handles the details for you</li>
            </ul>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Have Questions?</h3>
            <p className="text-gray-700">
              Check out our <Link href="/faq" className="text-blue-900 hover:underline">FAQ Sheet</Link> for more information about the Landlord Protection Insurance Program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverageItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">{children}</ul>
    </div>
  );
}
