import './../../../Styles/Payment.css'
import { useContext, useEffect, useRef, useState } from "react"
import { CartContext } from "../../../Contexts/CartProvider";
import { FRONTEND_URL, TRANSBANK_URL } from '../../../variables';
import { DolarContext } from '../../../Contexts/DolarProvider';

export const ResumenPage = () => {

    const [cart, setCart] = useContext(CartContext)
    const [suma, setSuma] = useState(0)
    const [datos, setDatos] = useState({})
    const [dolar, divisa, setDivisa] = useContext(DolarContext)

    const apiUrl = TRANSBANK_URL
    const frontUrl = FRONTEND_URL

    const paybutton = useRef(null)
    const fakepaybutton = useRef(null)

    const [sessionId] = useState('123456');
    const [buyOrder] = useState(Math.random(1000000000, 9999999999).toString());

    const handlePayment = async (e) => {
        e.preventDefault();
        console.log(sessionId)
        console.log(buyOrder)
        console.log(suma)
        const response = await fetch(apiUrl + '/transbank/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: suma, sessionId, buyOrder, returnUrl: frontUrl + '/store/final' })
        });

        const data = await response.json();
        if (data.url) {
            console.log(data)
            setDatos(data)
            fakepaybutton.current.hidden = true
            paybutton.current.hidden = false
            // window.location.href = data.url + '?token_ws=' + data.token;
        }
    }

    useEffect(() => {
        const sum = cart.reduce((acc, cartP) => acc + cartP.precio * cartP.quantity, 0);
        setSuma(sum);

    }, [cart])

    return (
        <div className="ResumenPage">
            <div className="paymentData">
                <form action="">
                    <div className="blockname">
                        <div>
                            <h3>NOMBRE:</h3>
                            <input type="text" name='Nombre' />
                        </div>
                        <div>
                            <h3>APELLIDO:</h3>
                            <input type="text" name='Apellido' />
                        </div>
                    </div>

                    <div className="blockname">
                        <div>
                            <h3>CORREO:</h3>
                            <input type="text" name='correo' placeholder='ejemplo@ejemplo.com' />
                        </div>
                        <div>
                            <h3>TELEFONO:</h3>
                            <input type="text" name='telefono' placeholder='+569' />
                        </div>
                    </div>

                    <div className="blockname">
                        <div>
                            <h3>DIRECCION:</h3>
                            <input type="text" name='direccion' placeholder='Avenida Siempre Viva' />
                        </div>
                        <div>
                            <h3>NUMERO CASA:</h3>
                            <input type="text" name='numerocasa' placeholder='2558' />
                        </div>
                    </div>

                    <div className="blockpay">
                        <div className="metodo">
                            <input type="radio" name="pago" id="" onClick={handlePayment} />
                            <img src="https://keroscosmetic.cl/wp-content/uploads/2020/12/logo-web-pay-plus.png" alt="" />
                        </div>
                        <div className="metodo mercado">
                            <input type="radio" name="pago" id="" disabled />
                            <img src="https://ps.w.org/woocommerce-mercadopago/assets/icon-256x256.png?rev=2653727" alt="" />
                        </div>
                    </div>
                </form>

            </div>
            <div className="resumenItems">
                <div className='block blockitems'>
                    <h3>Items</h3>
                    <div className="itemsgeneral">
                        {cart.map((cartP, i) => (
                            <div className="cart-products resumen-products" key={i}>
                                <div className="cart-img">
                                    <img src={cartP.imagen} alt="" />
                                </div>
                                <div className="info-cart-product">
                                    <span className="cantidad-prod-cart">{cartP.quantity}</span>
                                    <p className="titulo-prod-cart">{cartP.nombre}</p>
                                    {divisa == 'CLP' ? <span className="precio-prod-cart">CLP${cartP.precio * cartP.quantity}</span> : <span className="precio-prod-cart">US${((cartP.precio * cartP.quantity) / dolar).toFixed(2)}</span>}

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total total-resumen">
                        <h3>Total:</h3>
                        {divisa == 'CLP' ? (
                            <span>CLP$ {new Intl.NumberFormat("de-DE").format(suma)}</span>
                        ) : (
                            <span>US$ {((parseFloat(new Intl.NumberFormat("de-DE").format(suma).replace(/\./g, '').replace(/,/g, '.'))) / parseFloat(dolar)).toFixed(2)}</span>
                        )}
                    </div>
                    <div className='FinalPago'>
                        <h3>Finalizar</h3>
                        <form action={datos.url} method="POST">
                            <input type="hidden" name="token_ws" value={datos.token} />
                            <input type="submit" id='real' hidden value="Pagar" ref={paybutton} />
                            <input type="submit" id='fake' value="Pagar" disabled ref={fakepaybutton} />
                        </form>
                        <div className="datocompa">

                            <p>El pago final se realizará en $CLP</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
