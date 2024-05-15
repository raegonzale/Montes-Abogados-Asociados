import { Header } from "./Header"
import {PrincipalArticle} from "./PrincipalArticle"
import {SecondArticle} from "./SecondArticle"
import {ThirdArticle} from "./ThirdArticle"
import {FourthArticle} from "./FourthArticle"


export const Home = () => {
  return (
    <div>
    <Header/>
    <PrincipalArticle/>
    <ThirdArticle/>
    <SecondArticle/>
    <FourthArticle/>
    </div>
  )
}

