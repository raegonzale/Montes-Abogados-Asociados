// Componente reutilizable con animación de tres circulos distorcionados//

export const Animacion = () => {
  return (
    <div>
        <div>
                <div className='absolute w-72 h-72 bg-lightBlue rounded-full right-60 top-16 mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000 '></div>
                <div className='absolute w-72 h-72 bg-blue rounded-full right-24 top-36 mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000'></div>
                <div className='absolute w-72 h-72 bg-lightBlue rounded-full right-64 top-40 mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-3000'></div>
        
        </div>
    </div>
  )
}

