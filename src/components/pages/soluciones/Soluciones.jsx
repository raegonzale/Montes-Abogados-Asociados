import { HeaderTwo } from "../../common/HeaderTwo"
import { Servicios } from "../soluciones/Servicios"
import { Contact } from "../../common/Contact"
import { Footer } from "../../common/Footer"
import { TitleSolutions } from "./TitleSolutions"
import { Form } from "../../common/Form"

export const Soluciones = () => {
  return (
    <div className="mx-auto items-center w-full">
      
      <HeaderTwo/>
      <TitleSolutions/>
      <Servicios/>
      <Contact/>
      <Form/>
      <Footer/>
    </div>
  )
}

