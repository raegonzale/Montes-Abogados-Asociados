// Componente reutilizable con animación de tres circulos distorcionados//

export const Animacion = () => {
  return (
    <div>
        <div className="relative xl:w-[400px] xl:h-[400px]" >
                <div className='absolute w-40 h-40 xl:w-72 xl:h-80 top-20 left-2  bg-lightBlue rounded-full  xl:top-16 xl:start-20 mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000 '></div>
                <div className='absolute w-40 h-40 xl:w-72 xl:h-72 top-20 left-28 bg-lightBlue rounded-full  xl:top-36 xl:start-1 mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000'></div>
                <div className='absolute w-40 h-40 xl:w-60 xl:h-80 top-40 left-16 bg-lightBlue rounded-full  xl:top-40 xl:start-44 mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-3000'></div>

        </div>
    </div>
  )
}

