import { Animacion } from "../../common/Animacion";
import Button from '@mui/material/Button';

export const ThirdArticle = () => {
  return (
    <div className="relative mx-auto w-full h-[800px] xl:h-[540px] xl:flex xl:justify-center xl:items-center">
      <div className="absolute xl:w-[400px] xl:h-[400px] xl:top-[10px] xl:left-[10px]">
        <Animacion />
      </div>

      <div className="w-full h-[350px] px-6 flex flex-col justify-center xl:w-[600px] xl:h-[300px] xl:relative xl:flex xl:justify-center xl:place-content-evenly xl:pl-16 ">
        <p className="z-10 leading-none my-2 text-center xl:w-[480 px] font-abc2 text-skyBlue font-extrabold text-[50px] xl:text-left xl:my-0">
          Nuestras soluciones innovadoras
        </p>
        <p className="z-10 leading-tight my-2 text-center xl:w-[480 px] font-abc2 text-skyBlue text-[20px] xl:text-left xl:mt-0 xl:mb-4 xl:pt-3 ">
          
          han llevando sus negocios a un nuevo nivel de eficiencia y seguridad
          juridica.
        </p>


          <Button className="xl: mt-10 w-40" variant="contained">¿Comenzamos?</Button>


      </div>
      <div className="w-full h-full xl:w-[600px] xl:h-[350px] xl:relative"></div>
    </div>
  );
};
