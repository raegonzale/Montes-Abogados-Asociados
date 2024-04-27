// Componente reutilizable con animación de tres circulos distorcionados//

export const Animacion = () => {
  return (
    <div>
        <div>
                <div className='absolute z-10 w-72 h-72 bg-blue rounded-full right-60 top-16 mix-blend-multiply filter blur-xl opacity-50 animate-blob '></div>
                <div className='absolute z-10 w-72 h-72 bg-skyBlue rounded-full right-48 bottom-20 mix-blend-multiply blur-xl opacity-50 animate-blob animation-delay-4000'></div>
                <div className='absolute z-10 w-72 h-72 bg-lightBlue  rounded-full right-24 top-36 mix-blend-multiply blur-xl opacity-50 animate-blob animation-delay-2000'></div>
        </div>
    </div>
  )
}

