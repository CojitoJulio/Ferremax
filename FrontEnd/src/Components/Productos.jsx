import { useEffect, useState } from 'react'
import { GetStock } from './GetStock';
import { NavLink } from 'react-router-dom'
import { fetchProd } from '../Servicios/ServiciosAPI';

export const Productos = () => {

    const [data, setData] = useState([])
    const [info, setInfo] = useState([])

    const DatosStock = (prod) => {
        setInfo(prod)
    }

    useEffect(() => {
        const fetchData = async () => {
            const ProductosData = await fetchProd()
            setData(ProductosData)
        }

        fetchData();
    }, [])

    return (
        <div id='productospage'>
            <table id='tools'>
                <tbody>
                    <tr>
                        <td><NavLink to={'/agregar'} id='linkaso'>Agregar Producto</NavLink></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div id='titulo'>
                <h1 id='nombret'>FERREMAS</h1>
                <h1 id='inventariot'>INVENTARIO</h1>
            </div>
            <div id='inventario'>
                <table id='productos'>
                    <tbody>
                        <tr id='theader'>
                            <td>Codigo</td>
                            <td>Producto</td>
                            <td>Marca</td>
                            <td>Precio</td>
                            <td>Stock</td>
                        </tr>
                        {data.map((prod) =>
                            <tr key={prod.codigo} id='prods'>
                                <td>{prod.codigo}</td>
                                <td>{prod.nombre}</td>
                                <td>{prod.marca}</td>
                                <td>${prod.precio}</td>
                                <td id='verStock' onClick={() => DatosStock(prod.codigo, prod.nombre)}>Ver Stock</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <GetStock producto={info} />

            </div>
        </div>
    )
}
