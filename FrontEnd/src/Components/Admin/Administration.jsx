import { NavLink, Route, Routes } from "react-router-dom"
import { Productos } from "./Productos"
import { AddProducto } from "./AddProducto"

export const Administration = () => {
    return (<>
        <table id='tools'>
            <tbody>
                <tr>
                    <td><NavLink to="/administration" id="linkaso">Productos</NavLink></td>
                    <td><NavLink to="agregar" id='linkaso'>Agregar Producto</NavLink></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/agregar" element={<AddProducto />} />
        </Routes>
    </>
    )
}
