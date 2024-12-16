"use client";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeesAtGlance() {
  return (
    <div className="grid lg:grid-cols-2 w-screen mt-8">
      {/* Fees Section */}
      <div className="bg-sky-50 p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">FEES AT A GLANCE</h2>
        <p className="text-blue-800 italic mb-8">For a complete list, download the OVERVIEW BROCHURE</p>

        <div className="space-y-8">
          {/* Monthly Management Fee */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="bg-sky-500 text-white font-bold p-3 pr-8 clip-arrow">8%</div>
            </div>
            <div>
              <h3 className="font-bold text-blue-900">MONTHLY MANAGEMENT FEE</h3>
              <p className="text-blue-800">10% of gross rents collected</p>
            </div>
          </div>

          {/* Leasing Fee */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="bg-sky-500 text-white font-bold p-3 pr-8 clip-arrow">6%</div>
            </div>
            <div>
              <h3 className="font-bold text-blue-900">5+ Units</h3>
            </div>
          </div>

          {/* Lease Renewal Fee */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="bg-sky-500 text-white font-bold p-3 pr-8 clip-arrow">Contact us</div>
            </div>
            <div>
              <h3 className="font-bold text-blue-900">20+ units</h3>
            </div>
          </div>

          {/* Material Mark Ups */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="bg-sky-500 text-white font-bold p-3 pr-8 clip-arrow">$0</div>
            </div>
            <div>
              <h3 className="font-bold text-blue-900">MATERIAL MARK UPS</h3>
              <p className="text-blue-800">
                $0 - Enjoy our volume discounts
                <br />
                from multiple vendors with no mark ups!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-[#002B5C] p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-white mb-2">DOWNLOAD</h2>
        <p className="text-white mb-8">Forms and Information</p>

        <div className="grid grid-cols-2 gap-6">
          <a href="/brochure.pdf" download>
              <Card className="bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer">
                <FileText className="w-12 h-12 text-red-500 mb-4" />
                <p className="text-blue-900 font-medium">
                  OVERVIEW
                  <br />
                  BROCHURE
                </p>
              </Card>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .clip-arrow {
          clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
          min-width: 80px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
