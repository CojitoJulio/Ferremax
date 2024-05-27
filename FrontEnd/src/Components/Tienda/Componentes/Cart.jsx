import { useContext, useEffect, useRef, useState } from "react"
import { CartContext } from "../../../Contexts/CartProvider";
import { Link } from "react-router-dom";

export const Cart = () => {

    const carrito = useRef(null)
    const [cart, setCart] = useContext(CartContext)
    const [suma, setSuma] = useState(0)

    const OpenCart = () => {
        carrito.current.classList.toggle('hidden-cart');
    };

    const handleClickOutside = (event) => {
        if (carrito.current && !carrito.current.contains(event.target) && !event.target.closest('button')) {
            carrito.current.classList.add('hidden-cart');
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const sum = cart.reduce((acc, cartP) => acc + cartP.precio * cartP.quantity, 0);
        setSuma(sum);

    },[cart])


    return (
        <div>
            <button onClick={OpenCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
            </button>

            <div className="container-cart-products hidden-cart" ref={carrito}>
                <div className="row-products">
                    {cart.length > 0 ?  
                        cart.map((cartP, i) => (
                            <div className="cart-products" key={i}>
                                <div className="cart-img">
                                    <img src={cartP.imagen} alt="" />
                                </div>
                                <div className="info-cart-product">
                                    <span className="cantidad-prod-cart">{cartP.quantity}</span>
                                    <p className="titulo-prod-cart">{cartP.nombre}</p>
                                    <span className="precio-prod-cart">${cartP.precio * cartP.quantity}</span>
                                </div>
                            </div>
                        ))
                    : <h1>Carrito Vacio</h1>}                    
                </div>
                <div className="cart-total">
                    <h3>Total:</h3>
                    <span>$ {new Intl.NumberFormat("de-DE").format(suma)}</span>
                </div>
                {cart.length > 0 ? <div className="Pagar">
                    <button ><Link to="resumen">PAGAR</Link></button>
                </div>
                : <></>}
                
            </div>

        </div>
    )
}
