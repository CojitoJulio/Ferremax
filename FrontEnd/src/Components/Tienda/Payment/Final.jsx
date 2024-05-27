import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export const Final = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const query = useQuery();
    const token = query.get('token_ws');

    const usuario = {
        "user_id": 3,
        "nombre": "Michele",
        "apellido": "Mouton",
        "correo": "michelequattro@gmail.com"
    };

    useEffect(() => {
        const confirmPayment = async () => {
            try {
                const response = await fetch('http://localhost:3000/transbank/commit', {
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
    }, [token]); // Agregar 'token' como dependencia

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!result) {
        return <div>No result found.</div>;
    }

    return (
        <div className="FinalPage">
            <div className="finalblock">
                <h1>Datos Cliente</h1>
                <div className="datoscliente">
                    <h2>{usuario.nombre}</h2>
                    <h2>{usuario.apellido}</h2>
                </div>
                <p>{usuario.correo}</p>

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

