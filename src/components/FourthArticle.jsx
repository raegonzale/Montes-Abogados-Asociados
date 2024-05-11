import { Animacion } from "../components/Animacion";

export const FourthArticle = () => {
  return (
    <div>
      <div className="relative w-full mx-auto xl:h-[300px] xl:flex flex-col xl:justify-center xl:items-center  ">


        <div className="flex h-36 xl:flex xl:justify-center xl:items-center">
          <div className=" space-x-16 flex items-baseline py-6 text-xs text-center">
            <div className="w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold text-skyBlue">
                93%
              </span>
              <br />
              <span className="text-[18px] font-abc2 text-skyBlue">
                Disminución en litigios laborales
              </span>
            </div>

            <div className="w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold text-skyBlue">
                +50
              </span>
              <br />
              <span className="text-[18px] font-abc2 text-skyBlue">
                Empresas satisfechas con nuestras soluciones
              </span>
            </div>

            <div className="w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold text-skyBlue">
                +15
              </span>
              <br />
              <span className="text-[18px] font-abc2 text-skyBlue">
                Años de experiencia
              </span>
            </div>

            <div className="w-40 flex flex-col items-center justify-center ">
              <span className="text-[50px] font-abc2 font-bold text-skyBlue">
                5
              </span>
              <br />
              <span className="text-[18px] font-abc2 text-skyBlue">
                Con presencia
              </span>
            </div>
          </div>
        </div>


        <button
            onClick="#"
            className="mt-4 font-abc2 h-[40px] items-center rounded-full bg-blue text-white text-[16px] xl:w-[470px] hover:bg-gradient-to-r from-skyBlue to-lightBlue"
          >
            ¿Queremos demostrarte lo que podemos hacemos?
          </button>


      </div>


    </div>
  );
};
