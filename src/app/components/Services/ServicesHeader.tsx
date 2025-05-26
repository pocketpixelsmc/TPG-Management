"use client";

import Image from 'next/image';
import Header from "../ui/Header";
import Button from '../ui/Button';
import Link from 'next/link';

export default function ServicesHeader() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center max-w-7xl mx-auto">
                <Header variant="midBig" className="text-center mb-8">We provide full-service property management.</Header>

                <div className="grid lg:grid-cols-2 gap-12 w-full">
                    {/* Left Column - Services and Areas */}
                    <div className="space-y-2">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h4 className="text-3xl text-blue-900 font-bold mb-6">Properties We Manage</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Single Family</p>
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Multi-Family</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Condos</p>
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Commercial</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h4 className="text-3xl text-blue-900 font-bold mb-6">Areas We Serve in New Jersey</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Hudson</p>
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Essex</p>
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Union</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Monmouth</p>
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Middlesex</p>
                                    <p className="text-xl text-gray-700 hover:text-blue-950 transition-colors cursor-pointer">Somerset</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-[200px] rounded-xl overflow-hidden">
                            <Image
                                src="/carousel/img1.png"
                                alt="Property Management"
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative h-[200px] rounded-xl overflow-hidden">
                            <Image
                                src="/carousel/img2.png"
                                alt="Property Management"
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative h-[200px] rounded-xl overflow-hidden">
                            <Image
                                src="/carousel/img3.png"
                                alt="Property Management"
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative h-[200px] rounded-xl overflow-hidden">
                            <Image
                                src="/carousel/img4.png"
                                alt="Property Management"
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                    <Link href="/contact">
                        <Button >
                            GET A QUOTE
                        </Button>
                    </Link>
                    <Link href="/faq">
                        <Button >
                            OWNER FAQs
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
} 
