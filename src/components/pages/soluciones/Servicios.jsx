import React from "react";

import { Animacion } from "../../common/Animacion";

import { ServiceData } from "../../../constants";

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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="relative mx-auto w-full flex flex-col pt-20 border xl:flex xl:flex-row xl:justify-center xl:h-[900px] xl:px-24">
      <div className="absolute xl:w-[400px] xl:h-[400px] xl:top-[80px] xl:left-[10px]">
        <Animacion />
      </div>

      <div className=" mx-auto w-full h-[450px] items-center justify-center xl:pt-20 ">
        <div className="w-full h-[450px] px-6 flex flex-col justify-evenly items-center xl:w-[500px] xl:h-[300px] xl:relative xl:flex xl:place-content-evenly xl:items-start xl:px-0">
          <p className="z-10 leading-none my-2 text-center xl:w-[480px] font-abc2 text-skyBlue font-extrabold text-[45px] xl:text-left xl:my-0">
            ¿Por qué confiar en nosotros?{" "}
          </p>
          <p className="z-10 leading-tight my-2 text-center xl:w-[480px] font-abc2 text-skyBlue text-[20px] xl:text-left xl:mt-0 xl:mb-4 xl:pt-3 ">
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
        {ServiceData.map((item, index) => (
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
                {item.content}
              </Typography>
              <Button>Conocer más</Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
