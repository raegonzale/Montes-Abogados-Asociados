import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./components/pages/home/Home";
import { Soluciones } from "./components/pages/soluciones/Soluciones";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import { InsigthsB } from "./components/pages/insigths/InsigthsB";
import { ThemeProvider } from "./context/ThemeContext";
import BlogsContextProvider from "./context/BlogsContext";
import BlogDetail from "./components/pages/insigths/BlogDetail";
import ServiceContextProvider from "./context/ServiceContext";
import ServiceDetails from "./components/pages/soluciones/ServiceDetails";
import ContactUs from "./components/pages/contact/ContactUs";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <ServiceContextProvider>
        <BlogsContextProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/soluciones" element={<Soluciones />} />
              <Route path="/soluciones/:serviceDataId" element={<ServiceDetails />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<ContactUs />} />
              <Route path="/insigths" element={<InsigthsB />} />
              <Route path="/insigths/:dataBlogId" element={<BlogDetail />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </BlogsContextProvider>
      </ServiceContextProvider>
    </ThemeProvider>
  );
}

export default App;