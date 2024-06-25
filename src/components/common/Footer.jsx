import InstagramIcon from "@mui/icons-material/Instagram";
import { blue } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logoCuadrado from "../../assets/logos/logoCuadrado.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full h-[800px] mx-auto py-6 flex flex-col items-center px-6 bg-grey text-blue font-abc2 xl:grid xl:grid-cols-4 xl:h-[400px] xl:px-24 xl:pt-[50px] xl:gap-x-6 xl:gap-y-2 xl:items-start">
      <div className="flex flex-col justify-between items-center xl:max-w-[400px] xl:col-span-2 xl:flex xl:flex-col xl:items-start">
        <div className="max-w-[50px] py-2">
          <Link to="/">
            <img src={logoCuadrado} alt="Logo principal Blanco" />
          </Link>
          <Link to=""></Link>
        </div>
        <div className="py-2 text-center text-[16px] xl:text-left ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <div className="py-2 text-center text-[16px] leading-8 xl:text-left">
        <ul>
          <li className="font-black underline text-[18px] text-skyBlue">
            Mapa del sitio
          </li>
          <li className="hover:text-skyBlue">Soluciones</li>
          <li className="hover:text-skyBlue">Nosotros</li>
          <li className="hover:text-skyBlue">Insights</li>
          <li className="hover:text-skyBlue">Contacto</li>
        </ul>
      </div>

      <div className="text-center py-2 text-[16px] xl:text-left">
        <p className="font-black underline text-[18px] text-skyBlue">
          Contactanos
        </p>
        <p className="font-black">Dirección</p>
        <p>Bogotá D.C., Cundinamarca Calle 106 No. 58 - 27 Of 706</p>
        <p className="font-black ">Celular</p>
        <p>3007257266</p>
        <p className="font-black ">Correo electronico</p>
        <p>claudia@montes-a.com</p>
      </div>

      <div className="items-center col-span-2 col-start-3 xl:flex xl:flex-row xl:justify-end">
        <IconButton
          sx={{ color: blue[700] }}
          size="large"
          aria-label="Instagram"
        >
          <InstagramIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          sx={{ color: blue[700] }}
          size="large"
          aria-label="Facebook"
        >
          <FacebookIcon fontSize="inherit" />
        </IconButton>

        <IconButton sx={{ color: blue[700] }} size="large" aria-label="YouTube">
          <YouTubeIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          sx={{ color: blue[700] }}
          size="large"
          aria-label="Linkedin"
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          sx={{ color: blue[700] }}
          size="large"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="text-center  xl:col-span-4 ">
        <p className="xl:flex justify-center items-center xl:h-10 ">
          Todos los derechos reservados Montes Abogados Asociados S.A.S ©2024
        </p>
      </div>
    </div>
  );
};
