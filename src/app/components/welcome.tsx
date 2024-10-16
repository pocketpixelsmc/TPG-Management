import { Autoplay, FreeMode, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { plusJakartaSans } from "./fonts";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle";

export default function Welcome() {
  return (
    <section className="flex flex-col content-center justify-center max-w-full lg:flex-row gap-4 lg:gap-16 text-blue-900 m-4">
      <div className="flex flex-col items-start justify-center lg:max-w-[500px] text-left">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Welcome to TPG Management</h1>
        <p className="text-sm xl:text-lg">
          We are a premier property management solution serving{" "}
          <strong>Monmouth, Middlesex, Union, Ocean, Passaic, Essex, Bergen, Somerset and Hudson County in New Jersey</strong>. Specializing in
          single-family homes, multi-family units, garden apartments, and apartment complexes. We handle every facet of the property lifecycle – from
          leasing and maintenance to compliance and enhancements – ensuring optimal returns while you enjoy hassle-free ownership, allowing you to sit
          back, collect rent, and watch your investment thrive.
        </p>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1200}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay, FreeMode, Scrollbar]}
        autoplay={{ delay: 2000 }}
        className="rounded-xl max-w-[320px] md:max-w-[500px] xl:max-w-[1000px]"
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
