import video from  '../assets/video/video.mp4';


export const PrincipalArticle = () => {
  return (
    <div>

      

              <div className ="h-[600px] relative xl:flex xl:justify-center">
              
              <video muted autoPlay loop className='absolute top-0 left-0 w-full h-full object-cover'>
              <source src={video} type= "video/mp4"/> 
              </video>
              <div className='absolute top-0 left-0 w-full h-full object-cover bg-darkBlue mix-blend-multiply opacity-70'></div>
              








                <div className="absolute top-24 flex flex-col xl:items-end px-6 xl:h-[400px] xl:w-[750px] xl:ml-52">
                  <article className="my-2 text-white font-abc2 text-[40px] font-bold leading-tight text-center xl:text-right xl:text-[65px] ">Apoyamos el crecimiento de tu empresa con</article>
                  <article className="my-2 text-lightBlue font-abc text-[22px] leading-tight text-center xl:text-right ">soluciones jurídicas y de gestión, enfocadas en impulsar el desarrollo, competitividad y eficiencia de tu negocio.</article>
                  <button onclick="#" className="mt-7 font-abc2 h-[35px] items-center rounded-lg hover:text-white hover:bg-gradient-to-r from-lightBlue to-skyBlue hover:border-blue text-white border border-white  text-[16px] xl:w-[150px]">¿Comenzamos?</button>
                </div>
                
              </div>

     </div>
 )
}
