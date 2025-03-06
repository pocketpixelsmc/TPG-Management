import Image from "next/image";
import Header from "../ui/Header";

export default function OurProcess() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center w-full">
      {/* Header section with dark blue background */}
      <Header variant="blue">OUR PROCESS</Header>


      {/* Process image section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Image src="/process.png" alt="Our Process" width={1600} height={100} />
      </div>
    </div>
  );
}
