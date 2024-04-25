import logo from '../assets/logos/logo.png';
import logoBlanco from '../assets/logos/logoBlanco.png';
import logoAzul from '../assets/logos/logoAzul.png';

import { NavBar } from './NavBar';


export const Header = () => {
  return (
    <header className='w-full mx-auto justify-center h-[80px] fixed z-10 flex place-content-between items-center'>
    
    <div className="xl:w-60 px-1 hidden ">
      <img src={logo} alt="Logo principal degrade" />
    </div>

    <div className="xl:w-60 px-1 hidden xl:flex">
      <img src={logoBlanco} alt="Logo principal Blanco" />
    </div>

    <div className="xl:w-60 px-1 hidden">
      <img src={logoAzul} alt="Logo principal Azul" />
    </div>

      <NavBar />
      

    </header>
  )
}

