import React, { useEffect, useState } from 'react'

export const Productos = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/api');
        const productos = await response.json()
        setData(productos);
    }

    useEffect(() => {
        fetchData();
    }, [])

  return (
    <div id='inventario'>
        <table id='productos'>
            <tr>
                <td>Imagen</td>
                <td>Codigo</td>
                <td>Producto</td>
                <td>Marca</td>
                <td>Precio</td>
            </tr>
            { data.map((prod) => 
                <tr key={prod.codigo}>
                    <td></td>
                    <td>{prod.codigo}</td>
                    <td>{prod.nombre}</td>
                    <td>{prod.marca}</td>
                    <td>${prod.precio}</td>
                </tr>
            )}
        </table>

    </div>
  )
}
