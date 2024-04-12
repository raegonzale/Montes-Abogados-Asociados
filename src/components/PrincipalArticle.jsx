import portada1 from '../assets/images/portada1.png';
import portada2 from '../assets/images/portada2.png';


export const PrincipalArticle = () => {
  return (
    <div>

      

              <div className =" h-[600px] relative">
                


                <div className=" border border-red absolute top-32 flex flex-col px-6 xl:h-[400px] xl:w-[700px] xl:pl-24">
                  <article className="text-skyBlue mt-3 font-abc2 text-[30px] leading-none">¿Que Hacemos?</article>          
                  <article className="my-2 text-blue font-abc text-[40px] font-semibold leading-tight text-center xl:text-left">Apoyamos el crecimiento de tu empresa con</article>
                  <article className="my-2 text-skyBlue font-abc text-[20px] leading-tight text-center xl:text-left">soluciones jurídicas y de gestión, enfocadas en impulsar el desarrollo, competitividad y eficiencia de tu negocio.</article>
                  <button onclick="#" className="mt-7 font-abc h-[35px] items-center rounded-lg shadow-sm shadow-skyBlue bg-blue text-white text-[14px] xl:w-[150px] ">¿Comenzamos?</button>
                </div>
                
              </div>

              <div className='absolute z-10 w-72 h-72 bg-grey rounded-full right-60 top-16 mix-blend-multiply filter blur-xl opacity-30 animate-blob '></div>
                <div className='absolute z-10 w-72 h-72 bg-blue rounded-full right-48 bottom-20 mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-4000'></div>
                <div className='absolute z-10 w-72 h-72 bg-skyBlue  rounded-full right-24 top-36 mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-2000'></div>

     </div>
 )
}
