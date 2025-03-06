import Image from "next/image";
import servicesData from "@/data/services.json";

type Service = {
    title: string;
    description: string;
    icon: string;
    alt: string;
};

export default function ServiceGrid() {
    return (
        <div className="max-w-[1080px] m-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicesData.services.map((service: Service, index: number) => (
                    <div key={index} className="border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-start">
                        <div className="flex gap-2 flex-row items-center text-center">
                            <Image 
                                src={service.icon} 
                                alt={service.alt} 
                                width={50} 
                                height={50} 
                            />
                            <h2 className="text-lg font-bold text-blue-900">{service.title}</h2>
                        </div>
                        <div className="text-left">
                            <p className="text-sm leading-7 text-blue-950">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
