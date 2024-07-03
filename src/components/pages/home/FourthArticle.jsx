import { Animacion } from "../../common/Animacion";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useTheme from "../../../constants/useTheme.js";

export const FourthArticle = () => {
  
  const { theme } = useTheme();
  return (
    <div>
      <div style={{ backgroundColor: theme.background, color: theme.textPrimary }} className="relative w-full h-[600px] mx-auto px-6 xl:px-20 justify-center items-center xl:h-[300px] xl:flex xl:flex-col">
        <div className="absolute left-1 xl:w-[400px] xl:h-[400px] xl:top-[-150px] xl:left-[800px]">
          <Animacion />
        </div>
        <div className="h-[500px] flex flex-col justify-center items-center xl:h-[150px]">
          <div className="flex flex-col items-center justify-center text-xs text-center xl:flex xl:justify-center xl:space-x-16 xl:items-baseline xl:flex-row">
            <div className="h-[100px] xl:w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold">
                93%
              </span>
              <br />
              <span className="text-[18px] font-abc2">
                Disminución en litigios laborales
              </span>
            </div>
            <div className="h-[100px] xl:w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold">
                +50
              </span>
              <br />
              <span className="text-[18px] font-abc2">
                Empresas satisfechas
              </span>
            </div>
            <div className="h-[100px] xl:w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold">
                +15
              </span>
              <br />
              <span className="text-[18px] font-abc2">
                Años de experiencia
              </span>
            </div>
            <div className="h-[100px] xl:w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold">
                80%
              </span>
              <br />
              <span className="text-[18px] font-abc2">
                Aumento en eficiencia en la administracion de recursos legales
              </span>
            </div>
          </div>
        </div>
        <Link to="/contacto">
          <Button className="max-w-100" variant="contained" aria-label="Contacto">
            Queremos demostrarte lo que podemos hacer
          </Button>
        </Link>
      </div>
    </div>
  );
};
