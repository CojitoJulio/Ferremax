import { useEffect, useState } from 'react'
import { API_URL } from '../../variables'

export const GetStock = ({ producto }) => {

    const apiUrl = API_URL

    const [stock, setStock] = useState([])

    const fetchData = async () => {
        const response = await fetch(apiUrl + '/stock/' + producto);
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
