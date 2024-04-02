import logo from '../assets/logos/logo.png';

import { NavBar } from './NavBar';


export const Header = () => {
  return (
    <header className='font-abc w-full px-1 flex place-content-between items-center xl:flex xl:w-full xl:h-[75px] xl:px-20'>
      <img className="xl:w-60 px-3 hidden xl:flex" src={logo} alt="Logo principal" />
      <NavBar />
    </header>
  )
}

