import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/nosotros" element={<div>Estoy en la ruta nosotros</div>} />



        
        <Route path="/soluciones" element={<div>Estoy en la ruta soluciones</div>} />
        <Route path="/soluciones/recursosHumanos" element={<div>Estoy en recursos humanos</div>} />
        <Route path="/soluciones/recaudoCartera" element={<div>Estoy en recaudo de cartera</div>} />
        <Route path="/soluciones/derechoLaboral" element={<div>Estoy en derecho laboral</div>} />
        <Route path="/soluciones/derechoComercial" element={<div>Estoy en derecho comercial</div>} />
        <Route path="/soluciones/propiedadIntelectual" element={<div>Estoy en propiedad intelectual</div>} />
        <Route path="/soluciones/derechoSocietario" element={<div>Estoy en derecho societario</div>} />


        <Route path="/insigths" element={<div>Estoy en la ruta insigths</div>} />

        <Route path="/login" element={<div>Estoy en login</div>} />
        



        <Route path="*" element={ <Navigate to="/"/> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
