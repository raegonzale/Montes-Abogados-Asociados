import { SliderServices } from "./SliderServices";
import useTheme from "../../../constants/useTheme.js";

export const SecondArticle = () => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor:theme.background}} className="relative w-full mx-auto py-5 px-6 h-[550px] xl:pt-8">
      <div className="h-[170px] pt-20 relative flex flex-col justify-center items-center xl:pt-10">
        <div style={{color: theme.primary }} className="leading-none font-abc2 font-extrabold text-[50px] text-center">
          ¿Cómo lo hacemos?
        </div>
        <div style={{ color: theme.textPrimary }} className="my-5 leading-tight font-abc2 text-[20px] text-center xl:w-[550px] xl:mt-2">
          El secreto está en nuestra experiencia, especialización y acompañamiento cercano en áreas como:
        </div>
      </div>
      <div className="mt-16 xl:mt-1">
        <SliderServices />
      </div>
    </div>
  );
};