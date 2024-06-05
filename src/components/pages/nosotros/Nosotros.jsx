import { HeaderTwo } from "../../common/HeaderTwo"
import { History} from "../../pages/nosotros/History"
import { Contact } from "../../common/Contact"
import { Footer } from "../../common/Footer"
import { Profile} from "../../pages/nosotros/Profile"


export const Nosotros = () => {
  return (
    <div>

     <HeaderTwo/> 
     <History/>

    <Profile/>
     <Contact/>
      <Footer/>
     </div>
  )
}

