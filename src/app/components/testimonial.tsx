import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-blue-900 m-4">
      <h1 className=" text-2xl">
        What does our valuable customers have to say about us?
      </h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1200}
        pagination={{ clickable: true, dynamicBullets: true}}
        modules={[Pagination, Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 2000 }}
        className=" max-w-[320px] sm:max-w-[640px] lg:max-w-[40vw] rounded-xl lg:grow text-black"
      >
        <SwiperSlide>
          <div className="m-0 mx-auto">
              <div className="flex flex-col items-center justify-center gap-4 p-12">
                <h1 className="text-xl font-bold">Some Name</h1>
                <p className="text-sm leading-6">
                  &quot;a tenetur! Aut repudiandae voluptas ipsa itaque fugiat! Culpa
                  deleniti hic eligendi aperiam rerum officia velit perferendis
                  ipsum impedit molestiae! Dignissimos ipsum illum nobis ipsam
                  facilis sed animi. Ut fugiat dolorum laboriosam ex id sint
                  quisquam quas adipisci.&quot;
                </p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-0 mx-auto">
              <div className="flex flex-col items-center justify-center gap-4 p-12">
                <h1 className="text-xl font-bold">Some Name</h1>
                <p className="text-sm leading-6">
                  &quot;a tenetur! Aut repudiandae voluptas ipsa itaque fugiat! Culpa
                  deleniti hic eligendi aperiam rerum officia velit perferendis
                  ipsum impedit molestiae! Dignissimos ipsum illum nobis ipsam
                  facilis sed animi. Ut fugiat dolorum laboriosam ex id sint
                  quisquam quas adipisci.&quot;
                </p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-0 mx-auto">
              <div className="flex flex-col items-center justify-center gap-4 p-12">
                <h1 className="text-xl font-bold">Some Name</h1>
                <p className="text-sm leading-6">
                  &quot;a tenetur! Aut repudiandae voluptas ipsa itaque fugiat! Culpa
                  deleniti hic eligendi aperiam rerum officia velit perferendis
                  ipsum impedit molestiae! Dignissimos ipsum illum nobis ipsam
                  facilis sed animi. Ut fugiat dolorum laboriosam ex id sint
                  quisquam quas adipisci.&quot;
                </p>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
