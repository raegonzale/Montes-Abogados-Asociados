import { createContext } from "react";
import PropTypes from "prop-types";
import adminRH from "../assets/images/adminRH.jpg";
import cartera from "../assets/images/cartera.jpg";
import comercial from "../assets/images/comercial.jpg";
import intelectual from "../assets/images/intelectual.jpg";
import laboral from "../assets/images/laboral.jpg";
import societario from "../assets/images/societario.jpg";

export const ServiceContext = createContext();

const ServiceContextProvider = ({ children }) => {
  const serviceData = [
    {
      id: 1,
      title: "Recursos Humanos",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: adminRH,
    },
    {
      id: 2,
      title: "Recaudo de Cartera",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: cartera,
    },
    {
      id: 3,
      title: "Derecho Comercial",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: comercial,
    },
    {
      id: 4,
      title: "Propiedad Intelectual",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: intelectual,
    },
    {
      id: 5,
      title: "Derecho Laboral",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: laboral,
    },
    {
      id: 6,
      title: "Derecho Societario",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: societario,
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