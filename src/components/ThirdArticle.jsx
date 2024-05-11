import { Animacion } from "../components/Animacion";

export const ThirdArticle = () => {
  return (
    <div className="relative mx-auto w-full h-[800px] xl:h-[550px] xl:flex xl:justify-center xl:items-center">
      <div className="absolute xl:w-[400px] xl:h-[400px] xl:top-5 xl:left-16">
        <Animacion />
      </div>

      <div className="w-full h-[350px] px-6 flex flex-col justify-center xl:w-[500px] xl:h-[300px] xl:relative xl:flex xl:justify-center xl:place-content-evenly ">
        <p className="z-10 leading-none my-2 text-center xl:w-[480 px] font-abc2 text-skyBlue font-extrabold text-[45px] xl:text-left xl:my-0">
          Nuestras soluciones innovadoras{" "}
        </p>
        <p className="z-10 leading-tight my-2 text-center xl:w-[480 px] font-abc2 text-skyBlue text-[20px] xl:text-left xl:my-0 xl:pt-3 ">
          {" "}
          han llevando sus negocios a un nuevo nivel de eficiencia y seguridad
          juridica.{" "}
        </p>
        <button
            onClick="#"
            className="mt-4 font-abc2 h-[40px] items-center rounded-full bg-blue text-white text-[16px] xl:w-[170px] hover:bg-gradient-to-r from-skyBlue to-lightBlue"
          >
            ¿Comenzamos?
          </button>
      </div>

      <div className="w-full h-full xl:w-[600px] xl:h-[350px] xl:relative"></div>
    </div>
  );
};
