import useTheme from "../../../constants/useTheme";

export const SliderTwo = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{ background: theme.background, color: theme.textSecondary }}
      className="flex justify-around overflow-hidden h-20 xl:h-32"
    >
      <div className="flex w-full animate-loop-scroll space-x-60 md:space-x-10 xl:space-x-20">
        {Array(8).fill("").map((_, index) => (
          <div key={index} className="w-full flex items-center justify-center">
            <span
              style={{ opacity: 0.6 }}
              className="leading-none font-black font-abc2 whitespace-nowrap text-[55px] md:text-[70px] lg:text-[100px] xl:text-[100px]"
            >
              Conoce nuestro equipo
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};