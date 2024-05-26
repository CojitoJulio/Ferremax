import { useRef } from "react"

export const Cart = () => {

    const carrito = useRef(null)

    const OpenCart = () => {
        if (carrito.current.classList != 'container-cart-products hidden-cart') {
            carrito.current.classList.add('hidden-cart')
        } else {
            carrito.current.classList.remove('hidden-cart')
        }
    }


    return (
        <div>
            <button onClick={OpenCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
            </button>

            <div className="container-cart-products hidden-cart" ref={carrito}>
                <div className="row-products">
                    <div className="cart-products">
                        <div className="cart-img">
                            <img src="https://baumart.cl/wp-content/uploads/2024/02/martillo-inoxcrom.webp" alt="" />
                        </div>
                        <div className="info-cart-product">
                            <span className="cantidad-prod-cart">1</span>
                            <p className="titulo-prod-cart">Taladro</p>
                            <span className="precio-prod-cart">$87000</span>
                        </div>
                    </div>
                    <div className="cart-products">
                        <div className="cart-img">
                            <img src="https://baumart.cl/wp-content/uploads/2024/02/martillo-inoxcrom.webp" alt="" />
                        </div>
                        <div className="info-cart-product">
                            <span className="cantidad-prod-cart">1</span>
                            <p className="titulo-prod-cart">Taladro</p>
                            <span className="precio-prod-cart">$87000</span>
                        </div>
                    </div>
                </div>
                <div className="cart-total">
                    <h3>Total:</h3>
                    <span>$ 87000</span>
                </div>
            </div>
        </div>
    )
}
