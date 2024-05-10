// Componente slider reutilizable

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";

export const Slider = () => {
  return (
    <div className="pt-20 flex items-center justify-center flex-col xl:pt-2">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.1,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.1,
            spaceBetween: 5,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="max-w-[85%] xl:max-w-[60%] sm:max-w-[90%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 group relative rounded-xl px-2 pt-1 w-[200px] h-[250px] lg:w-[250px] lg:h-[200px] xl:w-[230px] xl:h-[280px] cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-xl shadow-sm shadow-grey"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-skyBlue opacity-10 mix-blend-multiply rounded-xl group-hover:opacity-80" />
              <div className="relative p-2 pt-[215px] flex flex-col">
                <div className="h-[30px] text-center place-content-center text-[15px] font-bold text-skyBlue font-abc2 bg-white bg-opacity-80 bg-mix-blend-multiply rounded-lg ">
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
