import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import logoBlanco from "../../assets/logos/logoBlanco.png";
import logo from "../../assets/logos/logo.png";
import DarkModeButton from "./DarkModeButton.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { MenuMobile } from "../../assets/icons/MenuMobile.jsx";
import { MenuMobileBlue } from "../../assets/icons/MenuMobileBlue.jsx";
import useTheme from "../../constants/useTheme.js";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, darkMode } = useTheme();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const getLogoSrc = () => (darkMode ? logoBlanco : scrolled ? logo : logoBlanco);

  const getMobileMenuIcon = () => {
    if (darkMode) {
      return MenuMobile;
    } else {
      return scrolled ? MenuMobileBlue : MenuMobile;
    }
  };

  return (
    <header
      style={{
        backgroundColor: scrolled ? theme.background : "transparent",
        color: scrolled ? theme.textPrimary : "white",
      }}
      className={`w-full mx-auto justify-center h-[70px] fixed z-20 flex place-content-between items-center transition-all duration-500 ${scrolled ? "bg-white shadow-lg" : ""}`}
    >
      <div className="xl:w-44 hidden xl:flex">
        <Link to="/">
          <img src={getLogoSrc()} alt="Logo principal Blanco" />
        </Link>
      </div>
      <ul className="font-abc2 font-bold text-[14px] xl:h-[34px] xl:w-[500px] hidden xl:flex xl:mx-40 xl:text-[15px] xl:items-center xl:place-content-around xl:justify-around">
        <Link to="/soluciones">
          <li className={`hover:underline underline-offset-8 ${scrolled ? "hover:text-blue" : ""}`}>
            Soluciones
          </li>
        </Link>
        <Link to="/nosotros">
          <li className={`hover:underline underline-offset-8 ${scrolled ? "hover:text-blue" : ""}`}>
            Nosotros
          </li>
        </Link>
        <Link to="/insigths">
          <li className={`hover:underline underline-offset-8 ${scrolled ? "hover:text-blue" : ""}`}>
            Blog
          </li>
        </Link>
        <Link to="/contacto">
          <li className={`hover:underline underline-offset-8 ${scrolled ? "hover:text-blue" : ""}`}>
            Contacto
          </li>
        </Link>
      </ul>
      <div className="hidden xl:flex">
        <DarkModeButton />
      </div>
      <div className="w-full h-[74px] px-6 py-1 flex items-center justify-between place-content-around xl:hidden">
        <Link to="/">
          <img className={`w-[160px] ${scrolled ? "" : "w-[160px]"}`} src={getLogoSrc()} alt="Logo principal" />
        </Link>
        <MobileMenu
          scrolled={scrolled}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          Icon={getMobileMenuIcon()}
          darkMode={darkMode}
          alt="Menu Mobile"
        />
      </div>
    </header>
  );
};

export default Header;