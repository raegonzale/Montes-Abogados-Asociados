import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logoCuadrado from "../../assets/logos/logoCuadrado.webp"
import logoCuadradoBlanco from "../../assets/logos/logoCuadradoBlanco.webp";
import { Link } from "react-router-dom";
import useTheme from '../../constants/useTheme';

const socialMediaLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/montesabogadosasoc/",
    icon: <InstagramIcon fontSize="inherit" alt="Instagram" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61557949184503",
    icon: <FacebookIcon fontSize="inherit" alt="Facebook" />,
  },
  {
    label: "YouTube",
    href: "",
    icon: <YouTubeIcon fontSize="inherit" alt="YouTube" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/montes-abogados-asociados/?viewAsMember=true",
    icon: <LinkedInIcon fontSize="inherit" alt="LinkedIn" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573007257266",
    icon: <WhatsAppIcon fontSize="inherit" alt="WhatsApp" />,
  },
];

export const Footer = () => {
  const { theme, darkMode } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.footer,
        color: theme.textPrimary,
      }}
      className="w-full mx-auto py-6 flex flex-col items-center px-6 xl:grid xl:grid-cols-4 xl:h-[400px] xl:px-24 xl:pt-[50px] xl:gap-x-6 xl:gap-y-2 xl:items-start"
    >
      <div className="flex flex-col justify-between items-center xl:max-w-[400px] xl:col-span-2 xl:flex xl:flex-col xl:items-start">
        <div className="max-w-[60px] py-2">
          <Link to="/">
            <img src={darkMode ? logoCuadradoBlanco : logoCuadrado} alt="Logo principal" />
          </Link>
        </div>
        <div style={{ color: theme.textPrimary }} className="py-2 text-center text-[14px] xl:text-left font-abc2">
          Montes Abogados Asociados se fundó para apoyar a nuestros clientes en la gestión eficiente de sus procesos jurídicos. Nos destacamos por nuestra rigurosidad, excelencia en conceptos legales, calidad y experiencia profesional. Innovamos en áreas como la administración de recursos humanos, recuperación de cartera, derecho comercial y societario. Nuestra misión es proporcionar soluciones jurídicas de alta calidad, adaptadas a las necesidades específicas de cada cliente.
        </div>
      </div>

      <div className="py-2 text-center text-[16px] xl:text-left font-abc2">
        <ul style={{ color: theme.textPrimary }}>
          <li style={{ color: theme.primary }} className="font-black underline text-[18px]">
            Mapa del sitio
          </li>
          <Link to="/soluciones">
            <li className="hover:text-blue hover:underline">Soluciones</li>
          </Link>
          <Link to="/nosotros">
            <li className="hover:text-blue hover:underline">Nosotros</li>
          </Link>
          <Link to="/insigths">
            <li className="hover:text-blue hover:underline">Insights</li>
          </Link>
          <Link to="/contacto">
            <li className="hover:text-blue hover:underline">Contacto</li>
          </Link>
        </ul>
      </div>

      <div style={{ color: theme.textPrimary }} className="py-2 text-center text-[16px] xl:text-left xl:justify-start font-abc2">
        <p style={{ color: theme.primary }} className="font-black underline text-[18px]">
          Contáctanos
        </p>
        <p className="font-black">Dirección</p>
        <p>Bogotá D.C., Cundinamarca Calle 106 No. 58 - 27 Of 706</p>
        <p className="font-black">Celular</p>
        <p>3007257266</p>
        <p className="font-black">Correo electrónico</p>
        <p>claudia@montes-a.com</p>
      </div>

      <div className="items-center col-span-2 col-start-3 xl:flex xl:flex-row xl:justify-end">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label} // Añade aria-label para accesibilidad
          >
            <IconButton
              sx={{
                color: theme.primary,
              }}
              size="large"
            >
              {link.icon}
            </IconButton>
          </a>
        ))}
      </div>

      <div className="text-center xl:col-span-4">
        <p className="xl:flex justify-center items-center h-full font-abc2">
          Todos los derechos reservados Montes Abogados Asociados S.A.S ©2024
        </p>
      </div>
    </div>
  );
};