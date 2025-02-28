import Image from "next/image"

export function OwnerReferral() {
  return (
    <div className="container mx-auto p-6 mt-12 border-t border-gray-200">
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <div className="md:w-1/2 flex flex-col items-end">
          <Image
            src="/refer.png"
            alt="Referral Program Illustration"
            width={500}
            height={400}
            className="h-auto border border-gray-300"
          />
          <a href="mailto:mike@tpgcompanies.net" className="text-blue-600 hover:underline text-left mt-2 text-sm max-w-[500px]">
            CLICK HERE TO NOTIFY US OF A REFERRAL
          </a>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">
            Owner Referral Program - Earn up to $400 per-referral
          </h1>
          <p className="mb-4 text-black">
            Know a fellow property owner who could use professional property management? Refer them to TPG Management
            and earn up to $400 for each successful referral!
          </p>

          <div className="space-y-6 mb-8">
            <ReferralStep
              number={1}
              title="Refer a Property Owner"
              description="Introduce us to a landlord or property owner who could benefit from our services."
            />
            <ReferralStep
              number={2}
              title="They Sign Up"
              description="If they sign a management agreement with TPG Management, your referral is locked in."
            />
            <ReferralStep
              number={3}
              title="You Get Paid"
              description="Receive up to $400 per referral as our thank-you for helping us grow!"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

function ReferralStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
          <span className="text-blue-800 font-semibold">{number}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-1">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  )
}

