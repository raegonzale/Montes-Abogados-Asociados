// Componente slider reutilizable

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/free-mode'


import { FreeMode, Pagination } from 'swiper/modules';
import { ServiceData } from '../constants';



export const Slider = () => {
  return (
    
    
    <div className='flex items-center justify-center flex-col h-screen'>
      <Swiper
          breakpoints= {{
            340: {
              slidesPerView:3,
              spaceBetween:2
            },
            700: {
              slidesPerView:3,
              spaceBetween:2
            }
          }}

          freeMode={true}
          pagination={{clickable:true}}
          modules={[FreeMode, Pagination]}
          className='max-w-[70%] lg:max-[80%]'
      >
        {ServiceData.map((item)=>(
            <SwiperSlide key={item.title}>

              <div className='flex flex-col gap-6 group relative  text-blue rounded-xl px-6 py-8 h-[200px] w-[200px] lg:w-[250px] lg:h-[350px]'>
                <div className='absolute inset-0 bg-cover bg-center rounded-xl shadow-lg shadow-grey' style={{backgroundImage: `url(${item.backgroundImage})`}}></div>
              </div>

            </SwiperSlide>))}


      </Swiper>    




    </div>
  )
}

