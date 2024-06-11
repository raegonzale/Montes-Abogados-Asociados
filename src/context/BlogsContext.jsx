import { createContext } from "react";
import PropTypes from "prop-types";
import societario from "../assets/images/societario.jpg";

export const BlogsContext = createContext();

const BlogsContextProvider = ({ children }) => {
  const dataBlog = [
    {
      id: 1,
      title: "Protección constitucional del fuero de salud",
      subtitle: "",
      abstract:
        "Acompañanos para conocer mas sobre el fuero en salud, derechos y deberes de empleadores y colaboradores.",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024/02/21",
      img: societario,
      link: "",
    },

    {
      id: 2,
      title: "Derechos y obligaciones laborales",
      subtitle: "",
      abstract:
        "¿Cuales son tus derechos y obligaciones laborales? lo que debes conocer para una relación optima con tu empleador.",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024/03/10",
      img: societario,
      link: "",
    },

    {
      id: 3,
      title: "Derechos y obligaciones laborales",
      subtitle: "",
      abstract:
        "¿Cuales son tus derechos y obligaciones laborales? lo que debes conocer para una relación optima con tu empleador.",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024/03/10",
      img: societario,
      link: "",
    },

    {
      id: 4,
      title: "Derechos y obligaciones laborales",
      subtitle: "",
      abstract:
        "¿Cuales son tus derechos y obligaciones laborales? lo que debes conocer para una relación optima con tu empleador.",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024/03/10",
      img: societario,
      link: "",
    },

    {
      id: 5,
      title: "Derechos y obligaciones laborales",
      subtitle: "",
      abstract:
        "¿Cuales son tus derechos y obligaciones laborales? lo que debes conocer para una relación optima con tu empleador.",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024/03/10",
      img: societario,
      link: "",
    },

    {
      id: 6,
      title: "Derechos y obligaciones laborales",
      subtitle: "",
      abstract:
        "¿Cuales son tus derechos y obligaciones laborales? lo que debes conocer para una relación optima con tu empleador.",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024/03/10",
      img: societario,
      link: "",
    },

    {
      id: 7,
      title: "Derechos y obligaciones laborales",
      subtitle: "",
      abstract:
        "¿Cuales son tus derechos y obligaciones laborales? lo que debes conocer para una relación optima con tu empleador.",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024/03/10",
      img: societario,
      link: "",
    },
  ];

  return (
    <BlogsContext.Provider value={dataBlog}>{children}</BlogsContext.Provider>
  );
};

BlogsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogsContextProvider;
