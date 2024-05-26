import { useContext } from "react"
import { CartContext } from "../../../Contexts/CartProvider"

export const Item = ({ prod }) => {

    const [cart, setCart] = useContext(CartContext)

    const addToCart = () => {

        setCart((currItems) => {
            const isItemsFound = currItems.find((item) => item.id === prod.producto);
            if (isItemsFound) {
                return currItems.map((item) => {
                    if (item.id === prod.producto) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
            } else {
                var id = prod.producto
                var precio = prod.preciop

                return [...currItems, { id, quantity: 1, precio }]
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
