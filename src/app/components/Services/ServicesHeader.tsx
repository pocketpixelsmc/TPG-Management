"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Header from "../ui/Header";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '../ui/Button';
import Link from 'next/link';

export default function ServicesHeader() {
    return (
        <div className="flex gap-6 flex-col items-center">
            <Header variant="midBig">We provide full-service property management.</Header>
            {/* <h3 className="text-2xl text-blue-900 font-semibold text-center leading-relaxed">
        We&apos;re hands-on, so you don&apos;t have to be.
      </h3> */}
            <div className="flex flex-col lg:flex-row gap-12 w-full max-w-[1200px] justify-between px-4">
                <div className="flex flex-col md:flex-row gap-8 lg:flex-col lg:pl-4 justify-center w-full">
                    <div className="space-y-4 flex-1">
                        <h4 className="text-2xl text-blue-900 font-bold mb-3 text-center lg:text-left">Properties We Manage</h4>
                        <div className="flex gap-12 text-lg text-gray-700 justify-center lg:justify-start">
                            <div className="space-y-2">
                                <p className="hover:text-blue-950 transition-colors">Single Family</p>
                                <p className="hover:text-blue-950 transition-colors">Multi-Family</p>
                            </div>
                            <div className="space-y-2">
                                <p className="hover:text-blue-950 transition-colors">Condos</p>
                                <p className="hover:text-blue-950 transition-colors">Commercial</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 flex-1">
                        <h4 className="text-2xl text-blue-900 font-bold mb-3 text-center lg:text-left">Areas We Serve</h4>
                        <div className="flex gap-12 text-lg text-gray-700 justify-center lg:justify-start">
                            <div className="space-y-2">
                                <p className="hover:text-blue-950 transition-colors">Hudson</p>
                                <p className="hover:text-blue-950 transition-colors">Essex</p>
                                <p className="hover:text-blue-950 transition-colors">Middlesex</p>
                            </div>
                            <div className="space-y-2">
                                <p className="hover:text-blue-950 transition-colors">Monmouth</p>
                                <p className="hover:text-blue-950 transition-colors">Somerset</p>
                                <p className="hover:text-blue-950 transition-colors">Union</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-[700px] max-h-[300px] max-w-[300px] mx-auto lg:mx-0">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        speed={1200}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{ delay: 2000 }}
                        className="rounded-xl overflow-hidden"
                    >
                        {[1, 2, 3].map((num) => (
                            <SwiperSlide key={num}>
                                <div className="relative w-full h-0 pb-[56.25%]">
                                    <Image
                                        src={`/carousel/img${num}.png`}
                                        alt={`Image ${num}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute top-0 left-0 w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:pr-4 mt-6 justify-center items-center gap-4 sm:gap-10">
                <Link href="/contact">
                    <Button className="px-6 py-4 sm:px-8 text-lg sm:text-xl mx-4">Work with us</Button>
                </Link>
                <Link href="/faq">
                    <Button className="px-6 py-4 sm:px-8 text-lg sm:text-xl mx-4">Owner FAQs</Button>
                </Link>
            </div>
        </div>
    );
} 