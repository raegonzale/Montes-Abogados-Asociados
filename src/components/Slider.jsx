// Componente slider reutilizable

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";

import { OpenNew } from "../assets/icons/OpenNew";

export const Slider = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-10 pb-10 ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.3,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="max-w-[95%] xl:max-w-[60%] sm:max-w-[90%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 group relative rounded-xl px-2 pt-1 w-[250px] h-[200px] lg:w-[250px] lg:h-[200px] xl:w-[230px] xl:h-[280px] cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-xl shadow-sm shadow-grey"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-skyBlue opacity-10 mix-blend-multiply rounded-xl group-hover:opacity-70" />
                <div className="relative p-1 pt-56 flex flex-col">
                
                
                <div className="text-center text-[15px] font-sembold text-white font-abc2 bg-blue bg-opacity-90 bg-mix-blend-multiply rounded-lg ">
                  {item.title}
                </div>
                


              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
