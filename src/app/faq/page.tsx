import Image from "next/image";
import EmailForm from "../components/form";
import Testimonial from "../components/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | TPG Management NJ",
  description: "Find answers to common questions about TPG Management's property management services in New Jersey, including tenant screening, maintenance, and more.",
};

export default function FAQ() {
  const faqCategories = [
    {
      title: "Getting Started with Property Management",
      questions: [
        {
          q: "How do I get started with TPG Management?",
          a: "Contact us to set up a consultation. We'll discuss your property, your goals, and how we can help you maximize your rental income.",
        },
        {
          q: "What types of properties do you manage?",
          a: "We manage multi-family houses, apartment and commercial buildings, and single-family rental homes across New Jersey in Monmouth, Middlesex, Essex, Union, Hudson, and Somerset Counties.",
        },
        {
          q: "Can you help me find tenants?",
          a: "Yes, we handle all aspects of tenant placement, including advertising, thorough screening, and lease signing.",
        },
      ],
    },
    {
      title: "Tenant Screening and Leasing",
      questions: [
        {
          q: "How do you screen tenants?",
          a: "We conduct comprehensive background checks, including credit history, criminal background, employment verification, and rental history.",
        },
        {
          q: "Who handles the lease signing?",
          a: "We prepare and execute the lease agreement, ensuring all legal requirements are met.",
        },
        {
          q: "How do you schedule showings?",
          a: "We book all showings through our website and office phone to streamline the process.",
        },
      ],
    },
    {
      title: "Rent Collection and Financials",
      questions: [
        {
          q: "How is rent collected?",
          a: "Tenants pay rent online through our secure resident's portal, and funds are directly deposited into your account.",
        },
        {
          q: "When will I receive my rental income?",
          a: "Rental disbursements are typically made by the 10th-15th of each month.",
        },
        {
          q: "What fees do you charge?",
          a: "1-4 units of 8% of gross rent collected\n5+ units and commercial 6% of gross rent collected",
        },
      ],
    },
    {
      title: "Maintenance and Repairs",
      questions: [
        {
          q: "Who handles maintenance requests?",
          a: "We coordinate scheduling with tenants and trusted vendors to ensure timely repairs.",
        },
        {
          q: "Do you handle emergency repairs?",
          a: "Yes, we address urgent maintenance issues promptly to ensure tenant safety and property protection.",
        },
        {
          q: "Can I use my preferred vendors?",
          a: "Yes, you can provide us with your preferred vendor list, and we'll coordinate with them for repairs.",
        },
      ],
    },
    {
      title: "Property Inspections",
      questions: [
        {
          q: "How often do you inspect the property?",
          a: "We conduct thorough inspections during tenant move-in, move-out, and routine property checks.",
        },
        {
          q: "Who conducts the move-in inspection?",
          a: "A member of our team completes the move-in inspection to ensure the property's condition is well-documented.",
        },
        {
          q: "Will I receive reports from property inspections?",
          a: "Yes, detailed inspection reports with photos are provided to keep you informed.",
        },
      ],
    },
    {
      title: "Legal and Compliance",
      questions: [
        {
          q: "Do you handle evictions?",
          a: "Yes, we manage the entire eviction process, including sending notices, filing paperwork, and court representation.",
        },
        {
          q: "Are you knowledgeable about New Jersey rental laws?",
          a: "Absolutely. We stay up-to-date with all local, state, and federal rental regulations in New Jersey.",
        },
      ],
    },
    {
      title: "Ending a Lease",
      questions: [
        {
          q: "What happens at the end of a lease?",
          a: "We coordinate the move-out process, including inspections, security deposit return, and preparing the property for the next tenant.",
        },
        {
          q: "Can I sell my property while it's rented?",
          a: "Yes, we can help facilitate the sale while maintaining a good relationship with the tenant.",
        },
      ],
    },
    {
      title: "Communication and Reporting",
      questions: [
        {
          q: "How do you keep me informed about my property?",
          a: "You'll receive monthly statements, yearly inspection reports, and regular communication from our team.",
        },
        {
          q: "Who do I contact with questions about my property?",
          a: "You'll have a dedicated property manager who serves as your main point of contact.",
        },
      ],
    },
    {
      title: "General Questions",
      questions: [
        {
          q: "Can I switch property management companies easily?",
          a: "Yes, we assist with the transition to make it as seamless as possible.",
        },
        {
          q: "What areas in New Jersey do you serve?",
          a: "We provide property management services across New Jersey, specializing in multi-family and single-family rental homes.",
        },
        {
          q: "How do I contact TPG Management?",
          a: "You can reach us at: 732-978-9390",
        },
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4">
      <h1 className="text-4xl text-blue-900 font-bold text-center">Frequently Asked Questions</h1>
      
      {/* FAQ Categories */}
      <div className="max-w-[1200px] w-full">
        {faqCategories.map((category, index) => (
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
          <a href="mailto:info@tpgmanagement.net" className="text-blue-950 hover:underline">
            info@tpgmanagement.net
          </a>
        </div>
      </div>
    </main>
  );
}


/**
 * TPG Management Property Owner FAQ
Getting Started with Property Management
How do I get started with TPG Management?
Contact us to set up a consultation. We'll discuss your property, your goals, and how we can help you maximize your rental income.
What types of properties do you manage?
We manage multi-family houses, apartment and commercial buildings, and single-family rental homes across New Jersey in Monmouth, Middlesex, Essex, Union, Hudson, and Somerset Counties.
Can you help me find tenants?
Yes, we handle all aspects of tenant placement, including advertising, thorough screening, and lease signing.
Tenant Screening and Leasing
How do you screen tenants?
We conduct comprehensive background checks, including credit history, criminal background, employment verification, and rental history.
Who handles the lease signing?
We prepare and execute the lease agreement, ensuring all legal requirements are met.
How do you schedule showings?
We book all showings through our website and office phone to streamline the process.
Rent Collection and Financials
How is rent collected?
Tenants pay rent online through our secure resident's portal, and funds are directly deposited into your account.
When will I receive my rental income?
Rental disbursements are typically made by the 10th-15th of each month.
What fees do you charge?
1-4 units of 8% of gross rent collected
5+ units and commercial 6% of gross rent collected
Maintenance and Repairs
Who handles maintenance requests?
We coordinate scheduling with tenants and trusted vendors to ensure timely repairs.
Do you handle emergency repairs?
Yes, we address urgent maintenance issues promptly to ensure tenant safety and property protection.
Can I use my preferred vendors?
Yes, you can provide us with your preferred vendor list, and we'll coordinate with them for repairs.
Property Inspections
How often do you inspect the property?
We conduct thorough inspections during tenant move-in, move-out, and routine property checks.
Who conducts the move-in inspection?
A member of our team completes the move-in inspection to ensure the property's condition is well-documented.
Will I receive reports from property inspections?
Yes, detailed inspection reports with photos are provided to keep you informed.
Legal and Compliance
Do you handle evictions?
Yes, we manage the entire eviction process, including sending notices, filing paperwork, and court representation.
Are you knowledgeable about New Jersey rental laws?
Absolutely. We stay up-to-date with all local, state, and federal rental regulations in New Jersey.
Ending a Lease
What happens at the end of a lease?
We coordinate the move-out process, including inspections, security deposit return, and preparing the property for the next tenant.
Can I sell my property while it's rented?
Yes, we can help facilitate the sale while maintaining a good relationship with the tenant.
Communication and Reporting
How do you keep me informed about my property?
You'll receive monthly statements, yearly inspection reports, and regular communication from our team.
Who do I contact with questions about my property?
You'll have a dedicated property manager who serves as your main point of contact.
General Questions
Can I switch property management companies easily?
Yes, we assist with the transition to make it as seamless as possible.
What areas in New Jersey do you serve?
We provide property management services across New Jersey, specializing in multi-family and single-family rental homes.
How do I contact TPG Management?
You can reach us at: 732-978-9390 

 */