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
    <main className="flex flex-col items-center justify-center gap-8 mb-8 py-4">
      <div className="flex flex-wrap flex-col xl:flex-row items-center xl:items-start justify-center">
        <div className="flex flex-col gap-12 w-[80%] xl:w-[50%] items-start text-left">
          <h1 className="text-blue-900 font-bold leading-tight text-xl sm:text-4xl lg:text-6xl text-wrap">Get Property Management Services You Can Trust</h1>
          <p className="text-blue-900 text-md sm:text-lg">
            At TPG Management, we leverage our seasoned expertise and innovative solutions to anticipate the unique needs of every property under our care, regardless of its type. Our commitment to prioritizing service ensures that we persist until complexity transforms into simplicity.
          </p>
          <p className="text-blue-900 text-md sm:text-lg font-extrabold">
            Complete the form to get connected with the property manageer for your needs
          </p>
        </div>
        <EmailForm />
      </div>
      <Testimonial />
      {children}
    </main>
  );
}