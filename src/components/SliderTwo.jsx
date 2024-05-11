

export const SliderTwo = () => {
  return (
    <div>
      <div className=" border border-red flex overflow-hidden space-x-16 group h-36">
        <div className=" space-x-16 flex items-baseline animate-loop-scroll group-hover:paused py-6 text-xs text-center">
          
          <div className="w-40 flex flex-col items-center justify-center ">
            <span className="text-[40px] font-abc2 font-bold text-skyBlue">
              93%
            </span>
            <br />
            <span className="text-[15px] font-abc2 text-skyBlue">
              Disminución en litigios laborales
            </span>
          </div>

          <div className="w-40 flex flex-col items-center justify-center ">
            <span className="text-[40px] font-abc2 font-bold text-skyBlue">
              +50
            </span>
            <br />
            <span className="text-[15px] font-abc2 text-skyBlue">
              Empresas satisfechas con nuestras soluciones
            </span>
          </div>

          <div className="w-40 flex flex-col items-center justify-center ">
            <span className="text-[40px] font-abc2 font-bold text-skyBlue">
              +15
            </span>
            <br />
            <span className="text-[15px] font-abc2 text-skyBlue">
              Años de experiencia
            </span>
          </div>


        </div>
      </div>
    </div>
  );
};
