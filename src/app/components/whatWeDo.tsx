import Image from "next/image";

export default function WhatWeDo() {
  const services = [
    {
      title: "RESIDENT SCREENING ",
      description: "Applicants are qualified through our rigorous screening process.",
      image: "/wwd/resident_screening.png",
    },
    {
      title: "RENT COLLECTION",
      description: "We make sure rent is collected on time, every time.",
      image: "/wwd/rent_collection.png",
    },
    {
      title: "MAINTENANCE",
      description: "With our dedicated maintenance support team, issues are addressed quickly & efficiently.",
      image: "/wwd/maintenance.png",
    },
    {
      title: "RESIDENT COMMUNICATION",
      description: "We work hard to maintain positive resident relationships and satisfaction.",
      image: "/wwd/resident_communication.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center w-screen">
      <div className="bg-blue-900 py-8 px-4 w-[80%] my-8">
        <h1 className="text-white text-4xl text-center font-bold">What We Do</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[70%]">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col items-center text-center">
            <div className="relative w-full h-64 mb-6">
              <Image src={service.image} alt={service.title} fill className="object-cover rounded-lg" priority />
            </div>
            <h3 className="text-blue-900 text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
