import logo from '../assets/logos/logo.png';

export const NavBar = () => {
  return (
    <>
    <ul className=" font-abc text-skyBlue xl:h-[34px] xl:w-[574px] text-[14px] hidden xl:flex xl:text-[15px] 
    xl:items-center xl:place-content-around">
        <li>
          <a href="#">Soluciones</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Talentos</a>
        </li>
        <li>
          <a href="#">Insigths</a>
        </li>
        <li>
          <a href="#">Clientes</a>
        </li>
    </ul>  
    <span className="xl:h-[34px] xl:w-[230px] hidden xl:items-center  xl:flex xl:place-content-around xl:justify-around">
      <button onclick="#" className= "xl:w-35 xl:h-[34px] px-3 rounded-lg xl:shadow-md xl:shadow-grey bg-skyBlue text-white text-[14px]">Contactanos</button>
      <svg xmlns="http://www.w3.org/2000/svg" alt="language" className="fill-skyBlue" height="25" viewBox="0 -960 960 960" width="25"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" alt="darkMode" className="fill-skyBlue" height="25" viewBox="0 -960 960 960" width="25"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
    </span>
    
    <span className=" w-full h-[74px] flex items-center place-content-around justify-between border xl:hidden" >
      <img className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] " src={logo} alt="Logo principal" />
      <svg xmlns="http://www.w3.org/2000/svg" alt="menu" className="fill-skyBlue "  height="60" width="40" viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </span>
    </>
  )
}

