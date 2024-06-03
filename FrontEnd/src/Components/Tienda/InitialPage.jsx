import { Route, Routes, Link } from "react-router-dom"
import { Index } from "./Index"
import { CartProvider } from "../../Contexts/CartProvider"
import { AllProducts } from "./AllProducts"
import { Cart } from "./Componentes/Cart"
import { ResumenPage } from "./Payment/ResumenPage"
import { Final } from "./Payment/Final"
import { DolarProvider } from "../../Contexts/DolarProvider"
import { Divisa } from "./Componentes/Divisa"

export const InitialPage = () => {
    return (
        <CartProvider>
            <DolarProvider>
                <div className="Total">
                    <div className="NavBar">
                        <div className="nombre">
                            <h2><Link to="">Ferremas</Link></h2>
                        </div>
                        <div className="utilities">
                            <ul>
                                <li><Link to="">Inicio</Link></li>
                                <li><Link to="productos">Productos</Link></li>
                                <li>Contacto</li>
                                <li>Iniciar Sesion</li>
                            </ul>
                            <Cart />
                            <Divisa />
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/productos" element={<AllProducts />} />
                        <Route path="/resumen" element={<ResumenPage />} />
                        <Route path="/final" element={<Final />} />
                    </Routes>
                </div>
            </DolarProvider>
        </CartProvider>
    )
}
