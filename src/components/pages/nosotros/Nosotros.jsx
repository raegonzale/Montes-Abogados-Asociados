import { HeaderTwo } from "../../common/HeaderTwo"
import { History} from "../../pages/nosotros/History"
import { Contact } from "../../common/Contact"
import { Footer } from "../../common/Footer"
import { Profile} from "../../pages/nosotros/Profile"
import { Form } from "../../common/Form"
import { Team } from "./Team"
import { SliderTwo } from "../../common/SliderTwo"
import TitleAboutUs from "./TitleAboutUs"


export const Nosotros = () => {
  return (
    <div>

     <HeaderTwo/>
     <TitleAboutUs/>
     <History/>
     <Team/>
     <SliderTwo/>
     <Profile/>
     <Contact/>
     <Form/>
     <Footer/>
     </div>
  )
}

