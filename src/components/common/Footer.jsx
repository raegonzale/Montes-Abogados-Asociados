
import InstagramIcon from '@mui/icons-material/Instagram';
import {grey, lightBlue, } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



export const Footer = () => {
  return (
    
    <div className=" w-full mx-auto px-6 h-[540px] bg-skyBlue">

<div className="">Soy el primer parrafo</div>
      <div className="mt-10 w-11 items-center justify-center flex flex-col rounded-xl ">

    <IconButton sx={{color: grey[50]}} size="large" aria-label="Instagram">
    <InstagramIcon fontSize="inherit" />
    </IconButton>

    <IconButton sx={{color: grey[50]}} size="large" aria-label="Facebook">
    <FacebookIcon fontSize="inherit" />
    </IconButton>

    <IconButton sx={{color: grey[50]}} size="large" aria-label="YouTube">
    <YouTubeIcon fontSize="inherit" />
    </IconButton>

    <IconButton sx={{color: grey[50]}} size="large" aria-label="Linkedin">
    <LinkedInIcon fontSize="inherit" />
    </IconButton>

    <IconButton sx={{color: grey[50]}} size="large" aria-label="WhatsApp">
    <WhatsAppIcon fontSize="inherit" />
    </IconButton>


      </div>

      

      

    </div>
  )
}
