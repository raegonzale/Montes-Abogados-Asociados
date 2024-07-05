import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import useTheme from "../../../constants/useTheme";
import { SliderServices } from "./SliderServices";

export const SecondArticle = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="relative w-full h-[550px] mx-auto py-5 px-6 xl:pt-8"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="relative h-[170px] pt-20 flex flex-col justify-center items-center xl:pt-10"
      >
        <div
          style={{ color: theme.primary }}
          className="leading-none font-abc2 font-extrabold text-[50px] text-center"
        >
          ¿Cómo lo hacemos?
        </div>
        <div
          style={{ color: theme.textPrimary }}
          className="my-5 leading-tight font-abc2 text-[20px] text-center xl:w-[550px] xl:mt-2"
        >
          El secreto está en nuestra experiencia, especialización y
          acompañamiento cercano en áreas como:
        </div>
      </motion.div>
      <div className="mt-16 xl:mt-1">
        <SliderServices />
      </div>
    </div>
  );
};
