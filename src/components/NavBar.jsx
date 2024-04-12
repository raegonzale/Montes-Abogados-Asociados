import logo from '../assets/logos/logo.png';
import logoBlanco from '../assets/logos/logoBlanco.png';
import logoAzul from '../assets/logos/logoAzul.png';

import {DarkMode} from '../assets/icons/DarkMode.jsx';
import {Language} from  '../assets/icons/Language.jsx';
import {MenuMobile} from '../assets/icons/MenuMobile.jsx';


export const NavBar = () => {
  return (
    <>
    <ul className="font-abc text-white xl:h-[34px] xl:w-[500px] text-[14px] hidden xl:flex xl:mx-16 xl:text-[14px] 
    xl:items-center xl:place-content-around">
        <li>
          <a href="#">Soluciones</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Talentos</a>
        </li>
        <li>
          <a href="#">Insigths</a>
        </li>
        <li>
          <a href="#">Clientes</a>
        </li>
        
    </ul>  
    <span className="xl:h-[34px] xl:w-[230px] hidden xl:items-center xl:flex xl:place-content-around xl:justify-around">
      <button onclick="#" className= "xl:w-[120px] xl:h-[35px] items-center rounded-lg bg-white text-blue text-[14px] font-abc">Contactanos</button>
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

