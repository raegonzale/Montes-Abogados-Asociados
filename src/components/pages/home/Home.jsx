import { Header } from "../../common/Header"
import {PrincipalArticle} from "./PrincipalArticle"
import {SecondArticle} from "./SecondArticle"
import {ThirdArticle} from "./ThirdArticle"
import {FourthArticle} from "./FourthArticle"
import {Footer} from "./Footer"



export const Home = () => {
  return (
    <div>
    <Header/>
    <PrincipalArticle/>
    <ThirdArticle/>
    <SecondArticle/>
    <FourthArticle/>
    <Footer/>
    

    
    </div>
  )
}

