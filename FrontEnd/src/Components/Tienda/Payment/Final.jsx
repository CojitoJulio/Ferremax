import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TRANSBANK_URL } from "../../../variables";
import { fetchTransacciones } from "../../../Servicios/ServiciosAPI";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export const Final = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [User, setUser] = useState(true);
    const query = useQuery();
    const token = query.get('token_ws');

    const apiUrl = TRANSBANK_URL


    useEffect(() => {

        const confirmPayment = async () => {
            try {
                const response = await fetch(apiUrl + '/transbank/commit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setResult(data);
            } catch (error) {
                console.error('Error confirming payment:', error);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            confirmPayment();
        } else {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        const fetchUserData = async () => {
            const TransData = await fetchTransacciones()

            TransData.map((trans) => {
                if (trans.session_id == result.session_id) {
                    setUser(trans)
                }
            })
        }

        if (result) {
            fetchUserData();
        }
    }, [result]);



    if (loading) {
        return <div className="loading">Cargando<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>;
    }

    if (!result) {
        return <div className="loading">Se está demorando un poco<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>;
    }


    return (
        <div className="FinalPage">
            <div className="finalblock">
                <h1>Datos Cliente</h1>
                <div className="datoscliente">
                    <h2>{User.nombre}</h2>
                    <h2>{User.apellido}</h2>
                </div>
                <p>{User.correo}</p>

                <h2 id="titulometodo">Metodo de Pago</h2>

                <div className="datostarjeta">
                    <p>Tarjeta terminada en: {result.card_detail.card_number}</p>
                    {result.payment_type_code === 'VN' ? <p>Venta Credito</p> : <p>Venta Debito</p>}
                </div>
            </div>
            <div className="finalblock">
                <div className="checkbox">
                    {result.status === 'AUTHORIZED' ?
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSm6tT1ZzmqNvZ0V3ya8YLWh8_GfKfyhsjjN9DjvCxRw&s" alt="" />
                        : <img src="https://www.svgrepo.com/show/52314/unchecked.svg" alt="" />}
                </div>
                <div className="auth">
                    <h3>transacción</h3>
                    {result.status === 'AUTHORIZED' ? <h1>Realizada</h1> : <h1>Rechazada</h1>}
                </div>
                <h1>$ {new Intl.NumberFormat("de-DE").format(result.amount)}</h1>
            </div>
            <div className="finalblock">
                <div className="ferreinfo">
                    {result.status == 'AUTHORIZED' ? <p>gracias por comprar en</p> : <p>no se realizaron cargos</p>}

                    <h1>Ferremas</h1>
                    <button><Link to="/">Volver a la tienda</Link></button>
                </div>
            </div>
        </div>
    );
};

