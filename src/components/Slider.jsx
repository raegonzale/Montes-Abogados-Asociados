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
                className="absolute inset-0 bg-cover bg-center rounded-xl shadow-md shadow-grey"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-skyBlue opacity-60 mix-blend-multiply rounded-xl group-hover:opacity-90" />
                <div className="relative p-1 pt-4 flex flex-col">
                <div className="text-[21px] font-bold text-lightBlue font-abc2">
                  {item.title}
                </div>
                <div className="text-sm text-white font-abc2">
                  {item.content}
                </div>
                <div>
                  <OpenNew />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
