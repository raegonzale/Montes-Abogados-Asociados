import {Form} from "../../common/Form"
import ondas from "../../../assets/images/fondoOndas.png";


export const Footer = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${ondas})` }}></div>
    
      <Form />
    
  </div>
)
}
