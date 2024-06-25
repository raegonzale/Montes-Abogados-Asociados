import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../../../context/ServiceContext";
import { HeaderTwo } from "../../common/HeaderTwo";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Contact } from "../../common/Contact";
import { Form } from "../../common/Form";
import { Footer } from "../../common/Footer";

const ServiceDetails = () => {
  const { serviceDataId } = useParams();
  const dataServices = useContext(ServiceContext);
  const [serviceSelected, setServiceSelected] = useState(null);

  useEffect(() => {
    const foundService = dataServices.find(
      (service) => service.id === parseInt(serviceDataId)
    );
    setServiceSelected(foundService);
  }, [serviceDataId, dataServices]);

  if (!serviceSelected) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <div>
      <HeaderTwo />

      <div className="mx-auto items-center xl:pt-28 xl:pb-20 xl:flex xl:flex-row xl:justify-evenly xl:max-w-[1280px] xl:px-24 ">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              mt: 1,
              ml: 1,
              width: 300,
              height: 380,
            },
          }}
        >
          <Paper elevation={10}>
            {" "}
            <img
              src={serviceSelected.backgroundImage}
              alt=""
              style={{ width: "100%", height: "100%", display: "block" }}
            />{" "}
          </Paper>
        </Box>

<div className=" xl:pl-16">

<div className="mx-auto w-auto xl:h-[110px]">
      <div className="relative">
        <div className="absolute pl-5 font-abc2 text-[70px] text-blue text-opacity-10 font-black">
        {serviceSelected.title}
        </div>
        <div className="absolute font-abc2 xl:pt-10 text-[50px] text-blue font-black">
        {serviceSelected.title}
        </div>
      </div>
    </div>

        <div className="font-abc2 text-skyBlue leading-tight xl:text-[20px] xl:pt-5">{serviceSelected.content}</div>
        
        </div>



      </div>

      <Contact />
      <Form />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
