import Image from "next/image";
import EmailForm from "../components/form";
import Testimonial from "../components/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch with TPG Management | NJ Property Experts ",
  description: "Seeking expert property management in NJ? Contact TPG Management for reliable, customized services across New Jersey. ",
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-6 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <h1 className="text-4xl text-blue-900 font-bold self-center">Didn&apos;t find the answers you are looking for?</h1>
      <h1 className="text-2xl text-black font-bold self-center max-w-[675px]">
        Resident or Property Owner, we are always happy to answer your questions or address your concerns. , please fill out the form below or call
        <u>
          <a href="tel:732-978-9390"> (732) 978-9390 </a>
        </u>
      </h1>
      <EmailForm />
      <div className="m-0 mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center items-start text-left justify-center max-w-[1200px] gap-4">
          <p>Monday-Friday 9am-5pm, </p>
          <p>(732) 978-9390, </p>
          <a href="mailto:info@tpgmanagement.net" className="text-blue-950">
            <p>info@tpgmanagement.net</p>
          </a>
        </div>
      </div>
    </main>
  );
}
