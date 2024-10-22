import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-blue-900 m-4">
      <h1 className=" text-2xl">What our customers have to say:</h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1200}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 2000 }}
        className=" max-w-[320px] sm:max-w-[640px] lg:max-w-[40vw] rounded-xl lg:grow text-black"
      >
        <SwiperSlide>
          <div className="m-0 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 p-12">
              <h1 className="text-xl font-bold">Maria S.</h1>
              <p className="text-sm">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</p>
              <p className="text-sm leading-6">
                &quot;I have entrusted TPG Management with managing my 2 family investment property for the last 2 years, and it has been nothing
                short of amazing. The only thing I do each month, is decide where to put my rental checks. I don&apos;t think about the house or do
                anything further.&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-0 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 p-12">
              <h1 className="text-xl font-bold">Sam C.</h1>
              <p className="text-sm">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</p>
              <p className="text-sm leading-6">
                &quot;TPG Management handles my six investment properties amazingly well. They&apos;re really great at what they do!&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-0 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 p-12">
              <h1 className="text-xl font-bold">Brad R.</h1>
              <p className="text-sm">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</p>
              <p className="text-sm leading-6">
                &quot;TPG Management takes care of my family home, the place I grew up in and didn&apos;t want to sell. They handle every aspect of
                the property and allow me to not have to worry about it, especially living 500 miles away!&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-0 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 p-12">
              <h1 className="text-xl font-bold">Gorge Phill</h1>
              <p className="text-sm">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</p>
              <p className="text-sm leading-6">
                Great property managers! They are professional, responsive, and do an excellent job in maintaining the property
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-0 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 p-12">
              <h1 className="text-xl font-bold">Kyle Wolfe</h1>
              <p className="text-sm">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</p>
              <p className="text-sm leading-6">Very easy to work with and professional, couldn&apos;t ask for any better</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-0 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 p-12">
              <h1 className="text-xl font-bold">Christina Amato</h1>
              <p className="text-sm">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</p>
              <p className="text-sm leading-6">They are awesome and have made owning my rental such a breeze.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-0 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 p-12">
              <h1 className="text-xl font-bold">Johnny Giamella</h1>
              <p className="text-sm">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</p>
              <p className="text-sm leading-6">
                They manage a 2 family house I own and do a great job. They have kept it fully rented and I just get my monthly rent checks each
                month, with no stress
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
