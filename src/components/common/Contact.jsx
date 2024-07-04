import { Parallax } from 'react-parallax';
import buildings from "../../assets/images/edificios.jpg";

export const Contact = () => {
  return (
    <div>
      <Parallax
        bgImage={buildings}
        bgImageAlt="background"
        strength={130}
        style={{ height: '100vh' }}
        bgImageStyle={{ objectFit: 'cover', objectPosition: 'center' }}
        bgImageSizes="(max-width: 768px) 100vw, 50vw"
      >
        <div className="relative h-screen will-change-transform">
          <div className="absolute w-full h-full bg-skyBlue opacity-40"></div>
          <div className="relative h-full flex flex-col justify-center items-center">
            <article className="px-6 text-[50px] text-center text-white leading-none font-abc2 font-black xl:w-[700px] xl:text-[65px]">
              ¿Listo para llevar tu empresa a un nuevo nivel de eficiencia y seguridad jurídica?
            </article>
          </div>
        </div>
      </Parallax>
    </div>
  );
};