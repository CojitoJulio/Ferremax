import { useEffect, useState } from 'react'


export const GetStock = ({ producto }) => {

    const [stock, setStock] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/api/stock/' + producto);
        const stockdb = await response.json()
        setStock(stockdb);
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [producto])

    return (
        <div className='stock'>
            <h3>Producto: {producto}</h3>
            <table id='resumenstock'>
                <tbody>

                    {stock.map((stocksito) =>
                        <tr key={stocksito.nombre} id='sucursalestb'>
                            <td className='stockfields'>{stocksito.nombre} </td>
                            <td className='number'>{stocksito.stock}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
