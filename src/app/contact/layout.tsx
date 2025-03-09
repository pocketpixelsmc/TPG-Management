import { Metadata } from "next";
import EmailForm from "../components/Forms/form";
import Testimonial from "../components/testimonial";
import Header from "../components/ui/Header";
export const metadata: Metadata = {
  title: "Get in Touch with TPG Management | NJ Property Experts",
  description: "Seeking expert property management in NJ? Contact TPG Management for reliable, customized services across New Jersey.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-center gap-2 mb-8 p-2 pb-0">
      <Header>Reliable Property Management Starts Here</Header>
      <Header><a href="tel:732-978-9390" className="text-blue-950 hover:text-blue-900">(732) 978-9390</a></Header>
      <EmailForm />
      <div className="m-0 mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center items-start text-left justify-center max-w-[1200px] gap-4">
          <p>Monday-Friday 8am-4pm, </p>
          <p>(732) 978-9390, </p>
          <a href="mailto:leads@tpgcompanies.net" className="text-blue-950">
            <p>leads@tpgcompanies.net</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 max-w-[5000px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl border-y-2 border-gray-200">
        <p className="text-xl text-blue-950 text-left leading-loose">
          At TPG Management, we leverage our seasoned expertise and innovative solutions to anticipate the unique needs of every property under our
          care, regardless of its type. Our commitment to prioritizing service ensures that we persist until complexity transforms into simplicity.
        </p>
      </div>
      <Testimonial />
      {children}
    </main>
  );
} 