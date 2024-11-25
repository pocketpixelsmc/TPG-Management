"use client";
import { Autoplay, FreeMode, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="flex flex-col content-center justify-center max-w-full lg:flex-row gap-4 lg:gap-16 text-blue-900 m-4">
      <div className="flex flex-col items-start justify-center lg:max-w-[500px] xl:max-w-[700px] text-left">
        <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold">
          Hassle-Free Property Management in New Jersey – Maximize Your Rental Income, Minimize Your Stress
        </h1>
        <p className="text-sm xl:text-lg mt-6 mb-2">
          <strong>Welcome to TPG Management</strong>
        </p>
        <p className="text-sm xl:text-lg mb-6 text-black">
          Specializing in single-family homes, multi-family properties, apartment complexes, commercial properties (retail, office, mixed-use) we
          handle every aspect of managing your property so you can enjoy peace of mind and steady income.
        </p>
        <Link href={"/contact"} className="flex w-full flex-col justify-center items-center">
          <button className="bg-blue-900 text-white p-2 px-6 md:px-8 md:p-4 md:self-start rounded-lg transition-all hover:bg-blue-700">
            Learn More About Our Services
          </button>
        </Link>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1200}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay, FreeMode, Scrollbar]}
        autoplay={{ delay: 2000 }}
        className="rounded-xl max-w-[320px] md:max-w-[700px] h-fit"
      >
        <SwiperSlide>
          <Image src="/carousel/img1.png" alt="img1" layout="responsive" width={1000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/carousel/img2.png" alt="img2" layout="responsive" width={1000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/carousel/img3.png" alt="img3" layout="responsive" width={1000} height={500} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
