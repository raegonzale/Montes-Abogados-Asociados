//Componente con el articulo principal de la pagina//
import video from "../../../assets/video/video.mp4";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export const PrincipalArticle = () => {
  return (
    <div>
      <div className="h-[600px] relative xl:flex xl:justify-center">
        Fondo del articulo principal compuesta por el video y una capa filtro
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
        <div className="absolute top-40 flex flex-col items-center px-6 xl:top-52 xl:items-end xl:h-[400px] xl:w-[700px] xl:ml-[400px]">
          <article className="my-1 text-white font-abc2 text-[50px] font-extrabold text-center xl:text-right leading-none">
            Impulsamos el crecimiento de tu empresa con
          </article>
          <article className="my-1 mb-5 text-white font-abc2 text-[20px] leading-tight text-center xl:text-right ">
            soluciones jurídicas y de gestión, enfocadas en fortalecer el
            desarrollo, competitividad y eficiencia de tu negocio.
          </article>
          
          <Link to="/contacto">
             <Button className="xl:mt-20 w-40" variant="contained">¿Comenzamos?</Button>
          </Link>


        </div>
      </div>
    </div>
  );
};
