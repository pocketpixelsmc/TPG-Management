import Link from "next/link";
import Button from "../../ui/Button";
import H2 from "../../ui/H2";
import Image from "next/image";

type Service = {
    title: string;
    description: string;
    icon: string;
};

export default function WhatWeOffer({ services }: { services: Service[] }) {
    return (
        <section className="flex flex-col items-center justify-center gap-8 text-center bg-gray-100 py-8">
            <H2 variant="blue">WHAT WE OFFER</H2>
            <div className="grid grid-col-1 xl:grid-cols-4 gap-6 w-full max-w-[75%]">
                {/* Left Section */}
                <div className="flex flex-col gap-6">
                    {/* White Box */}
                    <div className="bg-white shadow-md rounded-md flex flex-col items-center justify-around h-full min-h-[65%] py-6 gap-4">
                        <h3 className="text-xl font-semibold">Property Management</h3>
                        <p className="text-white bg-[#ffbd59] font-bold text-3xl py-8 w-full">Flat-Fee Pricing</p>
                        <Link href="/contact"><Button>Get Started</Button></Link>
                    </div>
                    {/* Dark Blue Box */}
                    <Link href="/multifamily">
                        <div className="bg-blue-800 text-white shadow-md p-6 rounded-md flex flex-col items-center h-full justify-center">
                            <p className="font-medium text-lg">Have Multiple Properties?</p>
                            <p className="text-sm mt-2">Discounted Multi-Fam Rates Available</p>
                        </div>
                    </Link>
                </div>

                {/* Right Section */}
                <div className="xl:col-span-3 bg-white shadow-md p-8 rounded-md">
                    <h3 className="text-lg font-semibold text-center mb-6 text-blue-950">TPG's Management Services</h3>
                    <div className="grid grid-cols-auto-fill-300 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="flex gap-4">
                                {/* Icon */}
                                <Image src={`${service.icon}`} alt={service.title} width={25} height={25} className="w-10 h-10" />
                                {/* Text */}
                                <div className="flex flex-col justify-start text-left">
                                    <h4 className="font-semibold text-blue-950">{service.title}</h4>
                                    <p className="text-xs text-blue-900">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}