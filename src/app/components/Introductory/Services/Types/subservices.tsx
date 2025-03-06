import Image from "next/image";
import Link from "next/link";
import Button from "../../../ui/Button";
import subservicesData from "@/data/subservices.json";

type Subservice = {
    title: string;
    description: string;
    image: string;
    alt: string;
    link: string;
};

export default function Subservices() {
    return (
        <div className="max-w-[1080px] m-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subservicesData.subservices.map((service: Subservice, index: number) => (
                    <div 
                        key={index} 
                        className="border-solid border-2 border-blue-900 rounded-lg grid grid-rows-3r place-items-center max-w-[300px] text-left pb-4 gap-2"
                    >
                        <div className="self-start">
                            <Image 
                                src={service.image} 
                                alt={service.alt} 
                                width={300} 
                                height={200} 
                                className="rounded-t-md h-[195px]" 
                            />
                        </div>
                        <div className="p-4 pb-2 flex flex-col text-left justify-around gap-4 items-start self-start">
                            <h2 className="text-xl font-bold text-blue-900">{service.title}</h2>
                            <p className="text-sm leading-7 text-blue-950">{service.description}</p>
                        </div>
                        <Link href={service.link}>
                            <Button>Contact Us</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
