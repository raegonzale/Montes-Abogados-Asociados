import { Header } from "../../common/Header"
import { PrincipalArticle } from "./PrincipalArticle"
import { SecondArticle } from "./SecondArticle"
import { ThirdArticle } from "./ThirdArticle"
import { FourthArticle } from "./FourthArticle"
import { Contact } from "../../common/Contact"
import { Footer } from "../../common/Footer"





export const Home = () => {
  return (
    <div>
    <Header/>
    <PrincipalArticle/>
    <ThirdArticle/>
    <SecondArticle/>
    <FourthArticle/>
    <Contact/>
    <Footer/>
    </div>
  )
}

