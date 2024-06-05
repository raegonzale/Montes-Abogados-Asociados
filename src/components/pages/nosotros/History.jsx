import Button from '@mui/material/Button';

export const History = () => {
  return (
    <div className="border border-red relative w-full mx-auto flex flex-col justify-center items-center xl:flex xl:flex-col xl:items-center xl:px-24 xl:justify-center xl:pt-32">
        
        <div className="border border-blue flex flex-col items-center justify-center ">
        <div className="border w-[500px]">Nosotros somos y esta es nuestra historia</div>
        <div className="border w-[550px]"> 
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          </p>
          <Button className="xl: mt-20 w-40" variant="contained">¿Comenzamos?</Button>
          </div>
        </div>  

        <div>
            <div>imagen foto del equipo con efecto parallax </div>
        </div>

        <div>
            
           <div></div> 
            <div>carrusel infinito con frase este es nuestro talento</div>
        </div>








    </div>
  )
}
