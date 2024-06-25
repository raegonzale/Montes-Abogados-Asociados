import React, { useContext } from "react";
import { Animacion } from "../../common/Animacion";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { blue, blueGrey } from "@mui/material/colors";
import { ServiceContext } from "../../../context/ServiceContext";
import { Link } from "react-router-dom";

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const Servicios = () => {
  const [expanded, setExpanded] = React.useState(false);
  const services = useContext(ServiceContext);
  console.log(services);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="relative mx-auto w-full flex flex-col h-[1200px] pt-24 px-6 xl:max-w-[1280px] xl:pt-1 xl:flex xl:flex-row xl:justify-center xl:h-[710px] xl:px-24">
      <div className="absolute xl:top-[60px] xl:w-[400px] xl:h-[400px] xl:left-[10px]">
        <Animacion />
      </div>

      <div className=" mx-auto xl:pt-20 w-full h-[450px] items-center justify-center ">
        <div className="w-full h-[450px] flex flex-col justify-evenly items-center xl:w-[500px] xl:h-[300px] xl:relative xl:flex xl:place-content-evenly xl:items-start xl:px-0">
          <p className="z-10 leading-none my-2 text-center font-abc2 text-skyBlue font-extrabold text-[38px] xl:w-[480px] xl:text-[45px] xl:text-left xl:my-0">
            ¿Por qué confiar en nosotros?{" "}
          </p>
          <p className="z-10 leading-tight text-center font-abc2 text-skyBlue text-[20px] xl:w-[480px] xl:text-left xl:mt-0 xl:mb-4 xl:pt-3 ">
            Hacemos un acompañamiento real y cercano a las personas y compañías
            que nos otorgan su voto de confianza al contratarnos. Por nos
            especializamos en áreas clave para el crecimiento de tu negocio
          </p>

          <Button className="xl:mt-10 w-40" variant="contained">
            ¿Comenzamos?
          </Button>
        </div>
      </div>

      <div className="relative h-full px-6 py-5 xl:w-[1000px] xl:pt-20 xl:px-0">
        {services.map(
          (
            item,
            index // Usar los servicios del contexto
          ) => (
            <Accordion
              key={index}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <AccordionSummary
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                className="hover:bg-blue hover:bg-opacity-10"
              >
                <IconButton
                  sx={{ color: blue[700] }}
                  size="large"
                  aria-label="Account"
                >
                  <AccountBalanceIcon fontSize="inherit" />
                </IconButton>

                <Typography
                  className="flex items-center "
                  sx={{ fontSize: "18px", color: blue[700] }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "13px", color: blueGrey[900] }}>
                  {item.abstract}
                </Typography>

                <Link to={`/soluciones/${item.id}`}>
                  <Button>Conocer más</Button>
                </Link>
              </AccordionDetails>
            </Accordion>
          )
        )}
      </div>
    </div>
  );
};
