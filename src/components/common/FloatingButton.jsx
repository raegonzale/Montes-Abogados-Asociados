
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FloatingButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573007257266', '_blank');
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 48, right: 16, zIndex: 50 }}>
      <Fab
        aria-label="WhatsApp"
        onClick={handleWhatsAppClick}
        sx={{
          backgroundColor: '#25D366',
          '&:hover': { backgroundColor: '#1DA851' },
          color: 'white'
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
}