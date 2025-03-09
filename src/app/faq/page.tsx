import Image from "next/image";
import EmailForm from "../components/Forms/form";
import Testimonial from "../components/testimonial";
import { Metadata } from "next";
import faqData from "@/data/faq.json";
import Header from "../components/ui/Header";

export const metadata: Metadata = {
  title: 'Owner FAQs',
  description: 'Frequently asked questions about our property management services. Learn about our processes, policies, and how we can help manage your property.',
  keywords: ['property management FAQs', 'owner questions', 'property management help', 'property management information'],
};

export default function FAQ() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4">
      <Header>Frequently Asked Questions</Header>

      {/* FAQ Categories */}
      <div className="max-w-[1200px] w-full">
        {faqData.faqCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl text-blue-900 font-bold mb-4">{category.title}</h2>
            <div className="space-y-4">
              {category.questions.map((item, qIndex) => (
                <div key={qIndex} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.q}</h3>
                  <p className="text-gray-700 whitespace-pre-line">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-[1200px] mt-8">
        <h2 className="text-3xl text-blue-900 font-bold text-center mb-6">
          Still have questions?
        </h2>
        <div className="text-center mb-6">
          <p className="text-xl">
            Contact us at{" "}
            <a href="tel:732-978-9390" className="text-blue-900 font-semibold hover:underline">
              (732) 978-9390
            </a>
            {" "}or fill out the form below
          </p>
        </div>
        <EmailForm />

        <div className="flex flex-col sm:flex-row sm:items-center items-center text-center justify-center gap-4 mt-6">
          <p>Monday-Friday 8am-4pm</p>
          <p>(732) 978-9390</p>
          <a href="mailto:leads@tpgcompanies.net" className="text-blue-950 hover:underline">
            leads@tpgcompanies.net
          </a>
        </div>
      </div>
    </main>
  );
}
