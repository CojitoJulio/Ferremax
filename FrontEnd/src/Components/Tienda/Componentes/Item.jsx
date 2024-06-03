import { useContext } from "react"
import { CartContext } from "../../../Contexts/CartProvider"
import { DolarContext } from "../../../Contexts/DolarProvider"

export const Item = ({ prod }) => {

    const [cart, setCart] = useContext(CartContext)
    const [dolar, divisa, setDivisa] = useContext(DolarContext)

    const addToCart = () => {

        setCart((currItems) => {
            const isItemsFound = currItems.find((item) => item.id === prod.codigo);
            if (isItemsFound) {
                return currItems.map((item) => {
                    if (item.id === prod.codigo) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
            } else {
                var id = prod.codigo
                var imagen = prod.subcat.imagen
                var nombre = prod.nombre
                if (prod.precio_promocion > 0) {
                    var precio = prod.precio_promocion
                } else {
                    var precio = prod.precio
                }

                return [...currItems, { id, quantity: 1, precio, nombre, imagen }]
            }
        })
    }

    return (
        <div className="prodoff" key={prod.producto}>
            <img src={prod.subcat.imagen} alt="" />
            <p>{prod.marca}</p>
            <p>{prod.nombre}</p>

            {prod.precio_promocion > 0 ? <div className="price">
                {divisa == 'CLP' ? <p id='lastprice'>CLP$ {prod.precio}</p> : <p id='lastprice'>US$ {(prod.precio / dolar).toFixed(2)}</p>}
                {divisa == 'CLP' ? <p id='newprice'>CLP$ {prod.precio_promocion}</p> : <p id='newprice'>US$ {(prod.precio_promocion / dolar).toFixed(2)}</p>}

            </div> :
                <div className="price">
                    {divisa == 'CLP' ? <p id='newprice'>CLP$ {prod.precio}</p> : <p id='newprice'>US$ {(prod.precio / dolar).toFixed(2)}</p>}

                </div>
            }

            <div className="addCart">
                <button onClick={addToCart}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
