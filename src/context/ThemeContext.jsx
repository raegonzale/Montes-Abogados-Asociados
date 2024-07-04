import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); 
  };
  const theme = darkMode
    ? {
        background: "#0f172a",
        backgroundSecondary:"",
        backgroundAcordion:"#1e293b",
        backgroundCard:"#0f172a",
        textPrimary: "#ffffff",
        textSecondary: "#ffffff",
        primary: "#1976d2",
        secondary:"#00D1FF",
        form:"#1e293b",
        footer:"#1e293b",
        animation1:"#00D1FF",
      }
    : {
        background: "#ffffff",
        backgroundSecondary:"#0f172a",
        backgroundAcordion:"",
        backgroundCard:"",
        textPrimary: "#0f172a",
        textSecondary: "#1976d2",
        primary: "#1976d2",
        secondary:"#00D1FF",
        form:"",
        footer:"#f5f5f5",
        animation1:"#00D1FF",
        
      };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext };