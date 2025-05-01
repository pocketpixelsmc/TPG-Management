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
  return (
    <div className="flex items-center justify-center text-blue-900 w-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977283.4134029956!2d-73.70113558861667!3d40.5865871235197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad8864191c4711f3%3A0x4a165bfd0a7afdb4!2sTPG%20Management!5e0!3m2!1sen!2sin!4v1746088318386!5m2!1sen!2sin" 
        className="w-full h-[600px] border-none"  
        loading="lazy" 
      ></iframe>
    </div>
  );
}
