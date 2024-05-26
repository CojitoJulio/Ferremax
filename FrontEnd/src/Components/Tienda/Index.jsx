import { useEffect, useState } from 'react'
import './../../Styles/Store.css'
import { Item } from './Componentes/Item'
import { fetchProd } from '../../Servicios/ServiciosAPI'
import { Brand } from './Componentes/Brand'

export const Index = () => {

    const [promos, setPromos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const ProductosData = await fetchProd()
            setPromos(ProductosData)
        }

        fetchData();
    }, [])

    const brands = [{
        "brand": "Bosch",
        "desc": "35%",
        "url": "https://i.pinimg.com/originals/c4/30/5c/c4305cf1a09a7bcf2d7dd64e67da411c.png"
    },
    {
        "brand": "Wurth",
        "desc": "40%",
        "url": "https://www.ricoh.co.za/media/Wurth%20640x420%20-%20Mobile%20updated%20_tcm99-59128.jpg"
    },
    {
        "brand": "Stanley",
        "desc": "70%",
        "url": "https://i.pinimg.com/originals/14/a2/14/14a2141d910ba37c7c75375c72819d39.jpg"
    },
    {
        "brand": "Black + Decker",
        "desc": "20%",
        "url": "https://www.revista.ferrepat.com/wp-content/uploads/2018/04/eeee.png"
    }]

    return (
        <div className='inicio'>

            <h1>Herramientas</h1>

            <section className='PromoBanner'>
                <img src="https://www.hls.ie/wp-content/uploads/2023/08/The-Importance-of-Regular-Tool-Inspections.jpg" alt="" />
                <div className="contentPromo">
                    <aside className='infobanner'>
                        <p>1er Aniversario</p>
                        <h2>50% de</h2>
                        <h2>Descuento</h2>
                        <small>Productos Seleccionados</small>
                        <button>VER AHORA</button>
                    </aside>
                    <aside className='grant'>
                        <p id='firstp'>PRECIOS </p>
                        <p id='firstp'>BAJOS</p>
                        <p>Garantizados</p>
                    </aside>
                </div>
            </section>

            <span>Envios gratis por compras desde $90.000</span>

            <h1>Promociones</h1>

            {/* Ofertas */}

            <div className="ofertones">

                {promos.filter(promo => promo.precio_promocion > 0).slice(0, 4).map((promo) => (
                    <Item key={promo.producto} prod={promo} />
                ))}

            </div>

            {/* Otro banner */}

            <div className="separation"></div>

            <section className='PromoBanner'>
                <img src="https://www.realestate.com.au/news-image/w_1024,h_576/v1658301524/news-lifestyle-content-assets/wp-content/production/capi_e01264fb89d8df09315a0adbaaf5d6ba_49b1368b2a0a8a6ac35c0d6a0fa3fe28.jpeg?_i=AA" alt="" />
                <div className="contentPromo">
                    <aside className='infobanner'>
                        <p>Lo Mejor para construir</p>
                        <h2>Tu Hogar</h2>
                        <p>Lo encuentras en</p>
                        <h2>Ferremas</h2>
                        <button>VER AHORA</button>
                    </aside>
                </div>
            </section>

            {/* Marcas en Descuento */}

            <h1>Mejores Marcas</h1>

            <div className="marcas">
                {brands.map((brand) => (
                    <Brand key={brand.brand} brand={brand} />

                ))}

            </div>

        </div>
    )
}
