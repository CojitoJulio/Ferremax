export const Item = ({ promo }) => {
    return (
        <div className="prodoff">
            <img src={promo.imagen} alt="" />
            <p>{promo.marca}</p>
            <p>{promo.nombre}</p>
            <div className="price">
                <p id='lastprice'>${promo.precio}</p>
                <p id='newprice'>${promo.preciop}</p>
            </div>
        </div>
    )
}
