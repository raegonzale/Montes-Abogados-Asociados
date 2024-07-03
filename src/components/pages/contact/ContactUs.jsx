import { HeaderTwo } from "../../common/HeaderTwo"
import { Contact } from "../../common/Contact"
import { Footer } from "../../common/Footer"
import { Form } from "../../common/Form"
import TitleContact from "./TitleContact"
import ContactInformation from "./ContactInformation"

const ContactUs = () => {
  return (
    <div>
    <HeaderTwo/>
    <TitleContact/>
    <ContactInformation/>
    <Form/>
    <Contact/>
    <Footer/>
    </div>
  )
}
export default ContactUs