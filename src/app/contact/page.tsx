import Image from "next/image";
import EmailForm from "../components/form";
import Testimonial from "../components/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch with TPG Management | NJ Property Experts ",
  description:
    "Seeking expert property management in NJ? Contact TPG Management for reliable, customized services across New Jersey. ",
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <h1 className="text-4xl text-blue-900 font-bold self-center">Let us streamline your life.</h1>
      <h1 className="text-2xl text-black font-bold self-center max-w-[475px]">
        If you are interested in our property management services, please fill out the form below or call <u><a href="tel:732-978-9390"> (732) 978-9390 </a></u>
      </h1>
      <EmailForm />
      <div className="m-0 mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center items-start text-left justify-center max-w-[1200px] gap-4">
          <p>Monday-Friday 8am-4pm, </p>
          <p>(732) 978-9390, </p>
          <a href="mailto:info@tpgmanagement.net" className="text-blue-950">
            <p>info@tpgmanagement.net</p>
          </a>
        </div>
      </div>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 bg-slate-300 max-w-[5000px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <p className="text-xl text-blue-950 text-left leading-loose">
          At TPG Management, we leverage our seasoned expertise and innovative solutions to anticipate the unique needs of every property under our
          care, regardless of its type. Our commitment to prioritizing service ensures that we persist until complexity transforms into simplicity.
        </p>
      </div>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <Testimonial />
    </main>
  );
}
