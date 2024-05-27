import { NavLink, Route, Routes } from "react-router-dom"
import { Productos } from "./Productos"
import { AddProducto } from "./AddProducto"
import { ModProducto } from "./ModProducto"
import { DeleteProducto } from "./DeleteProducto"

export const Administration = () => {
    return (<>
        <table id='tools'>
            <tbody>
                <tr>
                    <td><NavLink to="/administration" id="linkaso">Productos</NavLink></td>
                    <td><NavLink to="agregar" id='linkaso'>Agregar Producto</NavLink></td>
                    <td><NavLink to="modificar" id='linkaso'>Modificar Producto</NavLink></td>
                    <td><NavLink to="eliminar" id='linkaso'>Eliminar Producto</NavLink></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/agregar" element={<AddProducto />} />
            <Route path="/modificar" element={<ModProducto />} />
            <Route path="/eliminar" element={<DeleteProducto />} />
        </Routes>
    </>
    )
}
