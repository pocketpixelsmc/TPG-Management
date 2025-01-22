"use client"
import { Autoplay, FreeMode, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import "swiper/css"
import "swiper/css/bundle"
import Link from "next/link"

export default function Welcome() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-[80%] mx-auto py-12 text-blue-900">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 w-full">
        <div className="flex flex-col items-start justify-center xl:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Reliable Property Management in New Jersey – Helping Owners Succeed and Residents Thrive
          </h1>
          <p className="text-lg sm:text-xl font-semibold mt-6 mb-2">Welcome to TPG Management</p>
          <p className="text-base sm:text-lg mb-6 text-black">
            We provide premier property management services across Monmouth, Middlesex, Union, Ocean, Essex, Somerset,
            and Hudson counties. Specializing in single-family homes, multi-family properties, apartment complexes,
            commercial properties (retail, office, mixed-use) we handle every aspect of managing your property so you
            can enjoy peace of mind and steady income.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-900 text-white py-3 px-6 rounded-lg transition-all hover:bg-blue-700 text-base sm:text-lg">
              Learn More About Our Services
            </button>
          </Link>
        </div>
        <div className="w-full xl:w-1/2">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            speed={1200}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination, Autoplay, FreeMode, Scrollbar]}
            autoplay={{ delay: 2000 }}
            className="rounded-xl overflow-hidden aspect-w-16 aspect-h-9"
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
    </section>
  )
}

