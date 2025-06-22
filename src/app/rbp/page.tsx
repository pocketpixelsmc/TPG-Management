import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resident Benefit Package and Approval Criteria - TPG Management",
  description: "View our comprehensive resident benefit package and approval criteria documentation.",
};

export default function RBPPage() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <section className="max-w-6xl mx-auto pb-12 pt-4 px-4 w-full">
        <h1 className="text-4xl font-bold text-center text-[#003474] mb-8">
          Resident Benefit Package and Approval Criteria
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resident Benefits PDF */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Resident Benefits Package
            </h2>
            <div className="mb-4">
              <a 
                href="/residentBenefits.pdf" 
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                📄 Download PDF
              </a>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/residentBenefits.pdf"
                className="w-full h-[600px]"
                title="Resident Benefits Package"
              >
                <p className="p-4 text-gray-600">
                  Your browser does not support PDFs. 
                  <a href="/residentBenefits.pdf" className="text-blue-600 underline">
                    Download the PDF
                  </a> instead.
                </p>
              </iframe>
            </div>
          </div>

          {/* TPG Approval Criteria PDF */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              TPG Approval Criteria
            </h2>
            <div className="mb-4">
              <a 
                href="/tpgApproval.pdf" 
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                📄 Download PDF
              </a>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/tpgApproval.pdf"
                className="w-full h-[600px]"
                title="TPG Approval Criteria"
              >
                <p className="p-4 text-gray-600">
                  Your browser does not support PDFs. 
                  <a href="/tpgApproval.pdf" className="text-blue-600 underline">
                    Download the PDF
                  </a> instead.
                </p>
              </iframe>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Important Information
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Please review both documents carefully before applying</li>
            <li>• All criteria must be met for application approval</li>
            <li>• Contact our leasing team if you have any questions</li>
            <li>• Documents are updated regularly - always refer to the latest version</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Questions about our requirements?
          </h3>
          <p className="text-gray-700 mb-4">
            Our leasing team is here to help guide you through the application process.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}