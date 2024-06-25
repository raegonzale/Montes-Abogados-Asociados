
export const SliderTwo = () => {
  return (
    <div>
      <div className="border border-red flex items-center justify-items-evenly overflow-hidden space-x-16 h-36">
        <div className="space-x-16 flex animate-loop-scroll text-xs text-center">
          {/* Duplicar contenido para efecto continuo */}
          <div className="-[1500px] border flex items-center justify-center">
            <span className="text-[100px] leading-none font-black font-abc2 text-skyBlue">
              Conoce nuestro equipo
            </span>
          </div>
          <div className="w-[1500px] border flex items-center justify-center">
            <span className="text-[100px] leading-none font-black font-abc2 text-skyBlue">
              Conoce nuestro equipo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
