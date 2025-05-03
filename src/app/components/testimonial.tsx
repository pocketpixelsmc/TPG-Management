'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Header from "./ui/Header";
import testimonialsData from "@/data/testimonials.json";
import H2 from "./ui/H2";
import test from "node:test";
import Image from "next/image";

type Testimonial = {
  name: string;
  rating: number;
  review: string;
};

export default function Testimonial() {
  const renderStars = (rating: number) => "⭐ ".repeat(rating);

  return (
    <div className="flex flex-col items-center justify-center text-blue-900 m-4">
      <H2>What our customers have to say:</H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          testimonialsData.testimonials.map((testimonial: Testimonial, index: number) => (
            <div key={index} className="flex flex-col items-start justify-between p-6 border rounded-lg shadow-lg bg-white max-w-[300px] gap-4 h-fit">
              <p className="text-gray-700 h-fit">{testimonial.review}</p>
              <div>
                <div className="flex items-center">
                  <div className="text-xl font-bold">{testimonial.name}</div>
                  <Image src="/check.svg" alt="Verified" width={30} height={30} className="inline-block ml-2" />
                </div>
                <div className="text-yellow-500">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}