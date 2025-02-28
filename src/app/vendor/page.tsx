

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-2 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <p className="text-5xl text-blue-900 font-bold mb-6">Vendor Information</p>
      <a href={"https://forms.gle/AqpyBjTTTWyq46j29"} className="flex w-full flex-col justify-center items-center">
        <button className="bg-blue-900 text-white p-2 px-6 md:px-10 md:p-6 md:text-xl rounded-lg transition-all hover:bg-blue-700">Submit an Invoice</button>
      </a>
      <hr className="w-[80%] border-1 border-slate-800 mx-auto my-8" />
      <p className="text-5xl text-blue-900 font-bold mb-3">Required Additional Insured Information</p>
      <p className="text-xl max-w-[838px] mb-3">
        Reach out to your insurance agent or representative and request that they add TPG Management as an additional insured on your policy.
      </p>
      <p className="text-xl max-w-[838px] text-blue-900 font-bold mb-4">Required Information for the Policy:</p>
      <div className="w-full max-w-[500px] text-left flex items-start flex-col justify-start">
        <p className="text-xl max-w-[838px]">
          <strong>Company Name:</strong> TPG Management LLC{" "}
        </p>
        <p className="text-xl max-w-[838px] mb-4">
          <strong>Address:</strong> PO Box 212 Holmdel, NJ 07733
        </p>
        <p className="text-xl max-w-[838px] mb-4">
          <strong>Forward copy of Certificate of Insurance:</strong>
        </p>
        <p className="text-xl max-w-[838px] mb-4">
          Once the endorsement is completed, please provide a Certificate of Insurance (COI) showing TPG Management LLC as an additional insured. The
          COI should be emailed to julian@tpgcompanies.net or mailed to the address listed below :
        </p>
        <p className="text-xl max-w-[838px]">TPG Management LLC</p>
        <p className="text-xl max-w-[838px]">PO BOX 212</p>
        <p className="text-xl max-w-[838px]">Holmdel, NJ 07733</p>
      </div>
    </main>
  );
}
