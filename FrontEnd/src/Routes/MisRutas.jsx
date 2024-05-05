import React from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Productos } from '../Components/Productos';
import { AddProducto } from '../Components/AddProducto';


export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* Navegacion */}

        <Routes>
          <Route path="/productos" element={<Productos/>} />
          <Route path="/agregar" element={<AddProducto/>} />
        </Routes>

    </BrowserRouter>
  )
}
