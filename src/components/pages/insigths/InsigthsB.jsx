import { HeaderTwo } from "../../common/HeaderTwo"
import { Contact } from "../../common/Contact"
import { Footer } from "../../common/Footer"
import { Blog } from "../../../components/pages/insigths/Blog"
import { Form } from "../../common/Form"
import TitleInsigths from "./TitleInsigths"



export const InsigthsB = () => {
  return (
    <div>
     <HeaderTwo/>
     <TitleInsigths/> 
     <Blog/>
     <Contact/>
     <Form/>
     <Footer/>
    </div>
  )
}

