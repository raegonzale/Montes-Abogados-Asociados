import useTheme from "../../constants/useTheme.js";

export const Animacion = () => {
  const { theme } = useTheme();

  return (
    <div className={`relative xl:w-400 xl:h-400`}>
      <div
        style={{ backgroundColor: theme.animation1 }}
        className="absolute w-40 h-40 xl:w-72 xl:h-80 top-20 left-2 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"
      ></div>
      <div
        style={{ backgroundColor: theme.animation1 }}
        className="absolute w-40 h-40 xl:w-72 xl:h-72 top-20 left-28 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"
      ></div>
      <div
        style={{ backgroundColor: theme.animation1 }}
        className="absolute w-40 h-40 xl:w-60 xl:h-80 top-40 left-16 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-3000"
      ></div>
    </div>
  );
};