import Image from "next/image";

export default function OurProcess() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center w-full">
      {/* Header section with dark blue background */}
      <div className="bg-blue-900 py-8 px-4 w-[80%] mt-8">
        <h1 className="text-white text-4xl text-center font-bold">OUR PROCESS</h1>
      </div>

      {/* Process image section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Image src="/process.png" alt="Our Process" width={1200} height={400} layout="responsive" />
      </div>
    </div>
  );
}
