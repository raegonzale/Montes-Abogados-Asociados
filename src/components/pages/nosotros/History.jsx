import useTheme from "../../../constants/useTheme";

export const History = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{ background: theme.background, color: theme.textPrimary }}
      className="relative w-full h-full mx-auto flex flex-col justify-center items-center xl:flex xl:flex-col xl:items-center xl:justify-center "
    >
      <div className="flex flex-col items-center justify-center">
        <div className=" w-full px-6 pb-5 flex items-center justify-center text-center leading-none font-abc2 font-black text-[40px] xl:text-[50px] xl:w-[1050px] xl:text-right xl:pl-20">
          Somos tus aliados para dar seguridad juridica y llevar tu empresa a un
          nuevo nivel de eficiencia.
        </div>
        <div className="w-full px-6 flex flex-col items-center justify-center leading-tight text-center text-[20px] font-abc2 xl:w-[1050px] xl:text-right xl:pl-20 ">
          <p className="pb-5 xl:pb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
