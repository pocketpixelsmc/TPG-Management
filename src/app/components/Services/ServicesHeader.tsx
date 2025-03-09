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
            <Header>We provide full-service property management.</Header>
            {/* <h3 className="text-2xl text-blue-900 font-semibold text-center leading-relaxed">
        We&apos;re hands-on, so you don&apos;t have to be.
      </h3> */}
            <div className="flex flex-col lg:flex-row gap-12 w-full max-w-[1200px] justify-between px-4">
                <div className="flex flex-col gap-8 md:pl-4">
                    <div className="space-y-4">
                        <h4 className="text-2xl text-blue-900 font-bold mb-3">Properties We Manage</h4>
                        <div className="flex gap-12 text-lg text-gray-700">
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
                    <div className="space-y-4">
                        <h4 className="text-2xl text-blue-900 font-bold mb-3">Areas We Serve</h4>
                        <div className="flex gap-12 text-lg text-gray-700">
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
                <div className="flex-1 relative min-h-[400px]">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        className="max-w-[700px] h-[400px] rounded-xl shadow-lg"
                    >
                        {[1, 2, 3].map((num) => (
                            <SwiperSlide key={num}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={`/carousel/img${num}.png`}
                                        alt={`Property image ${num}`}
                                        fill
                                        className="object-cover"
                                        priority={num === 1}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="flex flex-row md:pr-4 mt-6 justify-center items-center gap-10">
                <Link href="/contact">
                    <Button>Work with us</Button>
                </Link>
                <Link href="/faq">
                    <Button>Owner FAQs</Button>
                </Link>
            </div>
        </div>
    );
} 