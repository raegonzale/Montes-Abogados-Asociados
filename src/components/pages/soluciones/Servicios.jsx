import React from "react";

import { Animacion } from "../../common/Animacion";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import IconButton from "@mui/material/IconButton";

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
    marginLeft: theme.spacing(3),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const Servicios = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="relative mx-auto w-full flex justify-center xl:h-[900px] xl:px-11">
      <div className="absolute xl:w-[400px] xl:h-[400px] xl:top-[80px] xl:left-[10px]">
        <Animacion />
      </div>

      <div className="mx-auto w-full xl:pt-40 ">
        <div className="w-full h-[350px] px-6 flex flex-col justify-center xl:w-[500px] xl:h-[300px] xl:relative xl:flex xl:justify-center xl:place-content-evenly xl:px-11">
          <p className="z-10 leading-none my-2 text-center xl:w-[480 px] font-abc2 text-skyBlue font-extrabold text-[50px] xl:text-left xl:my-0">
            ¿Por qué confiar en nosotros?{" "}
          </p>
          <p className="z-10 leading-tight my-2 text-center xl:w-[480 px] font-abc2 text-skyBlue text-[20px] xl:text-left xl:mt-0 xl:mb-4 xl:pt-3 ">
            Hacemos un acompañamiento real y cercano a las personas y compañías
            que nos otorgan su voto de confianza al contratarnos. Por nos
            especializamos en areas clave para el crecimiento de tu negocio
          </p>

          <Button className="xl: mt-10 w-40" variant="contained">
            ¿Comenzamos?
          </Button>
        </div>
      </div>

      <div className="relative h-full xl:w-[900px] pt-40 pr-14">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ fontSize: "20px", color: blue[700] }}>
              Gestion de recursos humanos
              <IconButton
                sx={{ color: blue[900] }}
                size="large"
                aria-label="Group"
              >
                <GroupsIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "15px", color: blueGrey[900] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button>Conocer mas</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography sx={{ fontSize: "20px", color: blue[700] }}>
              Gestion de recursos humanos
              <IconButton
                sx={{ color: blue[900] }}
                size="large"
                aria-label="Group"
              >
                <GroupsIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "15px", color: blueGrey[900] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button>Conocer mas</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{ fontSize: "20px", color: blue[700] }}>
              Gestion de recursos humanos
              <IconButton
                sx={{ color: blue[900] }}
                size="large"
                aria-label="Group"
              >
                <GroupsIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "15px", color: blueGrey[900] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button>Conocer mas</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography sx={{ fontSize: "20px", color: blue[700] }}>
              Gestion de recursos humanos
              <IconButton
                sx={{ color: blue[900] }}
                size="large"
                aria-label="Group"
              >
                <GroupsIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "15px", color: blueGrey[900] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button>Conocer mas</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography sx={{ fontSize: "20px", color: blue[700] }}>
              Gestion de recursos humanos
              <IconButton
                sx={{ color: blue[900] }}
                size="large"
                aria-label="Group"
              >
                <GroupsIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "15px", color: blueGrey[900] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button>Conocer mas</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography sx={{ fontSize: "20px", color: blue[700] }}>
              Gestion de recursos humanos
              <IconButton
                sx={{ color: blue[900] }}
                size="large"
                aria-label="Group"
              >
                <GroupsIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "15px", color: blueGrey[900] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button>Conocer mas</Button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
