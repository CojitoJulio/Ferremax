import { createContext, useEffect, useState } from "react"
import { fetchDolar } from "../Servicios/ServiciosAPI";

export const DolarContext = createContext(null);

export const DolarProvider = ({ children }) => {

    const [dolar, setDolar] = useState(0)
    const [divisa, setDivisa] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const Dolarsito = await fetchDolar()
            const valorToday = (Dolarsito.Series.Obs[0].value)
            setDolar(valorToday)
            setDivisa('CLP')
        }

        fetchData()
    }, [])

    return (
        <DolarContext.Provider value={[dolar, divisa, setDivisa]}>{children}</DolarContext.Provider>
    )
}