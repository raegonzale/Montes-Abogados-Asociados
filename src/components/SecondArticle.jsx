import { Slider } from "../components/Slider";

export const SecondArticle = () => {
  return (
    <div className="w-full mx-auto px-6 h-[600px] bg-blue bg-opacity-10">
      <div className="h-[170px] pt-20 relative flex flex-col justify-center items-center xl:pt-10">
        <div className="leading-none font-abc2 font-extrabold text-blue text-[45px] text-center">
          Optimizamos y asesoramos
        </div>
        <div className="xl:w-[500px] leading-tight font-abc2 text-skyBlue text-[20px] text-center">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua..
        </div>
      </div>
      <Slider />
    </div>
  );
};
