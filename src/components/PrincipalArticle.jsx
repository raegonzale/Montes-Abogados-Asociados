import video from  '../assets/video/video.mp4';


export const PrincipalArticle = () => {
  return (
    <div>

      

              <div className ="h-[600px] relative xl:flex xl:justify-center">
              
              <video muted autoPlay loop className='absolute top-0 left-0 w-full h-full object-cover'>
              <source src={video} type= "video/mp4"/> 
              </video>
              <div className='absolute top-0 left-0 w-full h-full object-cover bg-darkBlue opacity-60'></div>
              








                <div className="absolute top-32 flex flex-col px-6 xl:h-[400px] xl:w-[800px] xl:items-center">
                  <article className="my-2 text-white font-abc text-[40px] font-semibold leading-tight text-center xl:text-right xl:text-[60px] ">Apoyamos el crecimiento de tu empresa con</article>
                  <article className="my-2 text-blue font-abc text-[20px] leading-tight text-center xl:text-right ">soluciones jurídicas y de gestión, enfocadas en impulsar el desarrollo, competitividad y eficiencia de tu negocio.</article>
                  <button onclick="#" className="mt-7 font-abc h-[35px] items-center rounded-lg bg-blue text-white text-[14px] xl:w-[150px]">¿Comenzamos?</button>
                </div>
                
              </div>

     </div>
 )
}
