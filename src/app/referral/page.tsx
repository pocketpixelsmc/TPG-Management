import Image from "next/image";
import RefEmailForm from "../components/refForm";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <h1 className="text-5xl text-blue-900 font-bold mb-6">Refer clients and earn!</h1>
      <h1 className="text-4xl text-blue-900 font-bold self-center">How it works</h1>
      <div className="max-w-[1080px] m-0 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col justify-start gap-4 max-w-[320px] text-left">
            <p className="text-blue-950 underline text-lg">Step 1</p>
            <div className="flex gap-2 flex-row items-center text-center">
              <Image src="/referral/send.svg" alt="Send" width={50} height={50} />
              <h2 className="text-lg font-bold">Send Us A Referral</h2>
            </div>
            <div className="text-left">
              <p className="text-sm leading-7">
                Fill out the form below to send us a referral. Be sure to let your client know we'll be contacting them.
              </p>
            </div>
          </div>
          <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-start">
            <p className="text-blue-950 underline text-lg">Step 2</p>
            <div className="flex gap-2 flex-row items-center text-center">
              <Image src="/referral/call.svg" alt="Call" width={50} height={50} />
              <h2 className="text-lg font-bold">We Call Your Client</h2>
            </div>
            <div className="text-left">
              <p className="text-sm leading-7">We will give your client a call and walk them through their management options.</p>
            </div>
          </div>
          <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-start">
            <p className="text-blue-950 underline text-lg">Step 3</p>
            <div className="flex gap-2 flex-row items-center text-center">
              <Image src="/referral/money.svg" alt="Money" width={50} height={50} />
              <h2 className="text-lg font-bold">We Pay You</h2>
            </div>
            <div className="text-left">
              <p className="text-sm leading-7">Every client who signs a contract with us will net you a referral fee of $555</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <div className="grid grid-cols-auto-fit-600 place-content-center gap-4">
        <div className="m-0 mx-auto">
          <div className="flex flex-col items-start text-left justify-center max-w-[1600px] gap-4">
            <h1 className="text-5xl text-blue-900 font-bold mb-6 mt-6 self-start">Are You a Realtor Referring Rental Property Owners?</h1>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              You have come to the right place. At Lone Eagle Management, we offer the best realtor referral program in New Jersey. We&apos;ve been in
              the property management business for over 40 years, serving the entire state of NJ.
            </p>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              Partnering with us is a win-win situation! Our #1 desire is to build and maintain professional partnerships with other professionals in
              the real estate business.
            </p>
            <h1 className="text-3xl text-blue-900 font-bold mb-6 mt-6 self-start">Why Work With Us?</h1>

            <h1 className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">1. Realtors Earn $555 per Referral</h1>
            <p className="text-base leading-7 max-w-[700px] text-wrap">We pay you $555 for every referred unit!</p>

            <h1 className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">2. Keep Working With Your Client</h1>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              Your customers STAY your customers, so when they want to sell down the road we send them right back to you!
            </p>

            <h1 className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">3. Minimize Your Headaches</h1>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              Managing a rental property isn&apos;t an easy walk in the park, there is a lot of liability and it takes a lot of time. Let us handle
              the nonsense so you&apos;re free to do what you do best - sell property!
            </p>

            <h1 className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">4. We Make You Look Awesome!</h1>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              We care for our clients and show it by delivering amazing Property Management Services!
            </p>

            <h1 className="text-2xl text-blue-900 font-bold mb-2 mt-6 self-start">5. Maximize Your Client&apos;s ROI</h1>
            <p className="text-base leading-7 max-w-[700px] text-wrap">
              We combine cutting edge technology and top-notch customer service with customized property management services to minimize vacancies and
              maximize rental incomes, protecting their investment until it&apos;s time for you to sell it.
            </p>
            <h1 className="text-5xl text-blue-900 font-bold mb-6 mt-6 self-start">What&apos;s The Next Step?</h1>
            <p className="text-base leading-7 max-w-[700px] text-wrap">Tell us about your customer, and once they hire us we deliver your referral fee!</p>
          </div>
        </div>
        <RefEmailForm />
      </div>
    </main>
  );
}
