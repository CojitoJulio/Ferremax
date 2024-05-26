import { Route, Routes, Link } from "react-router-dom"
import { Index } from "./Index"
import { CartProvider } from "../../Contexts/CartProvider"
import { AllProducts } from "./AllProducts"
import { Cart } from "./Componentes/Cart"

export const InitialPage = () => {
    return (
        <CartProvider>
            <div>
                <div className="NavBar">
                    <div className="nombre">
                        <h2>Ferremas</h2>
                    </div>
                    <div className="utilities">
                        <ul>
                            <li><Link to="">Inicio</Link></li>
                            <li><Link to="productos">Productos</Link></li>
                            <li>Contacto</li>
                            <li>Iniciar Sesion</li>
                        </ul>
                        <Cart />
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/productos" element={<AllProducts />} />
                </Routes>
            </div>
        </CartProvider>
    )
}
