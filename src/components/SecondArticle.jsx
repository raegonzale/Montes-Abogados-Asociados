import { Slider } from "../components/Slider";
import { Animacion } from "../components/Animacion";

export const SecondArticle = () => {
  return (
    <div className=" mx-auto pt-10">
      <div className="relative right-[800px]">
        <Animacion />
      </div>

      <div className="h-[170px] pt-16 relative flex flex-col justify-center items-center">
        <div className="font-abc2 font-bold text-skyBlue text-[45px]">
          Confiamos en el 
        </div>
        <div className="font-abc2 text-blue text-[20px]">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua..
        </div>
      </div>

      
      <Slider />

      
    </div>
  );
};
