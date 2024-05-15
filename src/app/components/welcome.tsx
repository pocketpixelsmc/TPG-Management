import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { plusJakartaSans } from "./fonts";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle";

export default function Welcome() {
  return (
    <section className="flex flex-col content-center justify-center max-w-full sm:flex-row gap-4 lg:gap-16 text-blue-900 m-4">
      <div
        className={` flex flex-col items-start justify-center sm:max-w-[300px] lg:max-w-[500px] text-left text-wrap`}
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          Welcome to TPG Management
        </h1>
        <p className="text-sm lg:text-lg ">
          We are a premier property management solution serving <strong>
            Monmouth,
            Middlesex, Union, Somerset and Hudson County in New Jersey
          </strong>.
          Specializing in single-family homes, multi-family units, and apartment
          complexes. We handle every facet of the property lifecycle. – from
          leasing and maintenance to compliance and enhancements – ensuring
          optimal returns while you enjoy hassle-free ownership, allowing you to
          sit back, collect rent, and watch your investment thrive.
        </p>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1200}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000 }}
        className=" max-w-[320px] sm:max-w-[640px] lg:max-w-[40vw] rounded-xl lg:grow"
      >
        <SwiperSlide>
          <Image
            src="/carousel/img1.jpg"
            alt="img1"
            width={1000}
            height={500}
            className="hidden sm:hidden lg:block h-[500px]"
          />
          <Image
            src="/carousel/img1.jpg"
            alt="img1"
            width={320}
            height={320}
            className="block sm:hidden h-[320px]"
          />
          <Image
            src="/carousel/img1.jpg"
            alt="img1"
            width={640}
            height={320}
            className="hidden sm:block lg:hidden h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/carousel/img2.jpg"
            alt="img2"
            width={1000}
            height={500}
            className="hidden sm:hidden lg:block h-[500px]"
          />
          <Image
            src="/carousel/img2.jpg"
            alt="img2"
            width={320}
            height={320}
            className="block sm:hidden h-[320px]"
          />
          <Image
            src="/carousel/img2.jpg"
            alt="img2"
            width={640}
            height={320}
            className="hidden sm:block lg:hidden h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/carousel/img3.jpg"
            alt="img3"
            width={1000}
            height={500}
            className="hidden sm:hidden lg:block h-[500px]"
          />
          <Image
            src="/carousel/img3.jpg"
            alt="img3"
            width={320}
            height={320}
            className="block sm:hidden h-[320px]"
          />
          <Image
            src="/carousel/img3.jpg"
            alt="img3"
            width={640}
            height={320}
            className="hidden sm:block lg:hidden h-[320px]"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
