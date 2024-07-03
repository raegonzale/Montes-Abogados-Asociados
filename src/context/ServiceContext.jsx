import { createContext } from "react";
import PropTypes from "prop-types";
import adminRH from "../assets/images/adminRH.jpg";
import cartera from "../assets/images/cartera.jpg";
import comercial from "../assets/images/comercial.jpg";
import intelectual from "../assets/images/intelectual.jpg";
import laboral from "../assets/images/laboral.jpg";
import societario from "../assets/images/societario.webp";

import EngineeringIcon from '@mui/icons-material/Engineering';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';


export const ServiceContext = createContext();

const ServiceContextProvider = ({ children }) => {
  const serviceData = [
    {
      id: 1,
      title: "Recursos Humanos",
      abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      backgroundImage: adminRH,
      icon:<EngineeringIcon fontSize="inherit" />,
    },
    {
      id: 2,
      title: "Recaudo de Cartera",
      abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      backgroundImage: cartera,
      icon:<MonetizationOnIcon fontSize="inherit" />,
    },
    {
      id: 3,
      title: "Derecho Comercial",
      abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      backgroundImage: comercial,
      icon:<StorefrontIcon fontSize="inherit" />,
    },
    {
      id: 4,
      title: "Propiedad Intelectual",
      abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      backgroundImage: intelectual,
      icon:<TipsAndUpdatesIcon fontSize="inherit" />,
    },
    {
      id: 5,
      title: "Derecho Laboral",
      abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      backgroundImage: laboral,
      icon:<AccountBalanceIcon fontSize="inherit" />,
    },
    {
      id: 6,
      title: "Derecho Societario",
      abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      backgroundImage: societario,
      icon:<BusinessIcon fontSize="inherit" />,
    },

  ];

  return (
    <ServiceContext.Provider value={serviceData}>
      {children}
    </ServiceContext.Provider>
  );
};

ServiceContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ServiceContextProvider;