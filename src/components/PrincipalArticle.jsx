//Componente con el articulo principal de la pagina//
import video from  '../assets/video/video.mp4';

export const PrincipalArticle = () => {
  return (
    <div>
      <div className ="h-[600px] relative xl:flex xl:justify-center">

        Fondo del articulo princilal compuesta por el video y una capa filtro para lograr un efecto oscuro
        <video muted autoPlay loop className='absolute top-0 left-0 w-full h-full object-cover'>
          <source src={video} type= "video/mp4" /> 
        </video>
        Capa usada como filtro
        <div className='absolute top-0 left-0 w-full h-full object-cover bg-skyBlue mix-blend-multiply opacity-50'></div>
          
        Texto del articulo principal  
        <div className="absolute top-32 flex flex-col xl:top-44 xl:items-end px-6 xl:h-[400px] xl:w-[900px] xl:ml-52">
          <article className="my-2 text-white font-abc2 text-[40px] font-bold leading-tight text-center xl:text-right xl:text-[60px] ">Impulsamos el crecimiento de tu empresa con</article>
          <article className="my-2 text-lightBlue font-abc2 text-[24px] leading-tight text-center xl:text-right ">soluciones jurídicas y de gestión, enfocadas en impulsar el desarrollo, competitividad y eficiencia de tu negocio.</article>
          <button onClick="#" className="mt-7 font-abc h-[40px] items-center rounded-lg hover:text-white hover:bg-gradient-to-r from-lightBlue to-skyBlue hover:border-blue hover:border-1 text-white border-white border-2 text-[16px] xl:w-[170px]">¿Comenzamos?</button>
        </div>
      </div>
    </div>
)
}
