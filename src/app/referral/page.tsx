import Image from "next/image";
import RefEmailForm from "../components/Forms/refForm";
import { Metadata } from "next";
import referralStepsData from "@/data/referralSteps.json";
import Header from "../components/ui/Header";
import whyWorkWithUsData from "@/data/whyWorkWithUs.json";

export const metadata: Metadata = {
  title: "Refer a Friend to TPG Management | Earn $400 | Property Management Referral Program NJ",
  description:
    "Refer property owners to TPG Management and help them experience top-notch property management in New Jersey. Earn $400 for every successful referral while helping friends and clients find trusted management for their single-family and multi-family rental properties.",
};

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <p className="text-5xl text-blue-900 font-bold mb-3">REFER A CLIENT AND EARN $400!</p>
      <p className="text-xl text-blue-950 max-w-[838px] mb-6">
        At TPG Management, we value referrals. Know someone who could benefit from our professional property management services in New Jersey? When
        you refer a property owner to us, you&apos;ll earn $400 once they sign up for our services.
      </p>
      <Header variant="subHeader">How it works</Header>
      <div className="max-w-[1080px] m-0 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {referralStepsData.steps.map((step) => (
            <div key={step.step} className="border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col justify-start gap-4 max-w-[320px] text-left">
              <p className="text-blue-900 underline text-lg">{step.step}</p>
              <div className="flex gap-2 flex-row items-center text-center">
                <Image src={step.icon} alt={step.alt} width={50} height={50} />
                <h3 className="text-lg font-bold text-blue-900">{step.title}</h3>
              </div>
              <div className="text-left">
                <p className="text-sm leading-7 text-blue-950">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-[80%] border-1 border-slate-800 mx-auto my-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-4">
        <div className="m-0 mx-auto">
          <div className="flex flex-col items-start text-left justify-center max-w-[1600px] gap-4 flex-wrap">
            <h2 className="text-5xl text-blue-900 font-bold mb-6 mt-6 self-start">{whyWorkWithUsData.title}</h2>

            {whyWorkWithUsData.reasons.map((reason) => (
              <div key={reason.number}>
                <h3 className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">
                  {reason.number}. {reason.title}
                </h3>
                <p className="text-base leading-7 max-w-[700px] text-wrap text-blue-950">
                  {reason.description}
                </p>
              </div>
            ))}

            <h2 className="text-5xl text-blue-900 font-bold mb-6 mt-6 self-start flex flex-wrap">
              {whyWorkWithUsData.nextStep.title}
            </h2>
            <p className="text-base leading-7 max-w-[700px] text-wrap text-blue-950">
              {whyWorkWithUsData.nextStep.description}
            </p>
          </div>
        </div>
        <RefEmailForm />
      </div>
    </main>
  );
}
