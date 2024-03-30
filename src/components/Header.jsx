import logo from '../assets/logos/logo.png';
import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <header className='h-[65px] px-20 flex place-content-between items-center font-abc'>
      <img className="xl:w-56 xl:h-13 hidden xl:flex" src={logo} alt="Logo principal" />
      <NavBar />
    </header>
  )
}

