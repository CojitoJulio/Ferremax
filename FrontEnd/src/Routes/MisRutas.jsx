import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Productos } from '../Components/Productos';
import { AddProducto } from '../Components/AddProducto';
import { GetStock } from "../Components/GetStock";


export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Navegacion */}

      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/agregar" element={<AddProducto />} />
      </Routes>

    </BrowserRouter>
  )
}
