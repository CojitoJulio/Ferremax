import { useContext, useState } from "react"
import { DolarContext } from "../../../Contexts/DolarProvider"

export const Divisa = () => {

    const [dolar, divisa, setDivisa] = useContext(DolarContext)

    const cambiar = (e) => {
        setDivisa(e.target.value)
    }

    return (
        <div className="divisa">
            <select name="moneda" id="" onChange={cambiar}>
                <option value="CLP">CLP</option>
                <option value="USD">USD</option>
            </select>
        </div>
    )
}
