import { useEffect, useState } from "react"
import { fetchProd } from "../../Servicios/ServiciosAPI"
import { Item } from "./Componentes/Item";

export const AllProducts = () => {

    const [prods, setProds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const ProductosData = await fetchProd()
            setProds(ProductosData)
        }

        fetchData();
    }, [])

    return (

        <section className="allprods">
            <h1>Todos los Productos</h1>
            <div className="ofertones">

                {prods.map((prod, i) => (
                    <Item key={i} prod={prod} />
                ))}

            </div>
        </section>


    )
}
