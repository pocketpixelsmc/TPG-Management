import Image from "next/image";
import Header from "../ui/Header";
import whatWeDoData from "@/data/whatWeDo.json";

type Service = {
    title: string;
    description: string;
    image: string;
};

export default function WhatWeDo() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 text-center w-screen">
            <Header variant="blue">What We Do</Header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[70%]">
                {whatWeDoData.services.map((service: Service) => (
                    <div key={service.title} className="flex flex-col items-center text-center">
                        <div className="relative w-full h-64 mb-6">
                            <Image 
                                src={service.image} 
                                alt={service.title} 
                                fill 
                                className="object-cover rounded-lg" 
                                priority 
                            />
                        </div>
                        <h3 className="text-blue-900 text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-blue-950">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
