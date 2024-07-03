import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useTheme from "../../../constants/useTheme.js";
import { Animacion } from "../../common/Animacion";

export const ThirdArticle = () => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.background }} className="relative mx-auto w-full xl:flex xl:justify-center xl:items-center xl:h-[540px]">
      <div className="absolute xl:w-[400px] xl:h-[400px] xl:top-[10px] xl:left-[10px]">
        <Animacion style={{ backgroundColor: theme.secondary }} />
      </div>
      <div className="w-full h-[350px] px-6 flex flex-col items-center xl:w-[600px] xl:h-[300px] xl:flex xl:flex-col xl:justify-center xl:pl-[70px] xl:items-start">
        <p style={{ color: theme.primary }} className="z-10 leading-none my-5 text-center xl:w-[480px] font-abc2 font-extrabold text-[50px] xl:text-left xl:my-0">
          Nuestras soluciones innovadoras
        </p>
        <p style={{ color: theme.textPrimary }} className="z-10 leading-tight mb-5 text-center xl:w-[480px] font-abc2 text-[20px] xl:text-left xl:mt-2 xl:mb-5">
          Han llevado sus negocios a un nuevo nivel de eficiencia y seguridad jurídica.
        </p>
        <Link to="/contacto">
          <Button className="mt-20 w-40 items-start" aria-label="Contacto" variant="contained" style={{ backgroundColor: theme.primary, color: theme.text }}>
            ¿Comenzamos?
          </Button>
        </Link>
      </div>
      <div className="w-full h-full xl:w-[600px] xl:h-[350px] xl:relative"></div>
    </div>
  );
};