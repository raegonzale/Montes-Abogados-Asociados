import { Header } from "../../common/Header"
import {PrincipalArticle} from "./PrincipalArticle"
import {SecondArticle} from "./SecondArticle"
import {ThirdArticle} from "./ThirdArticle"
import {FourthArticle} from "./FourthArticle"
import {Form} from "../../common/Form"


export const Home = () => {
  return (
    <div>
    <Header/>
    <PrincipalArticle/>
    <ThirdArticle/>
    <SecondArticle/>
    <FourthArticle/>
    <Form/>

    
    </div>
  )
}

