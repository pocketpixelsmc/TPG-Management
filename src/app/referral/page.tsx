import Image from "next/image";
import RefEmailForm from "../components/refForm";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <p className="text-5xl text-blue-900 font-bold mb-3">REFER A CLIENT AND EARN $750!</p>
      <p className="text-xl max-w-[838px] mb-6">
        At TPG Management, we value referrals. Know someone who could benefit from our professional property management services in New Jersey? When
        you refer a property owner to us, you&apos;ll earn $750 once they sign up for our services.
      </p>
      <p className="text-4xl text-blue-900 font-bold self-center">How it works</p>
      <div className="max-w-[1080px] m-0 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col justify-start gap-4 max-w-[320px] text-left">
            <p className="text-blue-950 underline text-lg">Step 1</p>
            <div className="flex gap-2 flex-row items-center text-center">
              <Image src="/referral/send.svg" alt="Send" width={50} height={50} />
              <p className="text-lg font-bold">Send Us A Referral</p>
            </div>
            <div className="text-left">
              <p className="text-sm leading-7">
                Fill out the form below to send us a referral. Be sure to let your client know we&apos;ll be contacting them.
              </p>
            </div>
          </div>
          <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-start">
            <p className="text-blue-950 underline text-lg">Step 2</p>
            <div className="flex gap-2 flex-row items-center text-center">
              <Image src="/referral/call.svg" alt="Call" width={50} height={50} />
              <p className="text-lg font-bold">We Call Your Client</p>
            </div>
            <div className="text-left">
              <p className="text-sm leading-7">We will give your client a call and walk them through their management options.</p>
            </div>
          </div>
          <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-start">
            <p className="text-blue-950 underline text-lg">Step 3</p>
            <div className="flex gap-2 flex-row items-center text-center">
              <Image src="/referral/money.svg" alt="Money" width={50} height={50} />
              <p className="text-lg font-bold">We Pay You</p>
            </div>
            <div className="text-left">
              <p className="text-sm leading-7">Every client who signs a contract with us will net you a referral fee of $750</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[80%] border-1 border-slate-800 mx-auto my-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2  place-content-center gap-4">
        <div className="m-0 mx-auto">
          <div className="flex flex-col items-start text-left justify-center max-w-[1600px] gap-4 flex-wrap">
            <p className="text-5xl text-blue-900 font-bold mb-6 mt-6 self-start">Why Work With Us?</p>

            <p className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">1. Realtors Earn $750 per Referral</p>
            <p className="text-base leading-7 max-w-[700px] text-wrap">We pay you $750 for every referred client!</p>

            <p className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">2. Keep Working With Your Client</p>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              Your customers STAY your customers, so when they want to sell down the road we send them right back to you!
            </p>

            <p className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">3. Minimize Your Headaches</p>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              Managing a rental property isn&apos;t an easy walk in the park, there is a lot of liability and it takes a lot of time. Let us handle
              the nonsense so you&apos;re free to do what you do best - sell property!
            </p>

            <p className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">4. We Make You Look Awesome!</p>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              We care for our clients and show it by delivering amazing Property Management Services!
            </p>

            <p className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">5. Maximize Your Client&apos;s ROI</p>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              We combine cutting edge technology and top-notch customer service with customized property management services to minimize vacancies and
              maximize rental incomes, protecting their investment until it&apos;s time for you to sell it.
            </p>
            <p className="text-5xl text-blue-900 font-bold mb-6 mt-6 self-start flex flex-wrap">What&apos;s The Next Step?</p>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              Tell us about your customer, and once they hire us we deliver your referral fee!
            </p>
          </div>
        </div>
        <RefEmailForm />
      </div>
    </main>
  );
}
