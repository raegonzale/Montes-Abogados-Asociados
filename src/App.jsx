import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Soluciones } from "./components/pages/soluciones/Soluciones";

import { Nosotros } from "./components/pages/nosotros/Nosotros";
import { InsigthsB } from "./components/pages/insigths/InsigthsB";
import BlogsContextProvider from "./context/BlogsContext";
import BlogDetail from "./components/pages/insigths/BlogDetail";
import ServiceContextProvider from "./context/ServiceContext";
import ServiceDetails from "./components/pages/soluciones/ServiceDetails";
import ContactUs from "./components/pages/contact/ContactUs";




function App() {
  return (
  
  <ServiceContextProvider>
    <BlogsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/soluciones/:serviceDataId" element={<ServiceDetails/> }/>
          
          
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<ContactUs />} />
          
          
          <Route path="/insigths" element={<InsigthsB />} />
          <Route path="/insigths/:dataBlogId" element={<BlogDetail/> }/>
          
          
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="*://www.linkedin.com/*" element={() => {}} />
        </Routes>
      </BrowserRouter>
      </BlogsContextProvider>
      </ServiceContextProvider>         
  
  );
}

export default App;
