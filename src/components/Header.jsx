import logo from '../assets/logos/logo.png';

import { NavBar } from './NavBar';


export const Header = () => {
  return (
    <header className='font-abc flex xl:h-[65px] xl:px-20 place-content-between items-center'>
      <img className="xl:w-60 hidden xl:flex" src={logo} alt="Logo principal" />
      <NavBar />
    </header>
  )
}

