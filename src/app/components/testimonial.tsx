'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Header from "./ui/Header";
import testimonialsData from "@/data/testimonials.json";
import H2 from "./ui/H2";

type Testimonial = {
  name: string;
  rating: number;
  review: string;
};

export default function Testimonial() {
  const renderStars = (rating: number) => "⭐ ".repeat(rating);

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-blue-900 m-4">
      <H2>What our customers have to say:</H2>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1200}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 2000 }}
        className="max-w-[320px] sm:max-w-[640px] lg:max-w-[40vw] rounded-xl lg:grow text-black"
      >
        {testimonialsData.testimonials.map((testimonial: Testimonial, index: number) => (
          <SwiperSlide key={index}>
            <div className="m-0 mx-auto">
              <div className="flex flex-col items-center justify-center gap-4 p-12">
                <h2 className="text-xl font-bold text-blue-900">{testimonial.name}</h2>
                <p className="text-sm">{renderStars(testimonial.rating)} {testimonial.rating}/5</p>
                <p className="text-sm leading-6 text-blue-950">
                  &quot;{testimonial.review}&quot;
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
