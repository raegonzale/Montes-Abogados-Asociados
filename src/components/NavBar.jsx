import logo from '../assets/logos/logo.png';
import logoBlanco from '../assets/logos/logoBlanco.png';
import logoAzul from '../assets/logos/logoAzul.png';

import {DarkMode} from '../assets/icons/DarkMode.jsx';
import {Language} from  '../assets/icons/Language.jsx';
import {MenuMobile} from '../assets/icons/MenuMobile.jsx';


export const NavBar = () => {
  return (
    <>
    <ul className="font-abc text-white text-[14px] xl:h-[34px] xl:w-[700px] hidden xl:flex xl:mx-16 xl:text-[15px] xl:items-center xl:place-content-around">
        <li className='hover:text-lightBlue'>
          <a href="#">Soluciones</a>
        </li>
        <li className='hover:text-lightBlue'>
          <a href="#">Nosotros</a>
        </li>
        <li className='hover:text-lightBlue'>
          <a href="#">Talentos</a>
        </li>
        <li className='hover:text-lightBlue'>
          <a href="#">Insigths</a>
        </li >
        <li className='hover:text-lightBlue'>
          <a href="#">Clientes</a>
        </li>
        <li className='hover:text-lightBlue'>
          <a href="#">Contacto</a>
        </li>

    </ul>  
    <span className="xl:h-[34px] xl:w-[70px] hidden xl:items-center xl:flex xl:place-content-around xl:justify-around">
      <Language/>
      <DarkMode/>
    </span>
    
    <span className=" w-full h-[74px] px-3 flex items-center place-content-around justify-between xl:hidden" >
      <img className="w-[200px] sm:w-[250px] px-2 " src={logoBlanco} alt="Logo principal" />
      <MenuMobile/ >
    </span>
    </>
  )
}

