import { Animacion } from "../../common/Animacion";
import Button from '@mui/material/Button';

export const FourthArticle = () => {
  return (
    <div>
      <div className="relative w-full h-[600px] mx-auto px-20 justify-center items-center xl:h-[300px] xl:flex xl:flex-col">

      <div className="absolute xl:w-[400px] xl:h-[400px] xl:top-[-150px] xl:end-[35px]">
        <Animacion />
      </div>

        <div className="h-[500px] flex flex-col justify-center items-center xl:h-[150px]">
          <div className="flex flex-col items-center justify-center text-xs text-center xl:flex xl:justify-center xl:space-x-16 xl:items-baseline xl:flex-row">
            
            
            <div className="h-[100px] xl:w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold text-skyBlue">
                93%
              </span>
              <br />
              <span className="text-[18px] font-abc2 text-skyBlue">
                Disminución en litigios laborales
              </span>
            </div>

            <div className="h-[100px] xl:w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold text-skyBlue">
                +50
              </span>
              <br />
              <span className="text-[18px] font-abc2 text-skyBlue">
                Empresas satisfechas
              </span>
            </div>

            <div className="h-[100px] xl:w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold text-skyBlue">
                +15
              </span>
              <br />
              <span className="text-[18px] font-abc2 text-skyBlue">
                Años de experiencia
              </span>
            </div>

            <div className="h-[100px] xl:w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold text-skyBlue">
                +80%
              </span>
              <br />
              <span className="text-[18px] font-abc2 text-skyBlue">
                Aumento en eficiencia en la administracion de recursos legales
              </span>
            </div>
          </div>
        </div>

          <Button className=" w-100" variant="contained">Queremos demostrarte lo que podemos hacer</Button>

      </div>


    </div>
  );
};
