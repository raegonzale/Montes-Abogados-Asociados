import { Parallax } from 'react-parallax';
import { useInView } from "react-intersection-observer";
import buildings from "../../assets/images/edificios.webp";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Contact = () => {
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
    <div>
      <Parallax
        bgImage={buildings}
        bgImageAlt="background"
        strength={150}
        style={{ height: '500px' }}
        bgImageStyle={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
      >
        <div className="relative h-screen will-change-transform">
          <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply"></div> {/* Capa adicional para mix-blend-multiply */}
          <div className="absolute w-full h-[500px] bg-skyBlue opacity-40 mix-blend-multiply"></div>
          <div className="relative h-[500px] flex flex-col justify-center items-center">
            <motion.article
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="px-6 text-[50px] text-center text-white leading-none font-abc2 font-black xl:w-[700px] xl:text-[65px] sm:px-4 sm:text-[30px]"
            >
              ¿Listo para llevar tu empresa a un nuevo nivel de eficiencia y seguridad jurídica?
            </motion.article>
          </div>
        </div>
      </Parallax>
    </div>
  );
};