//Componente con el articulo principal de la pagina//
import video from "../../../assets/video/video.mp4";

export const PrincipalArticle = () => {
  return (
    <div>
      <div className="h-[600px] relative xl:flex xl:justify-center">
        Fondo del articulo princilal compuesta por el video y una capa filtro
        para lograr un efecto oscuro
        <video
          muted
          autoPlay
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        Capa usada como filtro
        <div className="absolute top-0 left-0 w-full h-full object-cover bg-skyBlue mix-blend-multiply opacity-50"></div>
        Texto del articulo principal
        <div className="absolute top-40 flex flex-col xl:top-52 xl:items-end px-6 xl:h-[400px] xl:w-[700px] xl:ml-80">
          <article className="my-2 text-white font-abc2 text-[50px] font-extrabold text-center xl:text-right leading-none">
            Impulsamos el crecimiento de tu empresa con
          </article>
          <article className="my-2 text-white font-abc2 text-[20px] leading-tight text-center xl:text-right ">
            soluciones jurídicas y de gestión, enfocadas en fortalecer el
            desarrollo, competitividad y eficiencia de tu negocio.
          </article>
          <button
            onClick="#"
            className="mt-7 fonabc2 h-[40px] items-center rounded-full bg-blue text-white text-[16px] xl:w-[170px] hover:bg-none hover:bg-mix-blend-multiply hover:bg-opacity-5 hover:border hover:border-white"
          >
            ¿Comenzamos?
          </button>
        </div>
      </div>
    </div>
  );
};
