export const Brand = ({ brand }) => {
    return (
        <div className="brand">
            <div className="banner">
                <img src={brand.url} alt="" />
            </div>
            <div className="brandbody">
                <small>Ahorra hasta un</small>
                <p>{brand.desc} OFF</p>
                <p>{brand.brand}</p>
            </div>
        </div>
    )
}
