import Image from 'next/image'

export default function OurProcess() {
  return (
    <div className="w-full">
      {/* Header section with dark blue background */}
      <div className="bg-[#002B5C] py-8 px-4 w-screen mt-8">
        <h1 className="text-white text-4xl text-center font-light w-screen">
          OUR PROCESS
        </h1>
      </div>

      {/* Process image section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Image
          src="/process.png"
          alt="Our Process"
          width={1200}
          height={400}
          layout="responsive"
        />
      </div>
    </div>
  )
}

