import logo from "../assets/logos/logo.png";
import logoBlanco from "../assets/logos/logoBlanco.png";

import { DarkMode } from "../assets/icons/DarkMode.jsx";
import { Language } from "../assets/icons/Language.jsx";
import { MenuMobile } from "../assets/icons/MenuMobile.jsx";
import { useRef, useState } from "react";
import { useEffect } from "react";

export const Header = () => {

  const [scrolled, setScrolled]= useState(false);
  const navRef = useRef(null);

  const handleScroll = ()=> {
    if(window.scrollY> 80) {
      setScrolled(true);
    } else {
      setScrolled(false)
    }
  };

  useEffect (() =>{
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener(scroll, handleScroll);
  },[]);
  

  return (
    <header className={`w-full mx-auto justify-center h-[80px] fixed z-10 flex place-content-between items-center transition-all duration-1000 ${scrolled ? "bg-blue shadow-sm shadow-grey " : ""}`}>
    
      <div className="xl:w-60 px-1 hidden ">
        <img src={logo} alt="Logo principal degrade" />
      </div>

      <div className="xl:w-60 px-1 hidden xl:flex">
        <img src={logoBlanco} alt="Logo principal Blanco" />
      </div>

      <ul className="font-abc text-white text-[14px] xl:h-[34px] xl:w-[700px] hidden xl:flex xl:mx-16 xl:text-[15px] xl:items-center xl:place-content-around">
        <li className="hover:text-lightBlue">
          <a href="#">Soluciones</a>
        </li>
        <li className="hover:text-lightBlue">
          <a href="#">Nosotros</a>
        </li>
        <li className="hover:text-lightBlue">
          <a href="#">Talentos</a>
        </li>
        <li className="hover:text-lightBlue">
          <a href="#">Insigths</a>
        </li>
        <li className="hover:text-lightBlue">
          <a href="#">Clientes</a>
        </li>
        <li className="hover:text-lightBlue">
          <a href="#">Contacto</a>
        </li>
      </ul>
      <span className="xl:h-[34px] xl:w-[70px] hidden xl:items-center xl:flex xl:place-content-around xl:justify-around">
        <Language />
        <DarkMode />
      </span>

      <span className=" w-full h-[74px] px-3 pt-2 flex items-center place-content-around justify-between xl:hidden">
        <img
          className="w-[210px] sm:w-[260px] "
          src={logoBlanco}
          alt="Logo principal"
        />
        <MenuMobile />
      </span>
    </header>
  );
};
