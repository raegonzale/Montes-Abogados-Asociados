// Componente slider reutilizable

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../../constants";
import Button from "@mui/material/Button";

export const Slider = () => {
  return (
    <div className="mt-1 py-1 ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.4,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 2.3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 1,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] xl:max-w-[75%] sm:max-w-[90%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-4 group relative rounded-xl px-2 pt-1 w-[200px] h-[250px] lg:w-[250px] lg:h-[200px] xl:w-[240px] xl:h-[300px] cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-xl shadow-sm shadow-grey"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-blue opacity-5 mix-blend-multiply rounded-xl group-hover:opacity-30" />
              <div className="relative p-2 xl:pt-[235px] flex flex-col pt-[185px]">
                <Button variant="contained" size="small">
                  {item.title}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
