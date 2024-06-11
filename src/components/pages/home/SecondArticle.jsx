import { SliderServices } from "./SliderServices";


export const SecondArticle = () => {
  return (
    <div className="relative w-full mx-auto py-5 px-6 h-[550px] xl:pt-8">
      <div className="h-[170px] pt-20 relative flex flex-col justify-center items-center xl:pt-10">
        <div className=" leading-none font-abc2 font-extrabold text-skyBlue text-[45px] text-center">
          ¿Cómo lo hacemos?
        </div>
        <div className=" my-2 leading-tight font-abc2 text-skyBlue text-[20px] text-center xl:w-[550px]">
          El secreto está en nuestra experiencia, especialización y
          acompañamiento cercano en áreas como:
        </div>
      </div>
      <div className="mt-14 xl:mt-1">
        <SliderServices/>
      </div>
    </div>
  );
};
