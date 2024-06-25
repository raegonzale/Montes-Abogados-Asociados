
import { MenuMobileBlue } from "../../assets/icons/MenuMobileBlue.jsx";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png"
import DarkModeButton from "./darkModeButton.jsx";
import { useState } from "react";
import { useEffect } from "react";

export const HeaderTwo = () => {


const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener(scroll, handleScroll);
  }, []);

  return (
    <header
    className={`w-full mx-auto justify-center h-[70px] fixed z-20 flex place-content-between items-center transition-all duration-700 ${
      scrolled ? "bg-white shadow-lg" : "bg-white"
    }`}
  >
      <div className="xl:w-44 hidden xl:flex">
        <Link to="/">
          <img src={logo} alt="Logo principal" />
        </Link>
      </div>

      <ul className="font-abc2 font-bold text-skyBlue text-[14px] xl:h-[34px] xl:w-[500px] hidden xl:flex xl:mx-40 xl:text-[15px] xl:items-center xl:place-content-around xl:justify-aroun">
        <Link to="/soluciones">
          <li className="hover:text-blue hover:underline underline-offset-8 ">
            Soluciones
          </li>
        </Link>

        <Link to="/nosotros">
          <li className="hover:text-blue hover:underline underline-offset-8">
            Nosotros
          </li>
        </Link>

        <Link to="/insigths">
          <li className="hover:text-blue hover:underline underline-offset-8">
            Insigths
          </li>
        </Link>

        <Link to="/contacto">
          <li className="hover:text-blue hover:underline underline-offset-8">
            Contacto
          </li>
        </Link>
      </ul>
      <div className="hidden xl:flex">
      <DarkModeButton/>
      </div>
      
      
      <span className="w-full h-[74px] px-6 py-1 flex items-center justify-between place-content-araund xl:hidden">
        <img
          className="w-[160px] "
          src={logo}
          alt="Logo"
        />
        <MenuMobileBlue />
      </span>
    </header>
  );
}; 
