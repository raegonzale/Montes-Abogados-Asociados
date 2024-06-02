import { Slider } from "../../common/Slider";

export const SecondArticle = () => {
  return (
    <div className="relative w-full mx-auto px-6 h-[540px] xl:pt-8">
      <div className="h-[170px] pt-20 relative flex flex-col justify-center items-center xl:pt-10">
        <div className="   font-abc2 font-extrabold text-blue text-[50px] text-center">
          ¿Como lo hacemos?
        </div>
        <div className="xl:w-[500px] leading-tight font-abc2 text-skyBlue text-[20px] text-center">
          El secreto está en nuestra experiencia, especialización y
          acompañamiento cercano en áreas como:
        </div>
      </div>
      <div className="xl:pt-3">
        <Slider />
      </div>
    </div>
  );
};
