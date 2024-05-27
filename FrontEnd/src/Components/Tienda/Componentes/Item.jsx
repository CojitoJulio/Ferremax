import { useContext } from "react"
import { CartContext } from "../../../Contexts/CartProvider"

export const Item = ({ prod }) => {

    const [cart, setCart] = useContext(CartContext)

    const addToCart = () => {

        console.log(prod.codigo)

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
                var imagen = prod.imagen
                var nombre = prod.nombre
                if (prod.precio_promocion > 0) {
                    var precio = prod.precio_promocion
                } else {
                    var precio = prod.precio
                }

                return [...currItems, { id, quantity: 1, precio, nombre, imagen}]
            }
        })
    }

    return (
        <div className="prodoff" key={prod.producto}>
            <img src={prod.imagen} alt="" />
            <p>{prod.marca}</p>
            <p>{prod.nombre}</p>
            {prod.precio_promocion > 0 ? <div className="price">
                <p id='lastprice'>${prod.precio}</p>
                <p id='newprice'>${prod.precio_promocion}</p>
            </div> :
                <div className="price">
                    <p id='newprice'>${prod.precio}</p>
                </div>
            }

            <div className="addCart">
                <button onClick={addToCart}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
